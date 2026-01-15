import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Cart() {
  const {
    items,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    increaseDays,
    decreaseDays,
  } = useCart();

  const [animatingItems, setAnimatingItems] = useState<Set<number>>(new Set());

  const total = items.reduce(
    (sum, item) =>
      sum + item.pricePerDay * item.quantity * item.days,
    0
  );

  const handleQuantityChange = (id: number, action: 'increase' | 'decrease') => {
    setAnimatingItems(prev => new Set(prev).add(id));
    if (action === 'increase') {
      increaseQuantity(id);
    } else {
      decreaseQuantity(id);
    }
    setTimeout(() => {
      setAnimatingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 200);
  };

  const handleDaysChange = (id: number, action: 'increase' | 'decrease') => {
    setAnimatingItems(prev => new Set(prev).add(id));
    if (action === 'increase') {
      increaseDays(id);
    } else {
      decreaseDays(id);
    }
    setTimeout(() => {
      setAnimatingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 200);
  };

  return (
    <section className="py-24 px-10 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-bold text-gray-800 mb-4">
          Your Cart
        </h1>
        <p className="text-gray-600 text-lg">Review and manage your rental items</p>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-gray-500 text-xl">Your cart is empty.</p>
          <p className="text-gray-400 mt-2">Add some beautiful dresses to get started!</p>
        </div>
      ) : (
        <>
          <div className="space-y-8">
            {items.map(item => (
              <div
                key={item.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 border border-gray-100 transform transition-all duration-300 ${
                  animatingItems.has(item.id) ? 'scale-105' : ''
                }`}
              >
                <div className="flex gap-6 items-center">
                  <div className="relative">
                    <img
                      src={item.image}
                      className="h-32 w-32 object-cover rounded-xl shadow-md"
                      alt={item.name}
                    />
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                      {item.quantity}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                      Rs. {item.pricePerDay.toLocaleString()} / day
                    </p>

                    <div className="flex gap-8">
                      {/* Quantity */}
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-gray-700">Quantity:</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, 'decrease')}
                            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-700 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="font-bold text-lg w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 'increase')}
                            className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center font-bold transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Days */}
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-gray-700">Days:</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleDaysChange(item.id, 'decrease')}
                            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-700 transition-colors"
                            disabled={item.days <= 1}
                          >
                            -
                          </button>
                          <span className="font-bold text-lg w-8 text-center">{item.days}</span>
                          <button
                            onClick={() => handleDaysChange(item.id, 'increase')}
                            className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center font-bold transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-lg font-semibold text-gray-800">
                      Subtotal: Rs. {(item.pricePerDay * item.quantity * item.days).toLocaleString()}
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors"
                    aria-label="Remove item from cart"
                    title="Remove item"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  Total: Rs. {total.toLocaleString()}
                </p>
                <p className="text-gray-600 mt-1">Including all items and rental days</p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={clearCart}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Clear Cart
                </button>
                <button
                  className="bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
