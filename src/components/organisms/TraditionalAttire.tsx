import coupleImg from "../../assets/items/nilame3.jpeg";

export default function TraditionalAttire() {
  return (
    <section className="py-24 bg-(--color-bg-tertiary)">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-5xl font-serif font-bold text-(--color-brand-primary)">
            Elegant Traditional<br />Attire
          </h2>

          <p className="mt-6 text-(--color-text-secondary) text-lg max-w-xl">
            Discover our premium collection of bridal sarees, nilame suits,
            and traditional jewelry
          </p>

          <div className="mt-8 flex gap-4">
            {/* Shop Now */}
            <button
              onClick={() => {
                document
                  .getElementById("collections")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                bg-(--color-brand-primary)
                text-white
                px-10 py-4
                rounded-full
                text-lg
                hover:bg-(--color-brand-secondary)
                transition
              "
            >
              Shop Now
            </button>

            {/* Chat Button */}
            <button
              className="
                bg-(--color-accent-gold)
                text-(--color-text-primary)
                px-8 py-3
                rounded-lg
                hover:opacity-90
                transition
              "
            >
              💬 Chat with Us
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src={coupleImg}
            alt="Traditional Couple"
            className="max-h-105 rounded-xl shadow-(--shadow-md)"
          />
        </div>

      </div>
    </section>
  );
}
