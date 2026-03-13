import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "@/components/atoms/ImageWithFallback";
import useWishlist from "@/components/atoms/WishListContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  inStock?: boolean;
  tenantId: string;
}

export function ProductCard({
  id,
  name,
  category,
  price,
  image,
  tenantId,
  inStock = true,
}: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isSaved = isInWishlist(id.toString());

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // prevents navigation
    e.stopPropagation(); // prevents Link click

    const product = {
      id: id.toString(),
      name,
      category,
      price: parseFloat(price.replace(/[^0-9.-]+/g, "")),
      image,
      inStock,
    };

    if (isSaved) {
      removeFromWishlist(id.toString());
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link to={`/product/${tenantId}/${id}`} className="group block">

      <div className="space-y-3">

        {/* Image */}
        <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-[var(--accent-beige)]">

          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Wishlist Button */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleWishlistToggle}
            className={`
              absolute top-4 right-4 p-2 rounded-full shadow-lg backdrop-blur-sm
              transition-all duration-300
              opacity-0 group-hover:opacity-100
              ${isSaved 
                ? "bg-[var(--brand-primary)] text-white"
                : "bg-white/90 text-[var(--brand-primary)]"
              }
            `}
          >
            <Heart
              className="h-5 w-5"
              fill={isSaved ? "currentColor" : "none"}
            />
          </motion.button>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        </div>


        {/* Product Info */}
        <div className="space-y-1">

          <p className="text-xs tracking-widest uppercase text-[var(--brand-primary)]">
            {category}
          </p>

          <h3 className="text-[var(--text-secondary)] group-hover:text-[var(--brand-primary)] transition-colors">
            {name}
          </h3>

          <p className="font-serif text-[var(--brand-secondary)]">
            Rs. {price}
          </p>

        </div>

      </div>

    </Link>
  );
}
