import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "@/components/atoms/ImageWithFallback";
import useWishlist from "@/components/atoms/WishListContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  inStock?: boolean;
}

export function ProductCard({
  id,
  name,
  category,
  price,
  image,
  inStock = true,
}: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isSaved = isInWishlist(id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // prevents navigation
    e.stopPropagation(); // prevents Link click

    const product = {
      id,
      name,
      category,
      price: parseFloat(price.replace(/[^0-9.-]+/g, "")),
      image,
      inStock,
    };

    if (isSaved) {
      removeFromWishlist(id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link to={`/product/${id}`} className="group block">
      <div>
        <div
          className="relative overflow-hidden rounded-lg aspect-3/4"
          style={{ backgroundColor: "var(--color-accent-beige-light)" }}
        >
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Wishlist Button */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleWishlistToggle}
            className="absolute top-4 right-4 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg backdrop-blur-sm"
            style={{
              backgroundColor: isSaved
                ? "var(--color-brand-primary)"
                : "rgba(255, 255, 255, 0.9)",
            }}
          >
            <Heart
              className="h-5 w-5 transition-all"
              style={{
                color: isSaved
                  ? "white"
                  : "var(--color-brand-primary)",
              }}
              fill={isSaved ? "white" : "none"}
            />
          </motion.button>

          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="mt-4 space-y-1">
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--color-brand-primary)" }}
          >
            {category}
          </p>

          <h3
            className="transition-colors"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {name}
          </h3>

          <p
            className="font-serif"
            style={{ color: "var(--color-brand-secondary)" }}
          >
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
}
