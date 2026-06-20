import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import PortfolioSection from "../components/PortfolioSection";
import JournalismSection from "../components/JournalismSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import TestimonialsSection from "../components/TestimonialsSections";
import BrandSection from "../components/BrandSection";
import MemoriesSection from "../components/MemoriesSection";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <MemoriesSection />
        <BrandSection />
        <PortfolioSection />
        <JournalismSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
        {/* <BlogSection /> */}
        {/* <CTASection /> */}
      </main>
      <Footer />
    </>
  );
};

export default Index;
