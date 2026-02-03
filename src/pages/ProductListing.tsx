import { useState } from 'react';
import { ProductCard } from '../components/organisms/ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import {useGetAllAttiresForAllTenants} from "@/hooks/attires/useGetAllAttiresForAllTenants ";


export function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedOccasion, setSelectedOccasion] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  
  const {attires: allProducts} = useGetAllAttiresForAllTenants();
  

  const categories = ['All', 'Bridal Sarees', 'Sarees', 'Jewelry', 'Nilame Suits', 'Party Wear'];
  const occasions = ['All', 'Wedding', 'Party', 'Ceremony'];
  const priceRanges = [
    { label: 'All', value: 'All' },
    { label: 'Under LKR 60,000', value: 'low' },
    { label: 'LKR 60,000 - LKR 100,000', value: 'medium' },
    { label: 'Above LKR 100,000', value: 'high' },
  ];

  // const filteredProducts = allProducts?.filter((product) => {
  //   const categoryMatch = selectedCategory === 'All' || product?.categoryId === selectedCategory;
  //   const occasionMatch = selectedOccasion === 'All' || product?.occasion === selectedOccasion;
  //   const priceMatch = selectedPriceRange === 'All' || product?.priceRange === selectedPriceRange;
  //   return categoryMatch && occasionMatch && priceMatch;
  // });

  console.log(allProducts);

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
                {allProducts?.length || 0} {(allProducts?.length || 0) === 1 ? 'product' : 'products'}
              </p>
              <select className="border border-[#E5D5C3] rounded-lg px-4 py-2 text-sm text-[#5C4033] bg-white">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            {(allProducts?.length || 0) > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProducts?.map((product) =>
                  product.id !== undefined ? (
                    <ProductCard
                      name={product.attireName || ''}
                      price={product.attirePrice !== undefined ? `LKR ${product.attirePrice.toLocaleString()}` : ''}
                      image={product.imageUrl || ''} 
                      key={product.attireCode || ''}
                      category={product.category?.categoryName || ''}
                      id={product.attireCode || ''}
                    />
                  ) : null
                )}
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