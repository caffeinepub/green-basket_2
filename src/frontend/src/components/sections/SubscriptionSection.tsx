import { Check } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useCart } from '../../features/cart/useCart';
import { useAuthGate } from '../../features/auth/useAuthGate';
import { useAddSubscription } from '../../features/orders/orderMutations';
import { subscriptionPlans } from '../../data/subscriptions';

export default function SubscriptionSection() {
  const { addItem } = useCart();
  const { requireAuth } = useAuthGate();
  const addSubscription = useAddSubscription();

  const handleSubscribe = (plan: typeof subscriptionPlans[0]) => {
    requireAuth(() => {
      addItem({
        id: plan.id,
        name: plan.name,
        price: plan.price,
        priceDisplay: plan.priceDisplay,
        type: 'subscription'
      });
    });
  };

  const handleWhatsAppSubscribe = () => {
    requireAuth(() => {
      const message = 'I want to subscribe to Fresh Bites 49 fruit salad subscription';
      addSubscription.mutate(message, {
        onSuccess: () => {
          window.open(
            'https://wa.me/918999844337?text=I%20want%20to%20subscribe',
            '_blank'
          );
        },
      });
    });
  };

  return (
    <section id="subscription" className="py-12 md:py-16 bg-secondary/30">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Subscription Plans
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12">
          Get fresh fruit salad delivered daily
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-card rounded-xl border shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{plan.days} Days</h3>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {plan.priceDisplay}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>1 fruit salad daily</span>
                </div>
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => handleSubscribe(plan)}
                    className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Subscribe
                  </button>
                  <button
                    onClick={handleWhatsAppSubscribe}
                    disabled={addSubscription.isPending}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    <SiWhatsapp className="h-4 w-4" />
                    {addSubscription.isPending ? 'Processing...' : 'WhatsApp Subscribe'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
