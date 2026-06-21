import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CodingActivity from "@/components/CodingActivity";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <CodingActivity />
      <Footer />
    </main>
  );
}
