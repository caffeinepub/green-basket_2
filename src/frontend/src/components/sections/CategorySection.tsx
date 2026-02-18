const categories = [
  {
    id: 'vegetables',
    name: 'Vegetables',
    image: '/assets/generated/category-vegetables.dim_800x600.jpg',
    href: '#vegetables'
  },
  {
    id: 'ready-to-cut',
    name: 'Ready to Cook',
    image: '/assets/generated/category-ready-to-cut.dim_800x600.jpg',
    href: '#ready-to-cut'
  },
  {
    id: 'salads',
    name: 'Salads',
    image: '/assets/generated/category-salads.dim_800x600.jpg',
    href: '#salads'
  }
];

export default function CategorySection() {
  const handleCategoryClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" className="py-12 md:py-16 bg-secondary/30">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.href)}
              className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300 bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <h3 className="text-white text-xl md:text-2xl font-bold p-4 md:p-6">
                  {category.name}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
