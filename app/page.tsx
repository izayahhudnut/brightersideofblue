import Hero from "@/components/Hero";
import About from "@/components/About";
import Merch from "@/components/Merch";
import LatestPodcastSection from "@/components/Podcast";
import MeetOurTeam from "@/components/MeetOurTeam";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="about">
        <About />
      </section>
      <Merch />
      <LatestPodcastSection />
      <MeetOurTeam />
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
}
