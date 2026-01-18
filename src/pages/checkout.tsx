import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const subtotal = items.reduce(
    (sum, item) => sum + item.pricePerDay * item.quantity * item.days,
    0
  );

  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    alert("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <section className="py-24 px-10 max-w-4xl mx-auto text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4">
          No Items to Checkout
        </h1>
        <p className="text-gray-600 mb-8">Your cart is empty. Add some items first!</p>
        <button
          onClick={() => navigate("/")}
          className="bg-linear-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200"
        >
          Continue Shopping
        </button>
      </section>
    );
  }

  return (
    <section className="py-24 px-10 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-bold text-gray-800 mb-4">
          Checkout
        </h1>
        <p className="text-gray-600 text-lg">Complete your rental order</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Order Summary */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center border-b border-gray-100 pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Rs. {item.pricePerDay.toLocaleString()} × {item.quantity} × {item.days} days
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800">
                      Rs. {(item.pricePerDay * item.quantity * item.days).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-2 border-t border-gray-200 pt-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (10%):</span>
                <span>Rs. {tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-800 border-t border-gray-300 pt-2">
                <span>Total:</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
              Rental Terms
            </h2>
            <div className="space-y-3 text-sm text-gray-600">
              <p>• All rentals are for the specified number of days</p>
              <p>• Late returns may incur additional charges</p>
              <p>• Items must be returned in original condition</p>
              <p>• Security deposit may be required for high-value items</p>
              <p>• Cancellation policy: 24 hours notice required</p>
            </div>
          </div>
        </div>

        {/* Customer Information & Payment */}
        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
              Customer Information
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address *
                </label>
                <textarea
                  required
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Enter your delivery address"
                />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Payment Method</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    defaultChecked
                    className="text-red-600 focus:ring-red-500"
                  />
                  <span className="ml-2 text-gray-700">Credit/Debit Card</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    className="text-red-600 focus:ring-red-500"
                  />
                  <span className="ml-2 text-gray-700">Cash on Delivery</span>
                </label>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                type="button"
                onClick={() => navigate("/cart")}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-6 rounded-full font-semibold transition-colors"
              >
                Back to Cart
              </button>
              <button
                type="submit"
                className="flex-1 bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
              >
                Place Order
              </button>
            </div>
          </form>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
              Receipt Preview
            </h2>

            <div id="receipt" className="text-sm space-y-2">
              <div className="border-b border-gray-300 pb-2 mb-4">
                <h3 className="font-bold text-lg text-center">Traditional Attire Rental</h3>
                <p className="text-center text-gray-600">Order Receipt</p>
              </div>

              <div className="space-y-1">
                <p><strong>Customer:</strong> {customerInfo.name || "________________"}</p>
                <p><strong>Email:</strong> {customerInfo.email || "________________"}</p>
                <p><strong>Phone:</strong> {customerInfo.phone || "________________"}</p>
                <p><strong>Address:</strong> {customerInfo.address || "________________"}</p>
              </div>

              <div className="mt-4">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-1">Item</th>
                      <th className="text-center py-1">Qty</th>
                      <th className="text-center py-1">Days</th>
                      <th className="text-right py-1">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id} className="border-b border-gray-200">
                        <td className="py-1">{item.name}</td>
                        <td className="text-center py-1">{item.quantity}</td>
                        <td className="text-center py-1">{item.days}</td>
                        <td className="text-right py-1">Rs. {(item.pricePerDay * item.quantity * item.days).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-gray-300 font-bold">
                      <td colSpan={3} className="py-2">Total</td>
                      <td className="text-right py-2">Rs. {total.toLocaleString()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="mt-4 text-center text-xs text-gray-500">
                <p>Thank you for choosing Traditional Attire Rental!</p>
                <p>Order Date: {new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <button
              onClick={handlePrint}
              className="mt-6 w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
            >
              🖨️ Print Receipt
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
