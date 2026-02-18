import { readyToCut } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function ReadyToCutSection() {
  return (
    <section id="ready-to-cut" className="py-12 md:py-16 bg-secondary/30">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Ready to Cut
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {readyToCut.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
