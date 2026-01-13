const features = [
  "Premium Quality",
  "Expert Craftsmanship",
  "Personalized Service",
  "Easy Communication",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-(--color-bg-primary) text-center">
      <h2 className="text-4xl font-serif font-bold text-(--color-brand-primary)">
        Why Choose Us
      </h2>

      <p className="mt-4 text-(--color-text-secondary)">
        What makes us special
      </p>

      <div className="mt-14 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {features.map((item, index) => (
          <div
            key={index}
            className="
              bg-(--color-surface)
              p-6
              rounded-xl
              border
              border-(--color-border-light)
              shadow-(--shadow-sm)
            "
          >
            <div className="text-4xl mb-4 text-(--color-accent-gold)">
              💎
            </div>
            <p className="font-semibold text-(--color-text-primary)">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
