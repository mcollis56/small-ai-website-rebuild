import Header from "@/app/components/header";
import HeroSection from "@/app/components/hero-section";
import ServicesPreview from "@/app/components/services-preview";
import UseCaseGallery from "@/app/components/use-case-gallery";
import BookingSection from "@/app/components/booking-section";
import Footer from "@/app/components/footer";

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