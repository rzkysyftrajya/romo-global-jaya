import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { FleetGallerySection } from "@/components/home/FleetGallerySection";
import { FleetPreviewSection } from "@/components/home/FleetPreviewSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { FloatingCTABar } from "@/components/layout/FloatingCTABar";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          CV.ROMO GLOBAL JAYA - Rental Mobil Terpercaya Jakarta Barat
        </title>
        <meta
          name="description"
          content="Rental mobil profesional di Jakarta Barat, Tangerang, dan Bandara Soekarno-Hatta. Armada lengkap dari Avanza hingga Alphard dengan layanan 24 jam."
        />
        <meta
          property="og:title"
          content="CV.ROMO GLOBAL JAYA - Rental Mobil Terpercaya"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://globalromojaya.com" />
      </Helmet>

      <Layout>
        <HeroSection />
        <FeaturesSection />
        <FleetGallerySection />
        <FleetPreviewSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <FloatingCTABar />
      </Layout>
    </>
  );
};

export default Index;
