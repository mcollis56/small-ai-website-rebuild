import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesPreview from "@/components/services-preview";
import UseCaseGallery from "@/components/use-case-gallery";
import BookingSection from "@/components/booking-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesPreview />
        <UseCaseGallery />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}