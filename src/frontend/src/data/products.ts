export interface Product {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  category: 'vegetable' | 'ready-to-cut' | 'salad';
  image: string;
}

export const vegetables: Product[] = [
  { id: 'veg-1', name: 'Tomato', price: 10, priceDisplay: '₹10 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-2', name: 'Potato', price: 10, priceDisplay: '₹10 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-3', name: 'Onion', price: 10, priceDisplay: '₹10 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-4', name: 'Garlic', price: 25, priceDisplay: '₹25 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-5', name: 'Ginger', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-6', name: 'Cabbage', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-7', name: 'Cauliflower', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-8', name: 'Brinjal', price: 40, priceDisplay: '₹40 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-9', name: 'Beetroot', price: 10, priceDisplay: '₹10 each', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-10', name: 'Okra', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-11', name: 'Cucumber', price: 10, priceDisplay: '₹10 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-12', name: 'Ridge Gourd', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-13', name: 'Cluster Beans', price: 40, priceDisplay: '₹40 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-14', name: 'Cowpeas', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-15', name: 'Spring Onion', price: 10, priceDisplay: '₹10 per bunch', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-16', name: 'Capsicum', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-17', name: 'Green Chilli', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-18', name: 'Red Chilli', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-19', name: 'Green Peas', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-20', name: 'Spinach', price: 15, priceDisplay: '₹15 per bunch', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-21', name: 'Fenugreek', price: 10, priceDisplay: '₹10 per bunch', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-22', name: 'Coriander', price: 10, priceDisplay: '₹10 per bunch', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-23', name: 'Bottle Gourd', price: 10, priceDisplay: '₹10 each', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-24', name: 'Sweet Potato', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-25', name: 'Radish', price: 10, priceDisplay: '₹10 each', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-26', name: 'Turmeric', price: 25, priceDisplay: '₹25 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-27', name: 'Amla', price: 20, priceDisplay: '₹20 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'veg-28', name: 'Matki', price: 25, priceDisplay: '₹25 per quarter kg', category: 'vegetable', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
];

export const readyToCut: Product[] = [
  { id: 'rtc-1', name: 'Ready to Cut Onion', price: 10, priceDisplay: '₹10 per quarter kg', category: 'ready-to-cut', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'rtc-2', name: 'Ready to Cut Potato', price: 10, priceDisplay: '₹10 per quarter kg', category: 'ready-to-cut', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'rtc-3', name: 'Ready to Cut Cabbage', price: 20, priceDisplay: '₹20 per quarter kg', category: 'ready-to-cut', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'rtc-4', name: 'Ready to Cut Cauliflower', price: 20, priceDisplay: '₹20 per quarter kg', category: 'ready-to-cut', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'rtc-5', name: 'Ready to Cut Bottle Gourd', price: 10, priceDisplay: '₹10 each', category: 'ready-to-cut', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'rtc-6', name: 'Ready to Cut Carrot', price: 10, priceDisplay: '₹10 per quarter kg', category: 'ready-to-cut', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'rtc-7', name: 'Ready to Cut Capsicum', price: 20, priceDisplay: '₹20 per quarter kg', category: 'ready-to-cut', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
  { id: 'rtc-8', name: 'Ready to Cut Spinach', price: 15, priceDisplay: '₹15 per bunch', category: 'ready-to-cut', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
];

export const salads: Product[] = [
  { id: 'salad-1', name: 'Fresh Mixed Fruit Salad Box', price: 49, priceDisplay: '₹49 per box', category: 'salad', image: '/assets/generated/product-placeholder.dim_512x512.jpg' },
];

export const allProducts = [...vegetables, ...readyToCut, ...salads];
