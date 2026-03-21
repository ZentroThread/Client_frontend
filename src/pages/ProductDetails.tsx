import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageWithFallback } from '../components/atoms/ImageWithFallback';
import {
  MessageCircle,
  Heart,
  Share2,
  Ruler,
  Sparkles,
  Package,
  Clock,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import useWishlist from '@/components/atoms/WishListContext';
import { useGetAttireById, useCheckAttireAvailability } from '@/hooks/attires/useAttire';
import nilameSuitImage from '../assets/items/nilame1.jpeg';
import { API_BASE_URL } from "@/constants/constdata";
import { useAuth } from '@/context/AuthContext';
import Swal from "sweetalert2";
import {useNavigate} from 'react-router-dom';
import {useGetAllTenants} from '@/hooks/tenant/useTenant';
import type {Tenant} from '@/types/tenant.type';
import { BsTelephone } from "react-icons/bs";

const fallbackProduct = {
  name: 'Traditional Attire',
  category: 'Uncategorized',
  productCode: 'N/A',
  price: 'Price on request',
  availability: 'Made to order',
  readyDays: 'Ready in 10–14 working days',
  description: 'Beautiful handcrafted traditional attire.',
  images: [nilameSuitImage],
  features: ['Handcrafted', 'Premium Fabric'],
  details: {
    Material: 'Premium Fabric',
    Care: 'Dry clean only',
  },
  fabricDetails: 'Carefully selected artisan fabric.',
  careInstructions: 'Dry clean only. Store properly.',
};

export function ProductDetails() {

  const { tenantId, id } = useParams();
  const { data: tenants } = useGetAllTenants();
  const attireTenantInfo = tenants?.find((t: Tenant) => t.tenantId === tenantId);

  const navigate = useNavigate();
  const productId = Number(id);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const rentDateTime = `${selectedDate}T10:00:00`;
  const [loading, setLoading] = useState(false);

  const [bookingStartDate, setBookingStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [bookingEndDate, setBookingEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  
  const {isLoggedIn } = useAuth();
  
  const { data: attire, isLoading } = useGetAttireById(tenantId!, productId);
  const { data: availability } = useCheckAttireAvailability(
    tenantId!,
    attire?.attireCode ?? '',
    rentDateTime
  );

  const product = attire
    ? {
        name: attire.attireName,
        category: attire.category?.categoryName ?? 'Uncategorized',
        productCode: attire.attireCode,
        price:
          attire.attirePrice !== undefined
            ? `LKR ${attire.attirePrice.toLocaleString()}`
            : 'Price on request',
        availability:
          attire.attireStatus === 'AVAILABLE'
            ? 'Available now'
            : availability?.available
            ? availability.message
            : availability?.message || 'Currently unavailable',
        readyDays: 'Ready in 7–14 working days',
        description: attire.attireDescription ?? 'Beautiful handcrafted traditional attire.',
        images: attire.imageUrl ? [attire.imageUrl] : [nilameSuitImage],
        features: ['Handcrafted Quality', 'Premium Materials', 'Traditional Design'],
        details: {
          Stock: attire.attireStock ?? 'N/A',
          Status: attire.attireStatus,
        },
        fabricDetails: 'Premium artisan fabric carefully selected for durability and elegance.',
        careInstructions: 'Dry clean only. Store in a cool, dry place.',
      }
    : fallbackProduct;

  const whatsappMessage = `
    Hello,

    I'm interested in this attire:

     Item Name: ${product.name}
     Item Code: ${product.productCode}
     Price: ${product.price}

     Image: ${product.images[0]}

    Please provide more details about availability and booking.

    Thank you!
    `;

  const [selectedImage] = useState(0);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isSaved = isInWishlist(productId.toString());

  if (isLoading) {
    return <p className="text-center py-20 text-(--text-secondary)">Loading product...</p>;
  }

  const handleWishlistToggle = () => {
    if (isSaved) removeFromWishlist(productId.toString());
    else if (attire)
      addToWishlist(attire);
  };

  const handleBooking = async () => {
    try {
      setLoading(true);
      if (!isLoggedIn) {
        Swal.fire({
          icon: "warning",
          title: "Login Required",
          text: "Please login to make a booking",
        });
        navigate('/login');
        return;
      }

      // if (!availability?.available) {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Not Available",
      //     text: "Selected date is not available",
      //   });
      //   return;
      // }

      if (bookingStartDate > bookingEndDate) {
        Swal.fire({
          icon: "warning",
          title: "Invalid Dates",
          text: "End date must be after start date",
        });
        return;
      }

      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_BASE_URL}/v1/bookings/request?tenantId=${tenantId}&attireId=${productId}&startDate=${bookingStartDate}&endDate=${bookingEndDate}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      if (!response.ok) {
        throw new Error("Booking failed");
      }

      Swal.fire({
        icon: "success",
        title: "Request Sent!",
        text: "Shop will contact you soon.",
      });

    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Something went wrong. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-(--bg-primary) px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* IMAGE GALLERY */}
        <div className="space-y-4">
          <div className="relative aspect-3/4 overflow-hidden rounded-xl shadow-lg bg-white">
            <ImageWithFallback
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="grid grid-cols-1"> 
            <div className="flex flex-col gap-2 p-4 rounded-xl bg-(--surface-elevated) border border-(--border-soft) shadow-sm">
              {/* Shop Name */}
              <h4 className="text-sm font-semibold text-(--text-primary)">
                {attireTenantInfo?.name || "Shop Name"}
              </h4>
              {/* Address */}
              <p className="text-xs text-(--text-secondary)">
                {attireTenantInfo?.address}
              </p>
              {/* City */}
              <p className="text-xs text-(--text-muted)">
                {attireTenantInfo?.city}
              </p>
              {/* Phone */}
              <p className="text-xs font-medium text-(--brand-primary)">
                <BsTelephone className="inline-block mr-2" />
                {attireTenantInfo?.phoneNumber}
              </p>
            </div>
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-(--brand-secondary)">
            {product.category}
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-(--brand-primary)">
            {product.name}
          </h1>
          <h2 className="text-2xl font-serif text-(--brand-primary)">
            {product.productCode}
          </h2>
          <p className="text-sm text-(--brand-secondary)">
            <span className="font-medium text-(--brand-primary)">Branch:</span>{" "}
            {attireTenantInfo?.branch || "N/A"}
          </p>
          <div className="space-y-2">
            <label className="text-sm text-(--brand-secondary)">
              Select date to check availability
            </label>
            <input
              type="date"
              value={selectedDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border rounded-md px-4 py-2 ml-2 text-(--brand-primary) focus:outline-none focus:ring-2 focus:ring-(--accent-gold)"
            />
          </div>

          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
              ${
                availability?.available
                  ? 'bg-(--accent-gold)/20 text-(--accent-gold)'
                  : 'bg-red-100 text-red-700'
              }`}
          >
            {availability?.available ? <CheckCircle /> : <XCircle />}
            {availability?.message}
          </span>

          <p className="text-3xl text-(--accent-gold) font-serif">{product.price}</p>

          <div className="flex items-center gap-2 text-sm text-(--brand-secondary)">
            <Clock size={16} />
            {product.readyDays}
          </div>

          <p className="text-(--brand-primary) leading-relaxed">{product.description}</p>

          {/* FEATURES */}
          <div>
            <h3 className="text-(--brand-primary) mb-3 font-semibold">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-(--brand-primary)">
                  <Sparkles className="text-(--accent-gold)" size={18} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* DETAILS */}
          {/* <div className="bg-(--bg-secondary) border border-(--border-light) rounded-xl p-6 shadow-sm">
            <h3 className="text-(--brand-primary) mb-4 font-semibold">Product Details</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.details).map(([k, v]) => (
                <div key={k}>
                  <p className="text-sm text-(--brand-secondary)">{k}</p>
                  <p className="text-(--brand-primary)">{String(v)}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* ACTIONS */}
          <div className="space-y-3">
            <a
              href={`https://wa.me/94${attireTenantInfo?.phoneNumber?.split(',')[0].replace(/^0/, '')}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center gap-2 bg-[#25D366] text-white py-4 rounded-lg font-medium shadow-md hover:bg-[#1ebe5a] transition-all"
            >
              <MessageCircle />
              Inquire on WhatsApp
            </a>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleWishlistToggle}
                className={`border-2 border-(--brand-secondary) py-3 rounded-lg font-medium shadow-md transition-all hover:bg-(--brand-secondary) hover:text-white`}
              >
                <Heart className="inline mr-2" />
                {isSaved ? 'Saved' : 'Save'}
              </button>

              <button className="border-2 border-(--brand-secondary) py-3 rounded-lg font-medium shadow-md transition-all hover:bg-(--brand-secondary) hover:text-white">
                <Share2 className="inline mr-2" />
                Share
              </button>
            </div>
            
          </div>
          
          <div className="space-y-5">
            <p className="text-sm text-(--text-secondary) bg-(--bg-muted) border border-(--border-soft)   rounded-lg p-3">
              <span className="font-medium text-(--text-primary)">Note:</span>{" "}
              Your booking is a request. The shop will confirm availability and contact you with further details.
            </p>
            {/* Booking Button */}
            <button
              onClick={handleBooking}
              disabled={bookingStartDate > bookingEndDate || loading}
              className="
                w-full py-3 rounded-lg font-medium 
                border border-(--border-medium)
                bg-(--surface) text-(--text-primary)
                shadow-sm
                transition-all duration-200
                flex items-center justify-center gap-2

                hover:bg-(--brand-secondary) hover:text-white hover:border-(--brand-secondary)

                active:scale-[0.98]  
                disabled:opacity-50 disabled:cursor-not-allowed
                focus:outline-none focus:ring-2 focus:ring-(--accent-gold)
              "
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-(--text-primary) border-t-transparent rounded-full animate-spin"></span>
              )}

              {loading ? "Processing..." : "Booking"}
            </button>

            {/* Date Section */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-(--brand-secondary) mb-4">
                Select booking period
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* Start Date */}
                <input
                  type="date"
                  value={bookingStartDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setBookingStartDate(e.target.value)}
                  className="
                    w-full px-4 py-2 rounded-md
                    bg-(--surface) text-(--text-primary)
                    border border-(--border-soft)

                    focus:outline-none focus:ring-2 focus:ring-(--accent-gold)
                    focus:border-(--accent-gold)

                    shadow-sm
                  "
                />

                {/* End Date */}
                <input
                  type="date"
                  value={bookingEndDate}
                  min={bookingStartDate}
                  onChange={(e) => setBookingEndDate(e.target.value)}
                  className="
                    w-full px-4 py-2 rounded-md
                    bg-(--surface) text-(--text-primary)
                    border border-(--border-soft)

                    focus:outline-none focus:ring-2 focus:ring-(--accent-gold)
                    focus:border-(--accent-gold)

                    shadow-sm
                  "
                />
              </div>
            </div>
          </div>

          
          {/* INFO CARDS */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            <InfoCard icon={<Ruler />} text="Custom Sizing" />
            <InfoCard icon={<Sparkles />} text="Handcrafted" />
            <InfoCard icon={<Package />} text="Secure Packaging" />
          </div>
        </div>
      </div>

      {/* EXTRA INFO */}
      <div className="mt-16 border-t border-(--border-light) pt-12 grid md:grid-cols-3 gap-8">
        <Section title="Fabric Details" text={product.fabricDetails} />
        <Section title="Care Instructions" text={product.careInstructions} />
        <Section
          title="Customization"
          text="We offer full customization. Contact us for tailored designs."
        />
      </div>
    </div>
  );
}

function InfoCard({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl glass">

      <div className="flex items-center justify-center w-9 h-9 rounded-lg 
                      bg-(--brand-primary)/20 text-(--brand-primary)">
        {icon}
      </div>

      <p className="text-sm text-(--text-secondary)">
        {text}
      </p>
    </div>
  );
}

function Section({ title, text }: any) {
  return (
    <div>
      <h3 className="text-2xl font-serif text-(--brand-primary) mb-4">{title}</h3>
      <p className="text-(--brand-primary)">{text}</p>
    </div>
  );
}
