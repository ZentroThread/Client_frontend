import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

// Main pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Collections from "@/pages/Collections";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Wishlist from "@/pages/Wishlist";
import Cart from "@/pages/cart";
import Checkout from "@/pages/checkout";

// Collection pages
import BridalSarees from "@/pages/Collections/BridalSarees";
import Lehenga from "@/pages/Collections/Lehenga";
import Jewellery from "@/pages/Collections/Jewellery";
import NilameSuits from "@/pages/Collections/NilameSuits";
import PartyDresses from "@/pages/Collections/PartyDresses";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />

        {/* Collection pages */}
        <Route path="/collections/bridal-sarees" element={<BridalSarees />} />
        <Route path="/collections/lehenga" element={<Lehenga />} />
        <Route path="/collections/jewellery" element={<Jewellery />} />
        <Route path="/collections/nilame-suits" element={<NilameSuits />} />
        <Route path="/collections/party-dresses" element={<PartyDresses />} />
      </Route>
    </Routes>
  );
};
