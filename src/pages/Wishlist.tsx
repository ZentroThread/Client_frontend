import { Heart, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import useWishlist from '../components/atoms/WishListContext';
import { Link } from 'react-router-dom';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  const handleWhatsAppInquiry = (productName: string) => {
    const message = `Hi! I'm interested in the ${productName} from your collection. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/94771234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  console.log('Wishlist Items:', wishlist);

  return (
    <div className="min-h-screen py-12 bg-(--bg-primary)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-(--brand-primary)" fill="var(--brand-primary)" />
            <h1 className="text-4xl md:text-5xl font-serif text-(--brand-secondary)">
              My Saved Items
            </h1>
          </div>
          <p className="text-lg text-(--text-secondary)">
            {wishlist.length === 0
              ? 'Your wishlist is empty. Start adding items you love!'
              : `You have ${wishlist.length} saved ${wishlist.length === 1 ? 'item' : 'items'}`}
          </p>
        </motion.div>

        {/* Empty State */}
        {wishlist.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="glass rounded-3xl p-12 max-w-md mx-auto border border-(--border-soft)">
              <Heart className="h-24 w-24 mx-auto mb-6 opacity-20 text-(--brand-primary)" />
              <h2 className="text-2xl font-serif mb-4 text-(--text-primary)">
                Your Wishlist is Empty
              </h2>
              <p className="mb-8 text-(--text-secondary)">
                Explore our stunning collections and save your favorite pieces for later.
              </p>
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg text-white font-medium shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%)',
                  }}
                >
                  Browse Collections
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ) : (
          /* Wishlist Grid */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {wishlist.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden border border-(--border-soft) shadow-md group"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-3/4">
                  <Link to={`/product/${product.tenantId}/${product.id}`}>
                    <img
                      src={product.imageUrl}
                      alt={product.imageUrl}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>

                  {/* Stock Badge
                  {!product.inStock && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white bg-(--error)">
                      Out of Stock
                    </div>
                  )} */}

                  {/* Remove Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => removeFromWishlist(String(product.id))}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md"
                    style={{ color: 'var(--error)' }}
                  >
                    <Trash2 className="h-5 w-5" />
                  </motion.button>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider mb-2 text-(--brand-primary)">
                    {product.category.categoryName}
                  </div>
                  <Link to={`/product/${product.tenantId}/${product.id}`}>
                    <h3 className="text-lg font-serif mb-3 text-(--text-primary) hover:opacity-80 transition-opacity">
                      {product.attireName}
                    </h3>
                  </Link>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-serif text-(--brand-primary)">
                      LKR {product.attirePrice}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <Link to={`/product/${product.tenantId}/${product.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border text-sm transition-all"
                        style={{
                          borderColor: 'var(--brand-primary)',
                          color: 'var(--brand-primary)',
                        }}
                      >
                        <ShoppingBag className="h-4 w-4" />
                        View
                      </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleWhatsAppInquiry(product.attireName)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border text-sm transition-all"
                      style={{
                         borderColor: 'var(--brand-primary)',
                         color: 'var(--brand-primary)',
                      }}
                    >
                      <MessageCircle className="h-4 w-4" />
                      Ask
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Continue Shopping */}
        {wishlist.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg border text-lg transition-all"
                style={{
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-primary)',
                }}
              >
                Continue Shopping
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
