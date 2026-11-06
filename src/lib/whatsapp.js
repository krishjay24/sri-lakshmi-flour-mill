import { business } from '../config/business.js';

export function whatsappUrl(message = '') {
  const number = business.whatsappNumber?.replace(/\D/g, '');
  if (!number) return null;
  return `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
}

export const enquiryMessage = (subject) =>
  `Hello, I visited the ${business.businessName} website. I would like to enquire about ${subject}. Please share the details.`;

export function contactMessage({ name, phone, requirement, message }) {
  return `Hello, I visited the ${business.businessName} website.\nName: ${name.trim()}\nContact: ${phone.trim()}\nRequirement: ${requirement}\nMessage: ${message.trim() || 'Please share the details.'}`;
}
