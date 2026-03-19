import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Heart, User, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import useWishlist from "@/components/atoms/WishListContext";
import logo from "@/assets/main/logo.png";
import {useAuth} from "@/context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isLoggedIn, logout } = useAuth();

  const navigate = useNavigate();
  const { wishlist } = useWishlist();
  const wishlistCount = wishlist.length;

  

  //  Logout
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
            <img src={logo} alt="Logo" className="h-10 md:h-14" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `relative text-sm transition ${
                    isActive
                      ? "text-(--brand-primary)"
                      : "text-(--text-secondary) hover:text-(--brand-primary)"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">

            <ThemeToggle />

            {/* Wishlist */}
            <Link to="/wishlist" className="relative">
              <button className="p-2 rounded hover:scale-110 transition">
                <Heart className="h-5 w-5 text-(--text-secondary)" />
              </button>

              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-(--brand-primary) text-white rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* USER SECTION */}
            {!isLoggedIn ? (
              <Link to="/login">
                <button className="p-2 rounded hover:scale-110 transition">
                  <User className="h-5 w-5 text-(--text-secondary)" />
                </button>
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="p-2 rounded hover:scale-110 transition"
                title="Logout"
              >
                <LogOut className="h-5 w-5 text-red-500" />
              </button>
            )}

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
              className="text-base text-(--text-secondary)"
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