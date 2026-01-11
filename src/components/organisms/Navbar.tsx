import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-xl font-bold">MyApp</h1>

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
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
