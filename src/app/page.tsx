import Networks from "./components/networks";
import CTA from "./components/cta";
import Elementors from "./components/elementors";
import Hero from "./components/hero";
import Reviews from "./components/reviews";
import Reasons from "./components/reasons";
import Process from "./components/process";
import FAQ from "./components/faq";

export default function HomePage() {
  return (
    <div className="space-y-28 sm:space-y-40 [&_section]:scroll-mt-12 pb-20">
      <div>
        <Hero />
        <Networks />
        <Reasons />
      </div>
      <Process />
      <Elementors />
      <CTA />
      <Reviews />
      <FAQ />
    </div>
  );
}
