/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";
import type { CartItem } from "@/types/cart";

type CartContextType = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity" | "days">) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  increaseDays: (id: number) => void;
  decreaseDays: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity" | "days">) => {
    console.log("Adding to cart:", item);
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);

      if (existing) {
        const updated = prev.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
        console.log("Updated cart:", updated);
        return updated;
      }

      const newCart = [
        ...prev,
        {
          ...item,
          quantity: 1,
          days: 1,
        },
      ];
      console.log("New cart:", newCart);
      return newCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => setCart([]);

  const increaseQuantity = (id: number) => {
    setCart(prev =>
      prev.map(i =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart(prev =>
      prev.map(i =>
        i.id === id && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );
  };

  const increaseDays = (id: number) => {
    setCart(prev =>
      prev.map(i =>
        i.id === id ? { ...i, days: i.days + 1 } : i
      )
    );
  };

  const decreaseDays = (id: number) => {
    setCart(prev =>
      prev.map(i =>
        i.id === id && i.days > 1
          ? { ...i, days: i.days - 1 }
          : i
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        items: cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        increaseDays,
        decreaseDays,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
