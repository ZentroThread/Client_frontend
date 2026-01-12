import DressCard from "../molecules/DressCard";
import { dresses, type Dress } from "../../data/dresses";


type Props = {
  category?: Dress["category"];
};

export default function DressGrid({ category }: Props) {
  const filteredDresses = category
    ? dresses.filter((dress) => dress.category === category)
    : dresses;

  return (
    <section className="py-24 px-10">
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {filteredDresses.map((dress) => (
          <DressCard
            key={dress.id}
            name={dress.name}
            pricePerDay={dress.pricePerDay}
            image={dress.image}
          />
        ))}
      </div>

      {filteredDresses.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No items available in this category.
        </p>
      )}
    </section>
  );
}
