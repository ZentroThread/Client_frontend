import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "@/components/atoms/ImageWithFallback";
import useWishlist from "@/components/atoms/WishListContext";
import { motion } from "framer-motion";
import type{ Attire } from "@/types/attire.type";
import { useGetAllTenants } from "@/hooks/tenant/useTenant";

interface ProductCardProps {
  product: Attire;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isSaved = isInWishlist(product.id!.toString());
  const { data: tenants } = useGetAllTenants();
  const attireTenantInfo = tenants?.find(t => t.tenantId === product.tenantId);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // prevents navigation
    e.stopPropagation(); // prevents Link click

    if (isSaved) {
      removeFromWishlist(product.id!.toString());
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link to={`/product/${product.tenantId}/${product.id}`} className="group block">

      <div className="space-y-3">

        {/* Image */}
        <div className="relative overflow-hidden rounded-lg aspect-3/4 bg-(--accent-beige)">

          <ImageWithFallback
            src={product.imageUrl}
            alt={product.attireName}
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
                ? "bg-(--brand-primary) text-white"
                : "bg-white/90 text-(--brand-primary)"
              }
            `}
          >
            <Heart
              className="h-5 w-5"
              fill={isSaved ? "currentColor" : "none"}
            />
          </motion.button>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        </div>


        {/* Product Info */}
        <div className="space-y-1">

          <div className="grid grid-cols-1">
            <p className="text-xs tracking-widest uppercase text-(--brand-primary)">
              {product.category?.categoryName}
            </p>
            <h3 className="text-(--text-secondary) group-hover:text-(--brand-primary) transition-colors">
              {product.attireName}
            </h3>
            <p className="text-(--text-secondary) group-hover:text-(--brand-primary) transition-colors">
              Branch: {attireTenantInfo?.branch || "Shop Name"}
            </p>
          </div>

          <p className="font-serif text-(--brand-secondary)">
            Rs. {product.attirePrice.toLocaleString()}
          </p>

        </div>

      </div>

    </Link>
  );
}
