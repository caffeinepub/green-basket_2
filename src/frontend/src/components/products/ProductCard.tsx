import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../../features/cart/useCart';
import { useAuthGate } from '../../features/auth/useAuthGate';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80';

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { requireAuth } = useAuthGate();
  const [imgSrc, setImgSrc] = useState(product.image);

  const handleAddToCart = () => {
    requireAuth(() => {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        priceDisplay: product.priceDisplay,
        type: 'product',
        image: product.image
      });
    });
  };

  const handleImageError = () => {
    setImgSrc(FALLBACK_IMAGE);
  };

  return (
    <div className="bg-card rounded-xl border shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden group">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={imgSrc}
          alt={product.name}
          loading="lazy"
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-base md:text-lg">{product.name}</h3>
          <p className="text-primary font-bold text-sm md:text-base mt-1">
            {product.priceDisplay}
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
