import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageWithFallback } from '../components/atoms/ImageWithFallback';
import { MessageCircle, Heart, Share2, Ruler, Sparkles, Package, Clock, CheckCircle } from 'lucide-react';
import nilameSuitImage from '../assets/items/nilame1.jpeg';
import useWishlist from '@/components/atoms/WishListContext';

const productData = {
  1: {
    name: 'Kandy Bridal Saree',
    category: 'Bridal Sarees',
    price: 'LKR 125,000',
    availability: 'Made to order',
    readyDays: 'Ready in 10–14 working days',
    description: 'Exquisite handwoven silk bridal saree from the hills of Kandy. This luxurious piece features intricate gold thread embroidery and traditional Kandyan motifs. Perfect for your special day.',
    images: [
      'https://images.unsplash.com/photo-1587027512547-81850a319ff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkYWwlMjBzYXJlZSUyMG1vZGVsfGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2Nzg4OTkyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1761125135351-268e72e39158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB0cmFkaXRpb25hbCUyMHNhcmVlfGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      'Pure handwoven silk',
      'Gold zari embroidery',
      'Traditional Kandyan design',
      'Includes matching blouse piece',
    ],
    details: {
      material: 'Pure Silk',
      work: 'Hand Embroidery',
      length: '6 meters',
      care: 'Dry clean only',
    },
    fabricDetails: 'Luxurious pure silk fabric sourced from premium weavers. The saree features a rich texture with natural sheen, perfect for bridal occasions.',
    careInstructions: 'Dry clean only. Store in a cool, dry place away from direct sunlight. Avoid contact with perfumes and cosmetics. Iron on low heat with a cloth barrier.',
  },
  2: {
    name: 'Temple Jewelry Set',
    category: 'Jewelry',
    price: 'LKR 85,000',
    availability: 'Available now',
    readyDays: 'Ready in 5–7 days',
    description: 'Complete bridal jewelry set inspired by ancient temple architecture. Features gold-plated necklace, earrings, bangles, and maang tikka with traditional craftsmanship.',
    images: [
      'https://images.unsplash.com/photo-1758995115518-26f90aa61b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGdvbGQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759906760656-7a28f6d440de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHdlZGRpbmclMjBqZXdlbHJ5fGVufDF8fHx8MTc2Nzg5NzUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      'Gold-plated brass',
      'Temple-inspired design',
      'Complete 5-piece set',
      'Antique finish',
    ],
    details: {
      material: 'Gold-plated Brass',
      work: 'Temple Jewelry',
      pieces: '5 pieces',
      care: 'Store in dry place',
    },
    fabricDetails: 'Crafted from premium brass with 22K gold plating. Each piece features intricate temple motifs and antique finish for an authentic traditional look.',
    careInstructions: 'Store in the original box or soft cloth pouch. Keep away from moisture, perfumes, and chemicals. Clean gently with a soft dry cloth after each use.',
  },
  3: {
    name: 'Traditional Nilame Suit',
    category: 'Nilame Suits',
    price: 'Price on request',
    availability: 'Made to order',
    readyDays: 'Custom orders take 21 days',
    description: 'Authentic Sri Lankan Nilame ceremonial suit handcrafted with traditional Kandyan techniques. Features intricate gold embroidery on premium fabric with traditional headpiece, jacket, and sarong. Perfect for weddings and cultural ceremonies.',
    images: [
      nilameSuitImage,
      nilameSuitImage,
      nilameSuitImage,
    ],
    features: [
      'Complete ceremonial suit',
      'Traditional Kandyan design',
      'Hand-embroidered gold details',
      'Includes headpiece and accessories',
      'Premium quality fabric',
      'Authentic cultural attire',
    ],
    details: {
      material: 'Premium Cotton & Silk',
      work: 'Hand Embroidery',
      includes: 'Full Set with Accessories',
      care: 'Dry clean only',
    },
    fabricDetails: 'Premium blend of cotton and silk with traditional handwoven patterns. The fabric is specially selected to maintain the authentic Kandyan style while ensuring comfort.',
    careInstructions: 'Professional dry cleaning recommended. Store flat or on padded hangers. Keep the headpiece in its protective case. Avoid folding the embroidered sections.',
  },
  7: {
    name: 'Traditional Nilame Suit',
    category: 'Nilame Suits',
    price: 'Price on request',
    availability: 'Made to order',
    readyDays: 'Custom orders take 21 days',
    description: 'Authentic Sri Lankan Nilame ceremonial suit handcrafted with traditional Kandyan techniques. Features intricate gold embroidery on premium fabric with traditional headpiece, jacket, and sarong. Perfect for weddings and cultural ceremonies.',
    images: [
      nilameSuitImage,
      nilameSuitImage,
      nilameSuitImage,
    ],
    features: [
      'Complete ceremonial suit',
      'Traditional Kandyan design',
      'Hand-embroidered gold details',
      'Includes headpiece and accessories',
      'Premium quality fabric',
      'Authentic cultural attire',
    ],
    details: {
      material: 'Premium Cotton & Silk',
      work: 'Hand Embroidery',
      includes: 'Full Set with Accessories',
      care: 'Dry clean only',
    },
    fabricDetails: 'Premium blend of cotton and silk with traditional handwoven patterns. The fabric is specially selected to maintain the authentic Kandyan style while ensuring comfort.',
    careInstructions: 'Professional dry cleaning recommended. Store flat or on padded hangers. Keep the headpiece in its protective case. Avoid folding the embroidered sections.',
  },
};

export function ProductDetails() {
  const { id } = useParams();
  const productId = parseInt(id || '1', 10);
  const product = productData[productId as unknown as keyof typeof productData] || productData[1];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isSaved = isInWishlist(productId);

  const handleWishlistToggle = () => {
    const wishlistProduct = {
      id: productId,
      name: product.name,
      category: product.category,
      price: parseFloat(product.price.replace(/[^0-9.-]+/g, '')) || 0,
      image: product.images[0],
      inStock: product.availability === 'Available now',
    };

    if (isSaved) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(wishlistProduct);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-3/4 overflow-hidden rounded-lg bg-white">
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index
                      ? 'border-[#8B4513] scale-95'
                      : 'border-transparent hover:border-[#E5D5C3]'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-[#8B4513] tracking-widest uppercase mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl text-[#5C4033] mb-4 font-serif">{product.name}</h1>
              
              {/* Availability Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
                    product.availability === 'Available now'
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : product.availability === 'Made to order'
                      ? 'bg-amber-100 text-amber-700 border border-amber-200'
                      : 'bg-blue-100 text-blue-700 border border-blue-200'
                  }`}
                >
                  <CheckCircle className="h-4 w-4" />
                  {product.availability}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl text-[#8B4513] font-serif">{product.price}</span>
              </div>

              {/* Delivery Time Badge */}
              <div className="inline-flex items-center gap-2 bg-[#8B4513]/10 text-[#8B4513] px-4 py-2 rounded-md">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{product.readyDays}</span>
              </div>
            </div>

            <div className="border-t border-b border-[#E5D5C3] py-6">
              <p className="text-[#5C4033] leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-[#5C4033] mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#5C4033]">
                    <Sparkles className="h-5 w-5 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-lg p-6 border border-[#E5D5C3]">
              <h3 className="text-[#5C4033] mb-4">Product Details</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.details).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm text-[#8B4513] capitalize">{key}</p>
                    <p className="text-[#5C4033]">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-md hover:bg-[#20BA5A] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Inquire on WhatsApp
              </a>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleWishlistToggle}
                  className="flex items-center justify-center gap-2 bg-white text-[#8B4513] px-6 py-3 rounded-md border-2 border-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-colors"
                >
                  <Heart className="h-5 w-5" />
                  {isSaved ? 'Saved' : 'Save'}
                </button>
                <button className="flex items-center justify-center gap-2 bg-white text-[#8B4513] px-6 py-3 rounded-md border-2 border-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-colors">
                  <Share2 className="h-5 w-5" />
                  Share
                </button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-[#8B4513]/5 rounded-lg">
                <Ruler className="h-6 w-6 text-[#8B4513] mx-auto mb-2" />
                <p className="text-xs text-[#5C4033]">Custom Sizing Available</p>
              </div>
              <div className="text-center p-4 bg-[#8B4513]/5 rounded-lg">
                <Sparkles className="h-6 w-6 text-[#8B4513] mx-auto mb-2" />
                <p className="text-xs text-[#5C4033]">Handcrafted Quality</p>
              </div>
              <div className="text-center p-4 bg-[#8B4513]/5 rounded-lg">
                <Package className="h-6 w-6 text-[#8B4513] mx-auto mb-2" />
                <p className="text-xs text-[#5C4033]">Secure Packaging</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 border-t border-[#E5D5C3] pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl text-[#5C4033] mb-4 font-serif">Fabric Details</h3>
              <p className="text-[#5C4033] leading-relaxed">
                {product.fabricDetails}
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-[#5C4033] mb-4 font-serif">Care Instructions</h3>
              <p className="text-[#5C4033] leading-relaxed">
                {product.careInstructions}
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-[#5C4033] mb-4 font-serif">Customization</h3>
              <p className="text-[#5C4033] leading-relaxed mb-4">
                We offer customization services for all our products. Whether you need a specific size, 
                color variation, or design modification, our artisans can work with you to create your 
                perfect outfit.
              </p>
              <a
                href="https://wa.me/94771234567"
                className="text-[#8B4513] hover:underline"
              >
                Contact us for custom orders →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


