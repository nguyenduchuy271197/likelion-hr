import Companies from "./components/companies";
import CTA from "./components/cta";
import Elementors from "./components/elementors";
import Hero from "./components/hero";
import Introduction from "./components/introduction";
import Process from "./components/process";
import Reviews from "./components/reviews";
import Solutions from "./components/solutions";

export default function HomePage() {
  return (
    <div className="space-y-28 sm:space-y-40 [&_section]:scroll-mt-12">
      <div className="space-y-20">
        <Hero />
        <Introduction />
      </div>
      <Solutions />
      <Elementors />
      <Companies />
      <Process />
      <CTA />
      <Reviews />
    </div>
  );
}
