import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Button from "./ui/mainbutton";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

export default function SponsorWTS() {
  return (
    <section className="bg-white text-black py-10 md:pb-20">
      <div className="w-full px-4 md:w-[80%] mx-auto justify-center flex flex-col">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1
            className={`${plusJakartaSans.className} text-black text-3xl sm:text-4xl lg:text-4xl font-bold`}
          >
            Ways to Support
          </h1>
        </div>

        <div className="flex flex-col w-full items-center space-y-16 md:space-y-8 justify-center">
          {/* First Row */}
          <div className="flex flex-col md:flex-row w-full items-center md:space-x-5 space-y-6 md:space-y-0 justify-center">
            <div className="flex flex-col w-full md:w-[40%] space-y-4">
              <h2
                className={`${plusJakartaSans.className} text-black text-2xl md:text-3xl lg:text-4xl font-bold break-words`}
              >
                Sponsorship Opportunities
              </h2>
              <p className="opacity-60">
                Get your brand in front of a dedicated audience. Contact us for details on ad placements and partnerships.
              </p>
            </div>

            <div className="hidden md:block">
              <Image
                src="/Line1.svg"
                height={50}
                width={50}
                alt="connecting line"
              />
            </div>

            <div className="w-full md:w-[40%] h-auto relative">
              <Image
                src="/sponser4.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row w-full items-center md:space-x-5 space-y-6 md:space-y-0 justify-center">
            <div className="w-full md:w-[40%] h-auto relative order-2 md:order-1">
              <Image
                src="/sponser5.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-auto"
              />
            </div>

            <div className="hidden md:block order-2">
              <Image
                src="/Line2.svg"
                height={50}
                width={50}
                alt="connecting line"
              />
            </div>

            <div className="flex flex-col w-full md:w-[40%] space-y-4 order-1 md:order-3">
              <h2
                className={`${plusJakartaSans.className} text-black text-2xl md:text-3xl lg:text-4xl font-bold break-words`}
              >
                Direct Support
              </h2>
              <p className="opacity-60">
                Love the podcast? Help us keep it going! Your support allows us to bring more stories, better production, and exclusive content.
              </p>
            </div>
          </div>

          {/* Venmo Section */}
          <div className="w-full flex justify-center items-center">
            <div className="relative inline-flex items-center justify-center pt-20 w-full max-w-4xl">
              <Image
                src="/venmo.svg"
                height={400}
                width={3600}
                alt="Venmo logo"
                className="absolute right-0 w-full h-auto"
              />
              <Button text="Support Via Venmo" className="relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}