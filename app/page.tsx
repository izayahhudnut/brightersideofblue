import Hero from "@/components/Hero";
import About from "@/components/About";
import Merch from "@/components/Merch";
import LatestPodcastSection from "@/components/Podcast";
import MeetOurTeam from "@/components/MeetOurTeam";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";




export default function Home() {
  return (
    <div>
              <Navbar />

      <Hero />
      <section id="about">
        <About />
      </section>
      <Merch />
      <LatestPodcastSection />
      <MeetOurTeam />
      <section id="contact">
        <ContactForm />
        <Chat />

      </section>
      <Footer />

    </div>
  );
}
