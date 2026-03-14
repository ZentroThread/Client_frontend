import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Attire } from "@/types/attire.type";

interface WishlistContextType {
  wishlist: Attire[];
  addToWishlist: (product: Attire) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishlist: () => false,
  wishlistCount: 0,
});

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<Attire[]>(() => {
    const savedWishlist = localStorage.getItem("hiru-sandu-wishlist");

    if (savedWishlist) {
      try {
        return JSON.parse(savedWishlist);
      } catch (error) {
        console.error("Error loading wishlist:", error);
        return [];
      }
    }

    return [];
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("hiru-sandu-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  //Add item
  const addToWishlist = (product: Attire) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  //Remove item
  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.filter((item) => String(item.id) !== productId)
    );
  };

  // Check if saved
  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => String(item.id) === productId);
  };

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default function useWishlist() {
  return useContext(WishlistContext);
}