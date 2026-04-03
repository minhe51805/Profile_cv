import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import { portfolioData } from "@/lib/data";

export default function Home() {
  return (
    <main id="main-content">
      <Hero data={portfolioData} />
      <About data={portfolioData} />
      <Experience data={portfolioData} />
      <Projects data={portfolioData} />
      <Contact data={portfolioData} />
      <Footer />
    </main>
  );
}
