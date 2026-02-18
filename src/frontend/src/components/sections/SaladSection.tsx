import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../features/cart/useCart';
import { useAuthGate } from '../../features/auth/useAuthGate';
import { salads } from '../../data/products';

export default function SaladSection() {
  const { addItem } = useCart();
  const { requireAuth } = useAuthGate();
  const salad = salads[0];

  const handleAddToCart = () => {
    requireAuth(() => {
      addItem({
        id: salad.id,
        name: salad.name,
        price: salad.price,
        priceDisplay: salad.priceDisplay,
        type: 'product',
        image: salad.image
      });
    });
  };

  return (
    <section id="salads" className="py-12 md:py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Fresh Salads
        </h2>
        <div className="max-w-md mx-auto">
          <div className="bg-card rounded-xl border shadow-soft-lg overflow-hidden">
            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src={salad.image}
                alt={salad.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-bold text-xl md:text-2xl">{salad.name}</h3>
                <p className="text-primary font-bold text-lg md:text-xl mt-2">
                  {salad.priceDisplay}
                </p>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
