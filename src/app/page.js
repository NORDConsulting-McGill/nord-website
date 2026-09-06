import HeroSection from "./components/landing/HeroSection.jsx";
import AboutSection from "./components/landing/AboutSection.jsx";
import ServicesSection from "./components/landing/ServiceSection.jsx";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
