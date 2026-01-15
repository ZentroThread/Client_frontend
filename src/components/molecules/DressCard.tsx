import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Props = {
  id: number;
  name: string;
  pricePerDay: number;
  image: string;
};

export default function DressCard({
  id,
  name,
  pricePerDay,
  image,
}: Props) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="h-72 w-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className={`absolute inset-0 bg-linear-to-t from-black/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      <div className="mt-6 text-center">
        <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2 leading-tight">{name}</h3>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl font-bold text-red-600">Rs. {pricePerDay.toLocaleString()}</span>
          <span className="text-sm text-gray-500 font-medium">/ day</span>
        </div>

        <button
          onClick={() =>{
            console.log("ADD TO CART CLICKED", id);
            addToCart({ id, name, pricePerDay, image })
            navigate("/cart");
          }}
          className="mt-4 w-full bg-linear-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 active:scale-95 hover:from-red-700 hover:to-red-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
