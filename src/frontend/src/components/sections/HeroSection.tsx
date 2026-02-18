export default function HeroSection() {
  const scrollToShop = () => {
    const element = document.querySelector('#categories');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/generated/freshbites-hero-bg.dim_1600x900.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      </div>

      <div className="relative z-10 container text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
          Fresh Vegetables & Fruits Delivered Daily
        </h1>
        <p className="text-lg md:text-xl mb-8 md:mb-10 opacity-95">
          Farm Fresh | Affordable Prices | Free Home Delivery
        </p>
        <button
          onClick={scrollToShop}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-soft-lg"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
