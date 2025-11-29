import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Features from "./Components/Features/Features";
import HowItWorks from "./Components/Howitworks/Howitworks";
import Whychoseus from "./Components/Whychoseus/Whychoseus";
import Testimonies from "./Components/Testimonies/Testimonies";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Whychoseus />
      <Testimonies />
    </>
  );
}
