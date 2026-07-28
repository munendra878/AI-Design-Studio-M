import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Footer from "../components/Footer";
import FAQ   from    "../components/FaQ";
import Howitworks from  "../components/HowItWorks";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        
        <Categories />

        <Features />

        <Howitworks />

        <Testimonials />

        <FAQ />

        <CTA />
        
      </main>

      <Footer />
    </>
  );
}

export default Home;