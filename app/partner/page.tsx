import SponsorAbout from "@/components/SponserAbout"
import SponsorHero from "@/components/SponsorHero"
import SponsorWTS from "@/components/SponserWtS";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";








export default function Partner() {
    return (
        <div>
                          <Navbar />

                    <SponsorHero />
                    <SponsorAbout />
                    <SponsorWTS />
                    <Chat />
                    <Footer />



                    
        </div>
    

        
    )
}