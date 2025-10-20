import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Get In Touch
        </h2>
        <ContactForm />
      </section>

      {/* CHATBOT POPUP */}
      <ChatBot />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
