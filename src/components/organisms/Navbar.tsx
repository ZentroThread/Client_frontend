import { Link } from "react-router-dom";
import { useState } from 'react';
import { Menu, X, Search, User, ShoppingBag, Heart } from 'lucide-react';
import { ThemeToggle } from "@/components/atoms/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass border-b shadow-sm" style={{ borderColor: 'var(--color-border-light)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl md:text-3xl font-serif tracking-wide" style={{ color: 'var(--color-brand-primary)' }}>
              Hiru Sandu
            </div>
            <div className="hidden sm:flex flex-col items-start">
              <div className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--color-brand-secondary)' }}>Bridal</div>
              <div className="text-[0.6rem] tracking-widest" style={{ color: 'var(--color-text-secondary)' }}>Couture</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm tracking-wide transition-colors" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brand-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
              Home
            </Link>
            <Link to="/collections" className="text-sm tracking-wide transition-colors" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brand-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
              Collections
            </Link>
            <Link to="/about" className="text-sm tracking-wide transition-colors" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brand-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
              About Us
            </Link>
            <Link to="/contact" className="text-sm tracking-wide transition-colors" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brand-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <button className="transition-colors p-2" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brand-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
              <Search className="h-5 w-5" />
            </button>
            <Link to="/login">
              <button className="transition-colors hidden sm:block p-2" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brand-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
                <User className="h-5 w-5" />
              </button>
            </Link>
            <Link to="/wishlist">
              <button className="transition-colors hidden sm:block p-2 relative" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brand-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
                <Heart className="h-5 w-5" />
                {/* {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full text-white text-xs flex items-center justify-center font-medium" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
                    {wishlistCount}
                  </span>
                )} */}
              </button>
            </Link>
            <button className="transition-colors hidden sm:block p-2" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brand-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button
              className="md:hidden p-2"
              style={{ color: 'var(--color-text-secondary)' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t" style={{ borderColor: 'var(--color-border-light)' }}>
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block py-2" style={{ color: 'var(--color-text-secondary)' }} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/collections" className="block py-2" style={{ color: 'var(--color-text-secondary)' }} onClick={() => setIsMenuOpen(false)}>
              Collections
            </Link>
            <Link to="/about" className="block py-2" style={{ color: 'var(--color-text-secondary)' }} onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="block py-2" style={{ color: 'var(--color-text-secondary)' }} onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
