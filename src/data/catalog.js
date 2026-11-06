// Existing catalogue/service names, pending owner confirmation of availability.
// Legacy product/service data stays in the repository for reference but is not
// included in the public bundle because its claims have not been verified.
export const products = [
  { id: 1, slug: 'rice-flour', name: 'Premium Rice Flour', category: 'flours', categoryLabel: 'Flour Products' },
  { id: 2, slug: 'chilli-powder', name: 'Fresh Chilli Powder', category: 'spices', categoryLabel: 'Spice Products' },
  { id: 3, slug: 'premium-rice', name: 'Premium Quality Rice', category: 'grains', categoryLabel: 'Rice Products' },
  { id: 4, slug: 'wheat-flour', name: 'Whole Wheat Flour', category: 'flours', categoryLabel: 'Flour Products' },
  { id: 5, slug: 'besan', name: 'Besan (Gram Flour)', category: 'flours', categoryLabel: 'Flour Products' },
  { id: 6, slug: 'turmeric-powder', name: 'Turmeric Powder', category: 'spices', categoryLabel: 'Spice Products' },
];

export const services = [
  'Rice Grinding',
  'Gram Grinding',
  'Chilli Grinding',
  'Tomato Pickle Grinding',
  'Chilli Pickle Grinding',
  'Ginger Garlic Paste',
  'Rava Preparation',
  'Custom Grain & Spice Grinding',
].map((name, index) => ({ id: index + 1, name }));
