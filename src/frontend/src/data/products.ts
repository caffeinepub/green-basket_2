export interface Product {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  category: 'vegetable' | 'ready-to-cut' | 'salad';
  image: string;
}

export const vegetables: Product[] = [
  { id: 'veg-1', name: 'Tomato', price: 10, priceDisplay: '₹10 per quarter kg', category: 'vegetable', image: '/assets/generated/tomato.dim_512x512.jpg' },
  { id: 'veg-2', name: 'Potato', price: 10, priceDisplay: '₹10 per quarter kg', category: 'vegetable', image: '/assets/generated/potato.dim_512x512.jpg' },
  { id: 'veg-3', name: 'Onion', price: 10, priceDisplay: '₹10 per quarter kg', category: 'vegetable', image: '/assets/generated/onion-red.dim_512x512.jpg' },
  { id: 'veg-4', name: 'Garlic', price: 25, priceDisplay: '₹25 per quarter kg', category: 'vegetable', image: '/assets/generated/garlic-bulbs.dim_512x512.jpg' },
  { id: 'veg-5', name: 'Ginger', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/ginger-roots.dim_512x512.jpg' },
  { id: 'veg-6', name: 'Cabbage', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/cabbage-green.dim_512x512.jpg' },
  { id: 'veg-7', name: 'Cauliflower', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/cauliflower-white.dim_512x512.jpg' },
  { id: 'veg-8', name: 'Brinjal', price: 40, priceDisplay: '₹40 per quarter kg', category: 'vegetable', image: '/assets/generated/brinjal-purple.dim_512x512.jpg' },
  { id: 'veg-9', name: 'Beetroot', price: 10, priceDisplay: '₹10 each', category: 'vegetable', image: '/assets/generated/beetroot-red.dim_512x512.jpg' },
  { id: 'veg-10', name: 'Okra', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/okra-fresh.dim_512x512.jpg' },
  { id: 'veg-11', name: 'Cucumber', price: 10, priceDisplay: '₹10 per quarter kg', category: 'vegetable', image: '/assets/generated/cucumber-green.dim_512x512.jpg' },
  { id: 'veg-12', name: 'Ridge Gourd', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/ridge-gourd.dim_512x512.jpg' },
  { id: 'veg-13', name: 'Cluster Beans', price: 40, priceDisplay: '₹40 per quarter kg', category: 'vegetable', image: '/assets/generated/cluster-beans.dim_512x512.jpg' },
  { id: 'veg-14', name: 'Cowpeas', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/cowpeas.dim_512x512.jpg' },
  { id: 'veg-15', name: 'Spring Onion', price: 10, priceDisplay: '₹10 per bunch', category: 'vegetable', image: '/assets/generated/spring-onion-bunch.dim_512x512.jpg' },
  { id: 'veg-16', name: 'Capsicum', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-17', name: 'Green Chilli', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: 'https://images.unsplash.com/photo-1583662842876-e5d7c8f4e6e1?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-18', name: 'Red Chilli', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-19', name: 'Green Peas', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-20', name: 'Spinach', price: 15, priceDisplay: '₹15 per bunch', category: 'vegetable', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-21', name: 'Fenugreek', price: 10, priceDisplay: '₹10 per bunch', category: 'vegetable', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-22', name: 'Coriander', price: 10, priceDisplay: '₹10 per bunch', category: 'vegetable', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-23', name: 'Bottle Gourd', price: 10, priceDisplay: '₹10 each', category: 'vegetable', image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-24', name: 'Sweet Potato', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: 'https://images.unsplash.com/photo-1591205696242-db3c7fc44c31?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-25', name: 'Radish', price: 10, priceDisplay: '₹10 each', category: 'vegetable', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-26', name: 'Turmeric', price: 25, priceDisplay: '₹25 per quarter kg', category: 'vegetable', image: 'https://images.unsplash.com/photo-1615485500834-bc10199bc727?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-27', name: 'Amla', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-28', name: 'Matki', price: 25, priceDisplay: '₹25 per quarter kg', category: 'vegetable', image: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-29', name: 'Dill Leaves', price: 10, priceDisplay: '₹10 per bunch', category: 'vegetable', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-30', name: 'Curry Leaves', price: 10, priceDisplay: '₹10 per bunch', category: 'vegetable', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-31', name: 'Colocasia Leaves', price: 15, priceDisplay: '₹15 per bunch', category: 'vegetable', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-32', name: 'Tandulja Bhaji', price: 10, priceDisplay: '₹10 per bunch', category: 'vegetable', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-33', name: 'Green Cucumber', price: 10, priceDisplay: '₹10 per quarter kg', category: 'vegetable', image: '/assets/generated/cucumber-green.dim_512x512.jpg' },
  { id: 'veg-34', name: 'Raw Tomato', price: 10, priceDisplay: '₹10 per quarter kg', category: 'vegetable', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80' },
  { id: 'veg-35', name: 'Toor Beans', price: 30, priceDisplay: '₹30 per quarter kg', category: 'vegetable', image: 'https://images.unsplash.com/photo-1583663848850-46af132dc08e?auto=format&fit=crop&w=600&q=80' },
];

export const readyToCut: Product[] = [
  { id: 'rtc-1', name: 'Ready to Cook Onion', price: 10, priceDisplay: '₹10 per quarter kg', category: 'ready-to-cut', image: '/assets/generated/onion-red.dim_512x512.jpg' },
  { id: 'rtc-2', name: 'Ready to Cook Potato', price: 10, priceDisplay: '₹10 per quarter kg', category: 'ready-to-cut', image: '/assets/generated/potato.dim_512x512.jpg' },
  { id: 'rtc-3', name: 'Ready to Cook Cabbage', price: 20, priceDisplay: '₹20 per quarter kg', category: 'ready-to-cut', image: '/assets/generated/cabbage-green.dim_512x512.jpg' },
  { id: 'rtc-4', name: 'Ready to Cook Cauliflower', price: 20, priceDisplay: '₹20 per quarter kg', category: 'ready-to-cut', image: '/assets/generated/cauliflower-white.dim_512x512.jpg' },
  { id: 'rtc-5', name: 'Ready to Cook Bottle Gourd', price: 10, priceDisplay: '₹10 each', category: 'ready-to-cut', image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=600&q=80' },
  { id: 'rtc-6', name: 'Ready to Cook Carrot', price: 10, priceDisplay: '₹10 per quarter kg', category: 'ready-to-cut', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80' },
  { id: 'rtc-7', name: 'Ready to Cook Capsicum', price: 20, priceDisplay: '₹20 per quarter kg', category: 'ready-to-cut', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80' },
  { id: 'rtc-8', name: 'Ready to Cook Spinach', price: 15, priceDisplay: '₹15 per bunch', category: 'ready-to-cut', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80' },
];

export const salads: Product[] = [
  { id: 'salad-1', name: 'Fresh Mixed Fruit Salad Box', price: 49, priceDisplay: '₹49 per box', category: 'salad', image: 'https://images.unsplash.com/photo-1564093497595-593b96d80180?auto=format&fit=crop&w=600&q=80' },
];

export const allProducts = [...vegetables, ...readyToCut, ...salads];
