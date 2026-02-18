import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from './features/cart/CartProvider';
import { AuthGateProvider } from './features/auth/AuthGateProvider';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import CategorySection from './components/sections/CategorySection';
import VegetableSection from './components/sections/VegetableSection';
import ReadyToCutSection from './components/sections/ReadyToCutSection';
import SaladSection from './components/sections/SaladSection';
import SubscriptionSection from './components/sections/SubscriptionSection';
import Footer from './components/layout/Footer';
import WhatsAppFloatingButton from './components/whatsapp/WhatsAppFloatingButton';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthGateProvider>
        <CartProvider>
          <div className="min-h-screen bg-background">
            <Header />
            <main>
              <HeroSection />
              <CategorySection />
              <VegetableSection />
              <ReadyToCutSection />
              <SaladSection />
              <SubscriptionSection />
            </main>
            <Footer />
            <WhatsAppFloatingButton />
          </div>
        </CartProvider>
      </AuthGateProvider>
    </QueryClientProvider>
  );
}

export default App;
