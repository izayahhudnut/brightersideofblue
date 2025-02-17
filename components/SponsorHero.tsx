import Image from "next/image"
import { Plus_Jakarta_Sans } from "next/font/google"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
})

export default function SponsorHero() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className={`${plusJakartaSans.className} text-black text-3xl sm:text-4xl lg:text-6xl font-bold`}>
            Support & Sponsor The Podcast
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Image Container */}
          <div className="w-full lg:w-3/5">
            <div className="rounded-3xl overflow-hidden">
              <Image 
                src="/sponser.png"
                height={800}
                width={800}
                alt="Podcast team photo"
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-2/5 lg:self-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-black text-2xl sm:text-3xl lg:text-5xl font-bold">
                About the <span className="text-blue-500">Podcast</span>
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                The Brighter Side of Blue brings authentic, untold stories from law enforcement, 
                giving listeners a real look at the work, humor, and camaraderie behind the badge. 
                We deliver the real conversations that mainstream media doesn&apos;t cover—stories of dedication, 
                resilience, and the lighter moments that keep officers going.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
