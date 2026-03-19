import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import "./index.css";

import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/components/atoms/WishListContext";
import { AuthProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CartProvider>
          <WishlistProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </WishlistProvider>
        </CartProvider>
      </BrowserRouter>
    </QueryClientProvider>
);
