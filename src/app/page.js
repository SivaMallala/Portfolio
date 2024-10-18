import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hr from "@/components/Hr";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";



export default function Home() {
  return (
    <div className="pb-3 text-white">
      <Hero />
      <div className="mt-40 space-y-32 flex flex-col items-center">
        <Hr heading={"skills"} />
        <Skills/>
        <Hr heading={"Projects"} />
        <Projects />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
