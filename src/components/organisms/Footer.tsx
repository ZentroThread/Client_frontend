import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white" style={{ background: 'linear-gradient(135deg, var(--color-brand-secondary) 0%, var(--color-text-secondary) 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-serif" style={{ color: 'var(--color-accent-gold)' }}>Hiru Sandu</div>
            <p className="text-sm text-white/80">
              Luxury Sri Lankan bridal and traditional fashion, crafted with heritage and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 font-serif" style={{ color: 'var(--color-accent-gold)' }}>Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:opacity-100 transition-opacity" style={{ color: 'var(--color-accent-gold)', opacity: 0.8 }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/collections" className="hover:opacity-100 transition-opacity" style={{ color: 'var(--color-accent-gold)', opacity: 0.8 }}>
                  Collections
                </a>
              </li>
              <li>
                <a href="/about" className="hover:opacity-100 transition-opacity" style={{ color: 'var(--color-accent-gold)', opacity: 0.8 }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:opacity-100 transition-opacity" style={{ color: 'var(--color-accent-gold)', opacity: 0.8 }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4 font-serif" style={{ color: 'var(--color-accent-gold)' }}>Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>123 Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@hirusandubridal.lk</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg mb-4 font-serif" style={{ color: 'var(--color-accent-gold)' }}>Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full transition-colors"
                style={{ color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full transition-colors"
                style={{ color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full transition-colors"
                style={{ color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          <p>&copy; 2026 Hiru Sandu Bridal. All rights reserved. Handcrafted with tradition.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
