import Hero from "../components/Hero";
import Features from "../components/Features";
import Roadmap from "../components/Roadmap";
import Companies from "../components/Companies";
import Analytics from "../components/Analytics";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Roadmap />
      <Companies />
      <Analytics />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;