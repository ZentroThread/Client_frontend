const reviews = [
  {
    text: "Beautiful bridal saree with excellent quality. The service was outstanding!",
    name: "Priya S.",
  },
  {
    text: "Perfect nilame suit for my son's wedding. Highly recommended!",
    name: "Sunil R.",
  },
  {
    text: "Amazing jewelry collection. Found the perfect set for my wedding!",
    name: "Ishani M.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-(--color-bg-tertiary) text-center">
      <h2 className="text-4xl font-serif font-bold text-(--color-brand-primary)">
        What Our Customers Say
      </h2>

      <p className="mt-4 text-(--color-text-secondary)">
        Reviews from satisfied customers
      </p>

      <div className="mt-14 max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="
              bg-(--color-surface)
              p-8
              rounded-xl
              shadow-(--shadow-md)
              border
              border-(--color-border-light)
            "
          >
            <div className="text-(--color-accent-gold) text-lg">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="mt-4 italic text-(--color-text-secondary)">
              “{r.text}”
            </p>

            <p className="mt-4 font-semibold text-(--color-text-primary)">
              – {r.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
