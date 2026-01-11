import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-xl font-bold">MyApp</h1>

      <div className="flex items-center gap-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/collections" className="hover:underline">
          Collections
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
