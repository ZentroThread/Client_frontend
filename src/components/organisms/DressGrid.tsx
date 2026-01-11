import DressCard from "../molecules/DressCard";

import gownImg from "../../assets/items/jwl1.jpeg";
import lehengaImg from "../../assets/items/nilame1.jpeg";
import sareeImg from "../../assets/items/saree1.jpeg";

const dresses = [
  { name: "Classic White Bridal Gown", pricePerDay: 8000, image: gownImg },
  { name: "Luxury Lehenga", pricePerDay: 6500, image: lehengaImg },
  { name: "Traditional Bridal Saree", pricePerDay: 5000, image: sareeImg },
  // repeat to 16 items as needed
];

export default function DressGrid() {
  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold text-center">
        Bridal Collections
      </h2>

      <div className="mt-12 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {dresses.map((dress, index) => (
          <DressCard key={index} {...dress} />
        ))}
      </div>
    </section>
  );
}
