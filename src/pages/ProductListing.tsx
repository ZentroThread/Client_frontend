import { useState } from 'react';
import { ProductCard } from '../components/organisms/ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { useGetAllAttiresForAllTenants } from '@/hooks/attires/useGetAllAttiresForAllTenants ';

export function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const { attires: allProducts = [] } = useGetAllAttiresForAllTenants();

  const categories = [
    'All',
    'Bridal Sarees',
    'Sarees',
    'Jewelry',
    'Nilame Suits',
    'Party Wear',
  ];

  const priceRanges = [
    { label: 'All', value: 'All' },
    { label: 'Under LKR 60,000', value: 'low' },
    { label: 'LKR 60,000 - LKR 100,000', value: 'medium' },
    { label: 'Above LKR 100,000', value: 'high' },
  ];

  const getPriceRange = (price: number) => {
    if (price < 60000) return 'low';
    if (price <= 100000) return 'medium';
    return 'high';
  };

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      selectedCategory === 'All' ||
      product.category?.categoryName === selectedCategory;

    const priceMatch =
      selectedPriceRange === 'All' ||
      getPriceRange(product.attirePrice) === selectedPriceRange;

    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-(--bg-primary)">
      {/* HEADER */}
      <div className="bg-linear-to-br from-(--brand-secondary) to-(--brand-primary) py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl text-white mb-4 font-serif">
            Our Collections
          </h1>
          <p className="text-(--accent-beige) text-lg">
            Discover handcrafted traditional Sri Lankan fashion
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* FILTER SIDEBAR */}
          <div className="lg:w-64">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex justify-between items-center bg-(--bg-secondary) p-4 rounded-lg border border-(--border-light) mb-4 shadow-sm"
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal size={18} />
                Filters
              </span>
              <ChevronDown
                className={`transition-transform ${showFilters ? 'rotate-180' : ''}`}
              />
            </button>

            <div className={`${showFilters ? 'block' : 'hidden lg:block'} space-y-6`}>
              {/* CATEGORY */}
              <div className="bg-(--bg-secondary) p-6 rounded-lg border border-(--border-medium) shadow-sm">
                <h3 className="mb-4 font-medium text-(--text-primary)">Category</h3>
                {categories.map((category) => (
                  <label key={category} className="flex items-center gap-2 mb-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="accent-(--brand-primary)"
                    />
                    <span className="text-(--text-secondary)">{category}</span>
                  </label>
                ))}
              </div>

              {/* PRICE */}
              <div className="bg-(--bg-secondary) p-6 rounded-lg border border-(--border-medium) shadow-sm">
                <h3 className="mb-4 font-medium text-(--text-primary)">Price</h3>
                {priceRanges.map((range) => (
                  <label key={range.value} className="flex items-center gap-2 mb-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={selectedPriceRange === range.value}
                      onChange={() => setSelectedPriceRange(range.value)}
                      className="accent-(--brand-primary)"
                    />
                    <span className="text-(--text-secondary)">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="flex-1">
            {allProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-(--text-secondary)">Loading products...</p>
              </div>
            )}

            <div className="flex justify-between mb-6 items-center">
              <p className="text-(--text-primary) font-medium">
                {filteredProducts.length}{' '}
                {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id!.toString()}
                    name={product.attireName}
                    category={product.category?.categoryName ?? ''}
                    price={`LKR ${product.attirePrice.toLocaleString()}`}
                    image={product.imageUrl ?? 'https://via.placeholder.com/300x400?text=No+Image'}
                    tenantId={product.tenantId!.toString()}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-(--text-secondary)">No products found</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedPriceRange('All');
                  }}
                  className="mt-4 underline text-(--brand-primary)"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
