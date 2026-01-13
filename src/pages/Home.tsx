import DressGrid from "../components/organisms/DressGrid";
import TraditionalAttire from "../components/organisms/TraditionalAttire";
import CollectionsSection from "../components/organisms/CollectionsSection";
import FeaturedProducts from "../components/organisms/FeaturedProducts";
import WhyChooseUs from "../components/organisms/WhyChooseUs";
import Testimonials from "../components/organisms/Testimonials";

export default function Home() {
  return (
    <>
      <TraditionalAttire />
      <CollectionsSection />
      <DressGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      
    </>
  );
}
