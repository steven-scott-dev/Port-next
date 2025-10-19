import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
import ChatBot from "./components/ChatBot";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <ProjectsSection />
      <ContactForm />
      <ChatBot />
    </main>
  );
}
