export interface CartItem {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  quantity: number;
  type: 'product' | 'subscription';
  image?: string;
}

export interface CartState {
  items: CartItem[];
  subtotal: number;
  total: number;
}
