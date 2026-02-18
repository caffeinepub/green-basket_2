import { useState } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../features/cart/useCart';
import { useAuthGate } from '../../features/auth/useAuthGate';
import { useGetCallerUserProfile } from '../../features/profile/profileQueries';
import { useAddOrder } from '../../features/orders/orderMutations';
import { generateWhatsAppCheckoutUrl } from '../../utils/whatsappCheckout';
import ProfileCompletionDialog from '../account/ProfileCompletionDialog';

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, subtotal, total, updateQuantity, removeItem } = useCart();
  const { requireAuth, isAuthenticated } = useAuthGate();
  const { data: userProfile, isLoading: profileLoading } = useGetCallerUserProfile();
  const addOrder = useAddOrder();
  const [showProfileCompletion, setShowProfileCompletion] = useState(false);

  const handleCheckout = () => {
    requireAuth(() => {
      if (!userProfile) {
        setShowProfileCompletion(true);
        return;
      }

      const orderDetails = items.map(item => 
        `${item.name} – ${item.quantity} – ${item.priceDisplay}`
      ).join('\n');

      addOrder.mutate(orderDetails, {
        onSuccess: () => {
          const whatsappUrl = generateWhatsAppCheckoutUrl(items, total, userProfile);
          window.open(whatsappUrl, '_blank');
        },
      });
    });
  };

  const handleProfileComplete = () => {
    setShowProfileCompletion(false);
  };

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-background border-l shadow-lg flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                <ShoppingCart className="h-12 w-12 text-muted-foreground" />
              </div>
              <p className="text-lg font-medium mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-foreground">Add items to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 p-3 bg-card rounded-lg border">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm truncate">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.priceDisplay}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-accent rounded transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-accent rounded transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-1 hover:bg-destructive/10 text-destructive rounded transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
            <button 
              onClick={handleCheckout}
              disabled={addOrder.isPending}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {addOrder.isPending ? 'Processing...' : 'Proceed to Checkout'}
            </button>
          </div>
        )}
      </div>

      <ProfileCompletionDialog 
        open={showProfileCompletion}
        onComplete={handleProfileComplete}
      />
    </>
  );
}

function ShoppingCart({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}
