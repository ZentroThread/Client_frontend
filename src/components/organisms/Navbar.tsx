import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import useWishlist from "@/components/atoms/WishListContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { wishlist } = useWishlist();
  const wishlistCount = wishlist.length;

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Collections", to: "/products" },
    { name: "About Us", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-(--border-soft) shadow-sm backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/src/assets/main/logo.png"
              alt="Hiru Sandu Logo"
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `relative text-sm tracking-wide transition-colors duration-300 group
                  ${
                    isActive
                      ? "text-(--brand-primary)"
                      : "text-(--text-secondary) hover:text-(--brand-primary)"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-1 h-px bg-[var(--brand-primary)] transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>


          {/* Right Icons */}
          <div className="flex items-center space-x-2">

            <ThemeToggle />

            {/* Wishlist */}
            <Link to="/wishlist" className="relative">
              <button className="p-2 rounded hover:scale-110 transition-transform">
                <Heart className="h-5 w-5 text-(--text-secondary)" />
              </button>

              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-(--brand-primary) text-white text-xs flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>


            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-(--text-secondary)" />
              ) : (
                <Menu className="h-6 w-6 text-(--text-secondary)" />
              )}
            </button>

          </div>

        </div>

      </div>


      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-(--bg-secondary) border-t border-(--border-soft) transition-all duration-300 ${
          isMenuOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
        }`}
      >

        <div className="px-6 flex flex-col space-y-4">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `block text-base transition-colors
                ${
                  isActive
                    ? "text-(--brand-primary)"
                    : "text-(--text-secondary)"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;