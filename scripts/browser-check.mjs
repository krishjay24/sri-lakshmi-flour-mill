// Run against a local Vite server and a headless Chrome with remote debugging
// enabled on 9228; uses the built-in WebSocket, no browser test dependencies.
import { writeFileSync } from 'node:fs';

const target = await fetch('http://127.0.0.1:9228/json/new?about:blank', { method: 'PUT' }).then((r) => r.json());
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
let sequence = 0;
const pending = new Map();
const browserErrors = [];
socket.onmessage = ({ data }) => {
  const message = JSON.parse(data);
  if (message.method === 'Runtime.exceptionThrown') browserErrors.push(message.params.exceptionDetails.text);
  if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') browserErrors.push(message.params.args.map((arg) => arg.value || arg.description).join(' '));
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    message.error ? reject(new Error(message.error.message)) : resolve(message.result);
  }
};
function send(method, params = {}) {
  const id = ++sequence;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function evalJS(expression) {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}
async function navigate(path) {
  await send('Page.navigate', { url: `http://127.0.0.1:5174${path}` });
  await sleep(550);
}
await send('Page.enable');
await send('Runtime.enable');
const widths = [320, 360, 375, 390, 430, 768, 1024, 1280, 1440, 1920];
const failures = [];
for (const width of widths) {
  await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: true });
  for (const path of ['/', '/about', '/products', '/services', '/contact', '/privacy', '/missing-page']) {
    await navigate(path);
    const state = await evalJS('({width:innerWidth,scroll:document.documentElement.scrollWidth,h1:!!document.querySelector("h1"),menu:!!document.querySelector("#site-menu-button")})');
    if (state.scroll > state.width || !state.h1) failures.push({ width, path, ...state });
    if (width === 375 && path === '/') {
      const image = await send('Page.captureScreenshot', { format: 'png' });
      writeFileSync(process.env.TEMP + '/flour-375-qa.png', Buffer.from(image.data, 'base64'));
      await evalJS('document.querySelector("#site-menu-button").click()');
      const open = await evalJS('document.querySelector("#site-menu-button").getAttribute("aria-expanded")');
      if (open !== 'true') failures.push({ width, path, menu: 'did not open' });
      await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
      await sleep(60);
      const closed = await evalJS('document.querySelector("#site-menu-button").getAttribute("aria-expanded")');
      if (closed !== 'false') failures.push({ width, path, menu: 'did not close on Escape' });
    }
    if (width === 375 && path === '/products') {
      const image = await send('Page.captureScreenshot', { format: 'png' });
      writeFileSync(process.env.TEMP + '/flour-products-375-qa.png', Buffer.from(image.data, 'base64'));
      await navigate('/products?search=rice');
      const search = await evalJS('document.querySelector("#product-search").value');
      if (search !== 'rice') failures.push({ width, path, search });
    }
    if (width === 375 && path === '/contact') {
      const image = await send('Page.captureScreenshot', { format: 'png' });
      writeFileSync(process.env.TEMP + '/flour-contact-375-qa.png', Buffer.from(image.data, 'base64'));
      await evalJS('document.querySelector(".contact-form-panel button[type=submit]").click()');
      await sleep(50);
      const error = await evalJS('!!document.querySelector(".form-error[role=alert]")');
      if (!error) failures.push({ width, path, form: 'missing validation message' });
      await evalJS(`window.open = (url) => { window.__handoffUrl = url; return null; };
        const set = (selector, value) => {
          const el = document.querySelector(selector);
          Object.getOwnPropertyDescriptor(el instanceof HTMLSelectElement ? HTMLSelectElement.prototype : HTMLInputElement.prototype, 'value').set.call(el, value);
          el.dispatchEvent(new Event('change', { bubbles: true }));
          el.dispatchEvent(new Event('input', { bubbles: true }));
        };
        set('#contact-name', 'Test Visitor');
        set('#contact-phone', '9876543210');
        set('#contact-requirement', 'Rice Grinding');`);
      await sleep(50);
      await evalJS('document.querySelector(".contact-form-panel button[type=submit]").click()');
      await sleep(50);
      const handoff = await evalJS('({url:window.__handoffUrl,ready:!!document.querySelector(".handoff"),name:document.querySelector("#contact-name").value})');
      if (!handoff.url?.includes('wa.me/919100237150') || !handoff.ready || handoff.name !== 'Test Visitor') {
        failures.push({ width, path, handoff });
      }
    }
    if (width === 375 && path === '/') {
      await evalJS('window.scrollTo({top:900,behavior:"instant"})');
      await sleep(80);
      const backToTop = await evalJS('!!document.querySelector(".floating-actions button[aria-label=\'Back to top\']")');
      if (!backToTop) failures.push({ width, path, backToTop: 'missing after scrolling' });
    }
  }
}
console.log(`Checked ${widths.length} widths x 7 routes, menu Escape and URL search.`);
console.log(failures.length ? JSON.stringify(failures, null, 2) : 'No missing headings, horizontal overflow or interaction failures.');
console.log(`${browserErrors.length} browser console/exception errors.`, browserErrors.slice(0, 5));
socket.close();
await fetch(`http://127.0.0.1:9228/json/close/${target.id}`);
if (failures.length || browserErrors.length) process.exitCode = 1;
