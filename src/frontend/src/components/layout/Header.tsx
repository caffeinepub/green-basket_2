import { useState } from 'react';
import { ShoppingCart, Menu, User, LogIn } from 'lucide-react';
import { useCart } from '../../features/cart/useCart';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import CartSheet from '../cart/CartSheet';
import MobileMenuSheet from '../navigation/MobileMenuSheet';
import LoginDialog from '../auth/LoginDialog';
import AccountSheet from '../account/AccountSheet';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const { items } = useCart();
  const { identity } = useInternetIdentity();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const isAuthenticated = !!identity;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold text-primary">Fresh Bites 49</h1>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 hover:bg-accent rounded-md transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {isAuthenticated ? (
              <Button
                onClick={() => setAccountOpen(true)}
                className="flex items-center gap-2"
              >
                <User className="h-5 w-5" />
                <span className="hidden md:inline">Account</span>
              </Button>
            ) : (
              <Button
                onClick={() => setLoginOpen(true)}
                className="flex items-center gap-2"
              >
                <LogIn className="h-5 w-5" />
                <span className="hidden md:inline">Login</span>
              </Button>
            )}
          </div>
        </div>
      </header>

      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
      <MobileMenuSheet open={menuOpen} onOpenChange={setMenuOpen} />
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
      <AccountSheet open={accountOpen} onOpenChange={setAccountOpen} />
    </>
  );
}
