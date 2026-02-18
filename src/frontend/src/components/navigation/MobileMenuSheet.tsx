import { X } from 'lucide-react';

interface MobileMenuSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const menuItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Categories', href: '#categories' },
  { label: 'Vegetables', href: '#vegetables' },
  { label: 'Ready to Cook', href: '#ready-to-cut' },
  { label: 'Salads', href: '#salads' },
  { label: 'Subscription', href: '#subscription' },
  { label: 'Contact', href: '#footer' }
];

export default function MobileMenuSheet({ open, onOpenChange }: MobileMenuSheetProps) {
  if (!open) return null;

  const handleLinkClick = (href: string) => {
    onOpenChange(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div className="fixed inset-y-0 left-0 z-50 w-72 bg-background border-r shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleLinkClick(item.href)}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-accent transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
