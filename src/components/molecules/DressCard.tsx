type Props = {
  name: string;
  pricePerDay: number;
  image: string;
};

export default function DressCard({ name, pricePerDay, image }: Props) {
  return (
    <div
      className="
        bg-(--color-surface)
        rounded-2xl
        shadow-(--shadow-md)
        overflow-hidden
        border
        border-(--color-border-light)
        hover:shadow-lg
        transition
      "
    >
      <img
        src={image}
        alt={name}
        className="h-72 w-full object-cover object-top"
      />

      <div className="p-5 text-center">
        <h3 className="text-lg font-serif text-(--color-text-primary)">
          {name}
        </h3>

        <p className="mt-2 text-(--color-brand-primary) font-medium">
          Rs. {pricePerDay} / day
        </p>

        <button
          className="
            mt-4 w-full
            bg-(--color-brand-primary)
            text-white
            py-2
            rounded-full
            hover:bg-(--color-brand-secondary)
            transition
          "
        >
          Rent Now
        </button>
      </div>
    </div>
  );
}
