import Navbar from "../components/claude/Navbar";
import Hero from "../components/claude/Hero";
import About from "../components/claude/About";
import Services from "../components/claude/Services";
import Testimonials from "../components/claude/Testimonials";
import Contact from "../components/claude/Contact";
import Footer from "../components/claude/Footer";
import Divider from "../components/claude/Divider";

export default function ClaudeLanding() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Services />
        <Divider />
        <Testimonials />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
