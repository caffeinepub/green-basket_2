import { vegetables } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function VegetableSection() {
  return (
    <section id="vegetables" className="py-12 md:py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Fresh Vegetables
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {vegetables.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 p-4 bg-accent/50 border border-border rounded-lg text-center">
          <p className="text-sm md:text-base text-muted-foreground">
            Prices may change daily based on market rates. Please confirm current price on WhatsApp before ordering.
          </p>
        </div>
      </div>
    </section>
  );
}
