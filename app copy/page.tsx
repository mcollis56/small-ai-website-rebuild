import HeroSection from "@/app/components/hero-section";
import ServicesPreview from "@/app/components/services-preview";
import ResourcesSection from "@/app/components/resources-section";
import AboutSection from "@/app/components/about-section";
import BookingSection from "@/app/components/booking-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <ResourcesSection />
      <AboutSection />
      <BookingSection />
    </>
  );
}