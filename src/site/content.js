import flour from '../assets/images/hero-flour.png';
import chilli from '../assets/images/chilli-powder.png';
import { products as sourceProducts, services as sourceServices } from '../data/catalog';

// Catalogue names/categories come from the existing site. Details and availability
// need owner review; use neutral copy rather than repeating unsupported claims.
const descriptions = {
  'rice-flour': 'Rice flour for everyday and traditional recipes.',
  'chilli-powder': 'Ground chilli for cooking and spice preparations.',
  'premium-rice': 'Rice for everyday cooking.',
  'wheat-flour': 'Wheat flour for rotis and home cooking.',
  besan: 'Gram flour for savoury snacks and sweets.',
  'turmeric-powder': 'Ground turmeric for everyday cooking.',
};

export const products = sourceProducts.map(({ id, slug, name, category, categoryLabel }) => ({
  id, slug, name, category, categoryLabel,
  description: descriptions[slug],
  image: slug === 'chilli-powder' ? chilli : slug === 'wheat-flour' ? flour : null,
  imageAlt: slug === 'chilli-powder' ? 'Illustration of ground chilli' : slug === 'wheat-flour' ? 'Illustration of wheat grains and flour' : '',
}));

export const categories = [
  { id: 'all', label: 'All products' },
  { id: 'flours', label: 'Flours' },
  { id: 'spices', label: 'Spices' },
  { id: 'grains', label: 'Rice' },
];

export const services = sourceServices.map(({ id, name }) => ({
  id, name,
  description: name === 'Custom Grain & Spice Grinding'
    ? 'Ask about processing your own grain or spices to your preferred texture.'
    : `Ask about ${name.toLowerCase()} and how to prepare your ingredients before visiting.`,
}));

export const imagery = { flour, chilli };
