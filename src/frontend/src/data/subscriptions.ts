export interface SubscriptionPlan {
  id: string;
  name: string;
  days: number;
  price: number;
  priceDisplay: string;
  description: string;
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'sub-25',
    name: '25 Days Subscription',
    days: 25,
    price: 1000,
    priceDisplay: '₹1000',
    description: '1 fruit salad daily'
  },
  {
    id: 'sub-28',
    name: '28 Days Subscription',
    days: 28,
    price: 1200,
    priceDisplay: '₹1200',
    description: '1 fruit salad daily'
  },
  {
    id: 'sub-30',
    name: '30 Days Subscription',
    days: 30,
    price: 1400,
    priceDisplay: '₹1400',
    description: '1 fruit salad daily'
  }
];
