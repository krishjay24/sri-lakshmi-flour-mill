import chilliImg from '../assets/images/chilli-powder.png';
import heroFlourImg from '../assets/images/hero-flour.png';

export const products = [
  {
    id: 1,
    name: 'Premium Rice Flour',
    slug: 'rice-flour',
    category: 'flours',
    categoryLabel: 'Flour Products',
    image: heroFlourImg,
    bgColor: '#F5F1EA',
    emoji: '🍚',
    description:
      'Freshly ground rice flour prepared from carefully selected rice for soft, smooth, and traditional cooking needs.',
    qualityInfo: 'Fine texture, hygienic preparation, fresh packing.',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Fresh Chilli Powder',
    slug: 'chilli-powder',
    category: 'spices',
    categoryLabel: 'Spice Products',
    image: chilliImg,
    bgColor: '#FFF1EC',
    emoji: '🌶️',
    description:
      'Bright, aromatic chilli powder made from dry red chillies for rich color, taste, and authentic spice flavor.',
    qualityInfo: 'Fresh grinding, natural aroma, strong color.',
    badge: 'Guntur Special',
  },
  {
    id: 3,
    name: 'Premium Quality Rice',
    slug: 'premium-rice',
    category: 'grains',
    categoryLabel: 'Rice Products',
    image: null,
    bgColor: '#F5F8F0',
    emoji: '🌾',
    description:
      'Good quality rice selected for daily family use with clean grains and trusted freshness.',
    qualityInfo: 'Carefully selected, clean grains, suitable for regular cooking.',
  },
  {
    id: 4,
    name: 'Whole Wheat Flour',
    slug: 'wheat-flour',
    category: 'flours',
    categoryLabel: 'Flour Products',
    image: null,
    bgColor: '#F5F1EA',
    emoji: '🌾',
    description:
      'Traditional stone-ground whole wheat atta with 100% bran retention for soft rotis and superior digestion.',
    qualityInfo: 'Stone ground, nutrient-rich, no additives.',
    badge: 'Traditional',
  },
  {
    id: 5,
    name: 'Besan (Gram Flour)',
    slug: 'besan',
    category: 'flours',
    categoryLabel: 'Flour Products',
    image: null,
    bgColor: '#FFF8E8',
    emoji: '🟡',
    description:
      'Fine-ground chickpea flour ideal for pakoras, sweets, kadhi, and traditional South Indian snacks.',
    qualityInfo: 'Fine texture, freshly ground, no additives.',
  },
  {
    id: 6,
    name: 'Turmeric Powder',
    slug: 'turmeric-powder',
    category: 'spices',
    categoryLabel: 'Spice Products',
    image: null,
    bgColor: '#FFF3D9',
    emoji: '🟠',
    description:
      'Pure Erode turmeric with high curcumin content, vibrant golden color and deep earthy aroma.',
    qualityInfo: 'Pure, no artificial color, high curcumin.',
  },
];

export const categories = [
  { id: 'all',   label: 'All Products'   },
  { id: 'flours', label: 'Flour Products' },
  { id: 'spices', label: 'Spice Products' },
  { id: 'grains', label: 'Rice Products'  },
];

export const whyChooseUs = [
  { id: 1, icon: '🌿', title: 'Premium Quality',   description: 'Carefully selected grains processed with traditional milling expertise.' },
  { id: 2, icon: '✨', title: '100% Hygienic',      description: 'Clean preparation methods ensuring freshness, purity, and trusted quality.' },
  { id: 3, icon: '🎯', title: 'Authentic Taste',    description: 'Traditional flour and spice products crafted with rich local flavor.' },
  { id: 4, icon: '📦', title: 'Freshly Packed',     description: 'Products packed fresh to preserve natural aroma, taste, and quality.' },
];

export const galleryImages = [
  { id: 1, label: 'Stone Mill',       category: 'mill',     emoji: '⚙️', bg: '#EAF0EC' },
  { id: 2, label: 'Wheat Grains',     category: 'products', emoji: '🌾', bg: '#F5F1EA' },
  { id: 3, label: 'Guntur Chilli',    category: 'spices',   emoji: '🌶️', bg: '#FFE8E3' },
  { id: 4, label: 'Flour Packing',    category: 'packing',  emoji: '📦', bg: '#E8EEF0' },
  { id: 5, label: 'Mill Interior',    category: 'mill',     emoji: '🏭', bg: '#EAF0EC' },
  { id: 6, label: 'Rice Flour',       category: 'products', emoji: '🍚', bg: '#F5F1EA' },
  { id: 7, label: 'Turmeric',         category: 'spices',   emoji: '🟠', bg: '#FFF3D9' },
  { id: 8, label: 'Packed Bags',      category: 'packing',  emoji: '🛍️', bg: '#E8EEF0' },
  { id: 9, label: 'Grain Sorting',    category: 'mill',     emoji: '🔄', bg: '#EAF0EC' },
  { id: 10, label: 'Ginger Garlic',   category: 'products', emoji: '🧄', bg: '#F5F8F0' },
  { id: 11, label: 'Coriander',       category: 'spices',   emoji: '🌿', bg: '#EAF5EA' },
  { id: 12, label: 'Quality Check',   category: 'mill',     emoji: '✅', bg: '#EAF0EC' },
];
