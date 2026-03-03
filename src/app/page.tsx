import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Projects />
        <About />
        <Testimonials />
        <Blog />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
