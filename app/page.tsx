import AboutSection from "@/components/AboutSection";
import CaseStudies from "@/components/CaseStudies";
import ClientLogos from "@/components/ClientLogos";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResultsSection from "@/components/ResultsSection";
import Services from "@/components/Services";
import SocialGoalsCTA from "@/components/SocialGoalsCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <AboutSection />
        <Services />
        <SocialGoalsCTA />
        <ResultsSection />
        <CaseStudies />
        <ContactCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
