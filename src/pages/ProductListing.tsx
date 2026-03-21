import { useState } from 'react';
import { ProductCard } from '../components/organisms/ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

import { useGetAllAttiresForAllTenants } from '@/hooks/attires/useGetAllAttiresForAllTenants ';
import { useGetAllTenants } from '@/hooks/tenant/useTenant';

export function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const { attires: allProducts = [] } = useGetAllAttiresForAllTenants();
  const { data: tenants = [] } = useGetAllTenants();

  const categories = [
    'All',
    'Bridal Sarees',
    'Saree',
    'Jwelary', 
    'Nilame',
    'Party Wear',
  ];

  const priceRanges = [
    { label: 'All', value: 'All' },
    { label: 'Under LKR 60,000', value: 'low' },
    { label: 'LKR 60,000 - LKR 100,000', value: 'medium' },
    { label: 'Above LKR 100,000', value: 'high' },
  ];

  const branches = [
    'All',
    ...Array.from(
      new Set(
        tenants
          .map((t: typeof tenants[number]) => t.branch)
          .filter(Boolean)
      )
    ),
  ] as string[];

  const getPriceRange = (price: number) => {
    if (price < 60000) return 'low';
    if (price <= 100000) return 'medium';
    return 'high';
  };

  const filteredProducts = allProducts.filter((product: typeof allProducts[number]) => {
    const tenant = tenants.find(t => t.tenantId === product.tenantId);

    const categoryMatch =
      selectedCategory === 'all' ||
      product.category?.categoryName?.toLowerCase() === selectedCategory;

    const priceMatch =
      selectedPriceRange === 'All' ||
      getPriceRange(product.attirePrice) === selectedPriceRange;

    const branchMatch =
      selectedBranch === 'All' ||
      tenant?.branch?.toLowerCase() === selectedBranch.toLowerCase();

    return categoryMatch && priceMatch && branchMatch;
  });

  return (
    <div className="min-h-screen bg-(--bg-primary)">

      {/* HEADER */}
      <div className="py-16 md:py-24 bg-linear-to-br from-(--accent-beige) to-(--surface-elevated) border-t border-(--border-soft)">
        <div className="max-w-7xl mx-auto px-4 text-center text-(--brand-secondary)">
          <h1 className="text-4xl md:text-5xl mb-4 font-serif">
            Our Collections
          </h1>
          <p className="text-lg">
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
                      checked={selectedCategory === category.toLowerCase()}
                      onChange={() => setSelectedCategory(category.toLowerCase())}
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

              {/* BRANCH */}
              <div className="bg-(--bg-secondary) p-6 rounded-lg border border-(--border-medium) shadow-sm">
                <h3 className="mb-4 font-medium text-(--text-primary)">Branch</h3>

                {branches.map((branch) => (
                  <label key={branch} className="flex items-center gap-2 mb-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={selectedBranch === branch}
                      onChange={() => setSelectedBranch(String(branch))}
                      className="accent-(--brand-primary)"
                    />
                    <span className="text-(--text-secondary)">
                      {String(branch) || 'Unknown'}
                    </span>
                  </label>
                ))}
              </div>

            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="flex-1">

            {allProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="flex flex-col items-center justify-center py-24">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 border-4 border-(--border-soft) rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-(--brand-primary) rounded-full animate-spin"></div>
                  </div>
                  <p className="mt-5 text-sm text-(--text-secondary) tracking-wide">
                    Loading products...
                  </p>
                </div>
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
                {filteredProducts.map((product) => {
                  const tenant = tenants.find(t => t.tenantId === product.tenantId);

                  return (
                    <div key={product.id}>
                      <ProductCard product={product} />

                      <p className="text-xs text-(--text-secondary) mt-1">
                        {tenant?.branch}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-(--text-secondary)">No products found</p>

                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPriceRange('All');
                    setSelectedBranch('All');
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