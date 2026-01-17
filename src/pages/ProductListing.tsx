import { useState } from 'react';
import { ProductCard } from '../components/organisms/ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import nilameSuitImage from '../assets/items/nilame1.jpeg';

const allProducts = [
  {
    id: 1,
    name: 'Kandy Bridal Saree',
    category: 'Bridal Sarees',
    price: 'LKR 125,000',
    occasion: 'Wedding',
    priceRange: 'high',
    image: 'https://images.unsplash.com/photo-1587027512547-81850a319ff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkYWwlMjBzYXJlZSUyMG1vZGVsfGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Temple Jewelry Set',
    category: 'Jewelry',
    price: 'LKR 85,000',
    occasion: 'Wedding',
    priceRange: 'medium',
    image: 'https://images.unsplash.com/photo-1758995115518-26f90aa61b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGdvbGQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Traditional Nilame Suit',
    category: 'Nilame Suits',
    price: 'LKR 110,000',
    occasion: 'Wedding',
    priceRange: 'high',
    image: nilameSuitImage,
  },
  {
    id: 4,
    name: 'Royal Lehenga',
    category: 'Party Wear',
    price: 'LKR 95,000',
    occasion: 'Party',
    priceRange: 'medium',
    image: 'https://images.unsplash.com/photo-1767790693645-2373e54d4f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGVoZW5nYSUyMGRyZXNzfGVufDF8fHx8MTc2Nzg5NzUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    name: 'Silk Saree Collection',
    category: 'Sarees',
    price: 'LKR 75,000',
    occasion: 'Ceremony',
    priceRange: 'medium',
    image: 'https://images.unsplash.com/photo-1756483496981-05b741fdd40a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWUlMjBlbGVnYW50fGVufDF8fHx8MTc2Nzg4OTkyNXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    name: 'Traditional Red Saree',
    category: 'Sarees',
    price: 'LKR 65,000',
    occasion: 'Ceremony',
    priceRange: 'medium',
    image: 'https://images.unsplash.com/photo-1761125135351-268e72e39158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB0cmFkaXRpb25hbCUyMHNhcmVlfGVufDF8fHx8MTc2Nzg5NzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 7,
    name: 'Wedding Necklace',
    category: 'Jewelry',
    price: 'LKR 55,000',
    occasion: 'Wedding',
    priceRange: 'medium',
    image: 'https://images.unsplash.com/photo-1759906760656-7a28f6d440de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHdlZGRpbmclMjBqZXdlbHJ5fGVufDF8fHx8MTc2Nzg5NzUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 8,
    name: 'Party Lehenga',
    category: 'Party Wear',
    price: 'LKR 80,000',
    occasion: 'Party',
    priceRange: 'medium',
    image: 'https://images.unsplash.com/photo-1767790693645-2373e54d4f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGVoZW5nYSUyMGRyZXNzfGVufDF8fHx8MTc2Nzg5NzUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedOccasion, setSelectedOccasion] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Bridal Sarees', 'Sarees', 'Jewelry', 'Nilame Suits', 'Party Wear'];
  const occasions = ['All', 'Wedding', 'Party', 'Ceremony'];
  const priceRanges = [
    { label: 'All', value: 'All' },
    { label: 'Under LKR 60,000', value: 'low' },
    { label: 'LKR 60,000 - LKR 100,000', value: 'medium' },
    { label: 'Above LKR 100,000', value: 'high' },
  ];

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const occasionMatch = selectedOccasion === 'All' || product.occasion === selectedOccasion;
    const priceMatch = selectedPriceRange === 'All' || product.priceRange === selectedPriceRange;
    return categoryMatch && occasionMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F6]">
      {/* Header */}
      <div className="bg-linear-to-br from-[#8B4513] to-[#5C4033] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-white mb-4 font-serif">Our Collections</h1>
          <p className="text-[#E5D5C3] text-lg">
            Discover handcrafted traditional Sri Lankan fashion
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 shrink-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center justify-between bg-white p-4 rounded-lg border border-[#E5D5C3] mb-4"
            >
              <span className="flex items-center gap-2 text-[#5C4033]">
                <SlidersHorizontal className="h-5 w-5" />
                Filters
              </span>
              <ChevronDown
                className={`h-5 w-5 text-[#5C4033] transition-transform ${
                  showFilters ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Filter Panel */}
            <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              {/* Category Filter */}
              <div className="bg-white p-6 rounded-lg border border-[#E5D5C3]">
                <h3 className="text-[#5C4033] mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="w-4 h-4 text-[#8B4513] focus:ring-[#8B4513]"
                      />
                      <span className="text-sm text-[#5C4033]">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Occasion Filter */}
              <div className="bg-white p-6 rounded-lg border border-[#E5D5C3]">
                <h3 className="text-[#5C4033] mb-4">Occasion</h3>
                <div className="space-y-2">
                  {occasions.map((occasion) => (
                    <label key={occasion} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="occasion"
                        checked={selectedOccasion === occasion}
                        onChange={() => setSelectedOccasion(occasion)}
                        className="w-4 h-4 text-[#8B4513] focus:ring-[#8B4513]"
                      />
                      <span className="text-sm text-[#5C4033]">{occasion}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="bg-white p-6 rounded-lg border border-[#E5D5C3]">
                <h3 className="text-[#5C4033] mb-4">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPriceRange === range.value}
                        onChange={() => setSelectedPriceRange(range.value)}
                        className="w-4 h-4 text-[#8B4513] focus:ring-[#8B4513]"
                      />
                      <span className="text-sm text-[#5C4033]">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-[#5C4033]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <select className="border border-[#E5D5C3] rounded-lg px-4 py-2 text-sm text-[#5C4033] bg-white">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[#8B4513] text-lg">
                  No products found matching your filters
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedOccasion('All');
                    setSelectedPriceRange('All');
                  }}
                  className="mt-4 text-[#8B4513] underline hover:text-[#5C4033]"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}