
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container md:mt-24 mt-10 mx-auto py-4 ">
        <HeroSection />
        <AboutSection/>
        <ProjectsSection/>
        <ContactSection/>
        <Footer/>
      </div>
    </main>
  );
}