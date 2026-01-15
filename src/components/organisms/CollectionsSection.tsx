import { Link } from "react-router-dom";

const collections = [
  {
    title: "Bridal Sarees",
    desc: "Elegant bridal sarees for your special day",
    path: "/collections/bridal-sarees",
  },
  {
    title: "Bridal Jewellery",
    desc: "Traditional and modern bridal jewelry collection",
    path: "/collections/jewellery",
  },
  {
    title: "Nilame Suits",
    desc: "Royal nilame suits for ceremonial occasions",
    path: "/collections/nilame-suits",
  },
  {
    title: "Lehenga",
    desc: "Designer lehenga collection for weddings and parties",
    path: "/collections/lehenga",
  },
  {
    title: "Party Dresses",
    desc: "Stylish party dresses for evening events",
    path: "/collections/party-dresses",
  },
];

export default function CollectionsSection() {
  return (
    <section
      id="collections"
      className="py-24 bg-(--color-bg-primary) text-center"
    >
      <h2 className="text-4xl font-serif font-bold text-(--color-brand-primary)">
        Our Collections
      </h2>

      <p className="mt-4 text-(--color-text-secondary)">
        Discover our exquisite range of traditional attire and jewelry
      </p>

      <div className="mt-14 max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {collections.map((item, index) => (
          <div
            key={index}
            className="
              bg-(--color-surface)
              rounded-xl
              shadow-(--shadow-md)
              p-8
              border
              border-(--color-border-light)
            "
          >
            <div className="h-48 bg-(--color-bg-tertiary) rounded mb-6 flex items-center justify-center">
              🖼
            </div>

            <h3 className="text-xl font-serif font-bold text-(--color-text-primary)">
              {item.title}
            </h3>

            <p className="mt-3 text-(--color-text-secondary)">
              {item.desc}
            </p>

            <Link
              to={item.path}
              className="
                inline-flex items-center gap-2
                mt-6
                border
                border-(--color-brand-primary)
                text-(--color-brand-primary)
                px-5 py-2
                rounded-md
                hover:bg-(--color-brand-primary)
                hover:text-white
                transition
              "
            >
              View Collection →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
