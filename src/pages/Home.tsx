import DressGrid from "../components/organisms/DressGrid";
import TraditionalAttire from "../components/organisms/TraditionalAttire";
import CollectionsSection from "../components/organisms/CollectionsSection";
import FeaturedProducts from "../components/organisms/FeaturedProducts";
import WhyChooseUs from "../components/organisms/WhyChooseUs";
import Testimonials from "../components/organisms/Testimonials";


export default function Home() {
  return (
    <div className="space-y-10">
      {[
        <TraditionalAttire />,
        <CollectionsSection />,
        <DressGrid />,
        <FeaturedProducts />,
        <WhyChooseUs />,
        <Testimonials />,
      ].map((Component, index) => (
        <section
          key={index}
          style={{
            backgroundColor: "var(--card-bg)",
            boxShadow: "var(--card-shadow)",
            borderRadius: "1rem",
            padding: "1.5rem",
          }}
        >
          {Component}
        </section>
      ))}
    </div>
  );
}


