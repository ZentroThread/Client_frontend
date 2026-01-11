import Button from "../atoms/Button.tsx";

type Props = {
  name: string;
  pricePerDay: number;
  image: string;
};

export default function DressCard({ name, pricePerDay, image }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <img
        src={image}
        alt={name}
        className="h-72 w-full object-cover object-top"
      />

      <div className="p-5 text-center">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-pink-600 mt-2">
          Rs. {pricePerDay} / day
        </p>

        <div className="mt-4">
          <Button>Rent Now</Button>
        </div>
      </div>
    </div>
  );
}
