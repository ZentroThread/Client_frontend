import DressGrid from "@/components/organisms/DressGrid";

export default function PartyDresses() {
  return (
    <>
      <h1 className="text-4xl font-serif text-red-900 text-center mt-10">
        Party Dresses
      </h1>
      <DressGrid category="party-dresses" />
    </>
  );
}
