import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Search, User, ShoppingBag, Heart } from "lucide-react";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wishlistCount = 0; // Replace with real state/context

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Collections", to: "/products" },
    { name: "About Us", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-[var(--border-soft)] shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl md:text-3xl font-serif tracking-wide text-[var(--brand-primary)]">
              Hiru Sandu
            </div>
            <div className="hidden sm:flex flex-col items-start">
              <div className="text-xs tracking-[0.2em] uppercase text-[var(--brand-secondary)]">
                Bridal
              </div>
              <div className="text-[0.6rem] tracking-widest text-[var(--text-secondary)]">
                Couture
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="relative text-sm tracking-wide text-[var(--text-secondary)]
                           transition-colors duration-300
                           hover:text-[var(--brand-primary)]
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]
                           group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[var(--brand-primary)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />

            <button className="p-2 rounded transition-transform duration-200 hover:scale-110 hover:text-[var(--brand-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]">
              <Search className="h-5 w-5 text-[var(--text-secondary)]" />
            </button>

            <Link to="/login">
              <button className="hidden sm:block p-2 rounded transition-transform duration-200 hover:scale-110 hover:text-[var(--brand-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]">
                <User className="h-5 w-5 text-[var(--text-secondary)]" />
              </button>
            </Link>

            <Link to="/wishlist" className="relative hidden sm:block">
              <button className="p-2 rounded transition-transform duration-200 hover:scale-110 hover:text-[var(--brand-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]">
                <Heart className="h-5 w-5 text-[var(--text-secondary)]" />
              </button>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[var(--brand-primary)] text-white text-xs flex items-center justify-center font-medium">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link to="/cart">
              <button className="hidden sm:block p-2 rounded transition-transform duration-200 hover:scale-110 hover:text-[var(--brand-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]">
                <ShoppingBag className="h-5 w-5 text-[var(--text-secondary)]" />
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded text-[var(--text-secondary)] transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden glass border-t border-[var(--border-soft)] transition-max-h duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="block py-2 text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
