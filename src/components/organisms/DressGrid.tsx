import { motion } from 'framer-motion';
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
    <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDresses.map((dress, index) => (
            <motion.div
              key={dress.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <DressCard
                id={dress.id}
                name={dress.name}
                pricePerDay={dress.pricePerDay}
                image={dress.image}
              />
            </motion.div>
          ))}
        </div>

        {filteredDresses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="glass rounded-2xl p-8 max-w-md mx-auto border" style={{ borderColor: 'var(--color-border-light)' }}>
              <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                No items available in this category.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
