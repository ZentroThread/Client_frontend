import { Heart, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import  useWishlist  from '../components/atoms/WishListContext';
import { Link } from 'react-router-dom';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  const handleWhatsAppInquiry = (productName: string) => {
    const message = `Hi! I'm interested in the ${productName} from your collection. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/94771234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="h-8 w-8" style={{ color: 'var(--color-brand-primary)' }} fill="var(--color-brand-primary)" />
            <h1 className="text-4xl md:text-5xl font-serif" style={{ color: 'var(--color-text-primary)' }}>
              My Saved Items
            </h1>
          </div>
          <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            {wishlist.length === 0 
              ? 'Your wishlist is empty. Start adding items you love!' 
              : `You have ${wishlist.length} saved ${wishlist.length === 1 ? 'item' : 'items'}`
            }
          </p>
        </motion.div>

        {/* Empty State */}
        {wishlist.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="glass rounded-3xl p-12 max-w-md mx-auto border" style={{ borderColor: 'var(--color-border-light)' }}>
              <Heart className="h-24 w-24 mx-auto mb-6 opacity-20" style={{ color: 'var(--color-brand-primary)' }} />
              <h2 className="text-2xl font-serif mb-4" style={{ color: 'var(--color-text-primary)' }}>
                Your Wishlist is Empty
              </h2>
              <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                Explore our stunning collections and save your favorite pieces for later.
              </p>
              <Link to="/collections">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg text-white font-medium shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-brand-primary) 0%, var(--color-brand-secondary) 100%)',
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
                className="glass rounded-2xl overflow-hidden border shadow-lg group"
                style={{ borderColor: 'var(--color-border-light)' }}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>
                  
                  {/* Stock Badge */}
                  {!product.inStock && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white" style={{ backgroundColor: 'var(--color-error)' }}>
                      Out of Stock
                    </div>
                  )}

                  {/* Remove Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-colors"
                    style={{ color: 'var(--color-error)' }}
                  >
                    <Trash2 className="h-5 w-5" />
                  </motion.button>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--color-brand-primary)' }}>
                    {product.category}
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-serif mb-3 hover:opacity-75 transition-opacity" style={{ color: 'var(--color-text-primary)' }}>
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-serif" style={{ color: 'var(--color-brand-primary)' }}>
                      LKR {product.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <Link to={`/product/${product.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-all text-sm"
                        style={{
                          borderColor: 'var(--color-brand-primary)',
                          color: 'var(--color-brand-primary)',
                        }}
                      >
                        <ShoppingBag className="h-4 w-4" />
                        View
                      </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleWhatsAppInquiry(product.name)}
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all text-sm shadow-md"
                      style={{
                        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
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
                  borderColor: 'var(--color-brand-primary)',
                  color: 'var(--color-brand-primary)',
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
