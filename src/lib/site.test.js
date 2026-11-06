import { test } from 'node:test';
import assert from 'node:assert/strict';
import { business } from '../config/business.js';
import { whatsappUrl, enquiryMessage, contactMessage } from './whatsapp.js';
import { filterProducts } from './catalog.js';
import { validPhone } from './validation.js';

test('owner-provided WhatsApp number is shared across enquiry links; call number stays unverified', () => {
  assert.equal(new URL(whatsappUrl(enquiryMessage('Rice Grinding'))).pathname, '/919100237150');
  assert.equal(business.phone, null);
  assert.equal(business.whatsappNumber, '+91 91002 37150');
});

test('confirmed number produces encoded product and service messages', () => {
  business.whatsappNumber = '+91 90000 00000';
  try {
    const url = whatsappUrl(enquiryMessage('Rice Grinding & Chilli'));
    assert.equal(new URL(url).pathname, '/919000000000');
    assert.match(new URL(url).searchParams.get('text'), /Rice Grinding & Chilli/);
    const formUrl = whatsappUrl(contactMessage({ name: 'A & B', phone: '9876543210', requirement: 'Rice Flour', message: 'Fine texture?' }));
    assert.match(new URL(formUrl).searchParams.get('text'), /A & B/);
    assert.match(new URL(formUrl).searchParams.get('text'), /Fine texture\?/);
  } finally { business.whatsappNumber = '+91 91002 37150'; }
});

test('search and category filter combine, reset and handle empty results', () => {
  const items = [
    { name: 'Rice Flour', description: 'Fresh rice', categoryLabel: 'Flours', category: 'flours' },
    { name: 'Chilli Powder', description: 'Ground spice', categoryLabel: 'Spices', category: 'spices' },
  ];
  assert.equal(filterProducts(items, 'RICE', 'all').length, 1);
  assert.equal(filterProducts(items, 'rice', 'spices').length, 0);
  assert.equal(filterProducts(items, '', 'all').length, 2);
});

test('phone input rejects short and long numbers', () => {
  assert.equal(validPhone('+91 98765 43210'), true);
  assert.equal(validPhone('123'), false);
  assert.equal(validPhone('1'.repeat(16)), false);
});
