import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-card border-t py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">Fresh Bites 49</h3>
            <p className="text-muted-foreground mb-4">
              Fresh vegetables and fruit salads delivered daily.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Phone: +91 89998 44337</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <SiWhatsapp className="h-4 w-4" />
                <span>WhatsApp: +91 89998 44337</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-6 space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            Terms & Conditions apply. Please contact us for more information.
          </p>
          <p className="text-sm text-center text-muted-foreground">
            © {currentYear} Fresh Bites 49. Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'freshbites49'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
