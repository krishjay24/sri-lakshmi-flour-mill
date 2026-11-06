import flour from '../assets/images/hero-flour.png';
import chilli from '../assets/images/chilli-powder.png';
import riceFlour from '../assets/images/rice-flour-stock.jpg';
import riceGrains from '../assets/images/rice-stock.jpg';
import besan from '../assets/images/besan-stock.jpg';
import turmeric from '../assets/images/turmeric-stock.jpg';
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

const productImages = {
  'rice-flour': [riceFlour, 'Representative photograph of rice flour with a scoop'],
  'chilli-powder': [chilli, 'Illustration of ground chilli and dried chillies'],
  'premium-rice': [riceGrains, 'Representative photograph of uncooked rice grains in a bowl'],
  'wheat-flour': [flour, 'Illustration of wheat grains and flour'],
  besan: [besan, 'Representative photograph of gram flour on a plate'],
  'turmeric-powder': [turmeric, 'Representative photograph of turmeric powder and a wooden spoon'],
};

export const products = sourceProducts.map(({ id, slug, name, category, categoryLabel }) => ({
  id, slug, name, category, categoryLabel,
  description: descriptions[slug],
  image: productImages[slug][0],
  imageAlt: productImages[slug][1],
  stockPhoto: !['chilli-powder', 'wheat-flour'].includes(slug),
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
