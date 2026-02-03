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
} from 'lucide-react';
import useWishlist from '@/components/atoms/WishListContext';
import { useGetAttireById } from '@/hooks/attires/useAttire';
import nilameSuitImage from '../assets/items/nilame1.jpeg';

/* ---------------- FALLBACK DATA ---------------- */
const fallbackProduct = {
  name: 'Traditional Attire',
  category: 'Uncategorized',
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
  const productId = Number(id);

  const { data: attire, isLoading } = useGetAttireById(tenantId!, productId);

  /* ---------------- NORMALIZED PRODUCT ---------------- */
  const product = attire
    ? {
        name: attire.attireName,
        category: attire.category?.categoryName ?? 'Uncategorized',
        price:
          attire.attirePrice !== undefined
            ? `LKR ${attire.attirePrice.toLocaleString()}`
            : 'Price on request',
        availability:
          attire.attireStatus === 'AVAILABLE'
            ? 'Available now'
            : 'Made to order',
        readyDays: 'Ready in 7–14 working days',
        description:
          attire.attireDescription ??
          'Beautiful handcrafted traditional attire.',
        images: attire.imageUrl
          ? [attire.imageUrl]
          : [nilameSuitImage],
        features: [
          'Handcrafted Quality',
          'Premium Materials',
          'Traditional Design',
        ],
        details: {
          Stock: attire.attireStock ?? 'N/A',
          Status: attire.attireStatus,
        },
        fabricDetails:
          'Premium artisan fabric carefully selected for durability and elegance.',
        careInstructions:
          'Dry clean only. Store in a cool, dry place.',
      }
    : fallbackProduct;

  const [selectedImage, setSelectedImage] = useState(0);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isSaved = isInWishlist(productId.toString());

  if (isLoading) {
    return <p className="text-center py-20">Loading product...</p>;
  }

  /* ---------------- WISHLIST ---------------- */
  const handleWishlistToggle = () => {
    if (isSaved) {
      removeFromWishlist(productId.toString());
    } else {
      addToWishlist({
        id: productId.toString(),
        name: product.name,
        category: product.category,
        price: Number(attire?.attirePrice ?? 0),
        image: product.images[0],
        inStock: product.availability === 'Available now',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* IMAGE GALLERY */}
          <div className="space-y-4">
            <div className="relative aspect-3/4 overflow-hidden rounded-lg bg-white">
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index
                      ? 'border-[#8B4513]'
                      : 'border-transparent'
                  }`}
                >
                  <ImageWithFallback
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-[#8B4513]">
              {product.category}
            </p>

            <h1 className="text-4xl font-serif text-[#5C4033]">
              {product.name}
            </h1>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700">
              <CheckCircle size={16} />
              {product.availability}
            </span>

            <p className="text-3xl text-[#8B4513] font-serif">
              {product.price}
            </p>

            <div className="flex items-center gap-2 text-sm text-[#8B4513]">
              <Clock size={16} />
              {product.readyDays}
            </div>

            <p className="text-[#5C4033] leading-relaxed">
              {product.description}
            </p>

            {/* FEATURES */}
            <div>
              <h3 className="text-[#5C4033] mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex gap-2 text-[#5C4033]">
                    <Sparkles className="text-[#D4AF37]" size={18} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* DETAILS */}
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-[#5C4033] mb-4">Product Details</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.details).map(([k, v]) => (
                  <div key={k}>
                    <p className="text-sm text-[#8B4513]">{k}</p>
                    <p className="text-[#5C4033]">{String(v)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="space-y-3">
              <a
                href="https://wa.me/94771234567"
                className="w-full flex justify-center gap-2 bg-[#25D366] text-white py-4 rounded-md"
              >
                <MessageCircle />
                Inquire on WhatsApp
              </a>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleWishlistToggle}
                  className="border-2 border-[#8B4513] py-3 rounded-md hover:bg-[#8B4513] hover:text-white"
                >
                  <Heart className="inline mr-2" />
                  {isSaved ? 'Saved' : 'Save'}
                </button>

                <button className="border-2 border-[#8B4513] py-3 rounded-md hover:bg-[#8B4513] hover:text-white">
                  <Share2 className="inline mr-2" />
                  Share
                </button>
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
        <div className="mt-16 border-t pt-12 grid md:grid-cols-3 gap-8">
          <Section title="Fabric Details" text={product.fabricDetails} />
          <Section title="Care Instructions" text={product.careInstructions} />
          <Section
            title="Customization"
            text="We offer full customization. Contact us for tailored designs."
          />
        </div>
      </div>
    </div>
  );
}

/* ---------------- HELPERS ---------------- */
function InfoCard({ icon, text }: any) {
  return (
    <div className="text-center bg-[#8B4513]/5 p-4 rounded-lg">
      <div className="text-[#8B4513] mb-2">{icon}</div>
      <p className="text-xs text-[#5C4033]">{text}</p>
    </div>
  );
}

function Section({ title, text }: any) {
  return (
    <div>
      <h3 className="text-2xl font-serif text-[#5C4033] mb-4">{title}</h3>
      <p className="text-[#5C4033]">{text}</p>
    </div>
  );
}
