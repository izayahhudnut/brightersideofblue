import Image from "next/image"
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-plus-jakarta-sans',
})

export default function SponsorAbout() {
    return (
        <section className="bg-white text-black py-10 md:py-20">
            <div className="w-full px-4 md:w-[80%] mx-auto justify-center flex flex-col">
                {/* Title Section */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h1 className={`${plusJakartaSans.className} text-black text-3xl sm:text-4xl lg:text-4xl font-bold`}>
                        Why Sponsor Us?
                    </h1>
                </div>

                <div className="flex flex-col w-full items-center space-y-16 md:space-y-8 justify-center">
                    {/* First Row */}
                    <div className="flex flex-col md:flex-row w-full items-center md:space-x-5 space-y-6 md:space-y-0 justify-center">
                        <div className="w-full md:w-[40%] h-auto relative">
                            <Image
                                src="/sponser1.png"
                                width={500}
                                height={500}
                                alt="image"
                                className="w-full h-auto"
                            />
                        </div>

                        <div className="hidden md:block">
                            <Image
                                src="/Line1.svg"
                                height={50}
                                width={50}
                                alt="connecting line"
                            />
                        </div>

                        <div className="flex flex-col w-full md:w-[40%] space-y-4">
                            <h2 className={`${plusJakartaSans.className} text-black text-2xl md:text-3xl lg:text-4xl font-bold break-words`}>
                                Reach the Right Audience 
                            </h2>
                            <p className="opacity-60">
                                Our listeners include law enforcement officers, first responders, veterans, and their families—people who are deeply engaged and passionate about the community.
                            </p>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex flex-col md:flex-row w-full items-center md:space-x-5 space-y-6 md:space-y-0 justify-center">
                        <div className="flex flex-col w-full md:w-[40%] space-y-4 order-2 md:order-1">
                            <h2 className={`${plusJakartaSans.className} text-black text-2xl md:text-3xl lg:text-4xl font-bold break-words`}>
                                Brand Alignment
                            </h2>
                            <p className="opacity-60">
                                If your brand supports public service, safety, and the real stories behind the badge, this is your opportunity to connect with a loyal audience.
                            </p>
                        </div>

                        <div className="hidden md:block order-2">
                            <Image
                                src="/Line2.svg"
                                height={50}
                                width={50}
                                alt="connecting line"
                            />
                        </div>

                        <div className="w-full md:w-[40%] h-auto relative order-1 md:order-3">
                            <Image
                                src="/sponser2.png"
                                width={500}
                                height={500}
                                alt="image"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Third Row */}
                    <div className="flex flex-col md:flex-row w-full items-center md:space-x-5 space-y-6 md:space-y-0 justify-center">
                        <div className="w-full md:w-[40%] h-auto relative">
                            <Image
                                src="/sponser3.png"
                                width={500}
                                height={500}
                                alt="image"
                                className="w-full h-auto"
                            />
                        </div>

                        <div className="hidden md:block">
                            <Image
                                src="/Line3.svg"
                                height={50}
                                width={50}
                                alt="connecting line"
                            />
                        </div>

                        <div className="flex flex-col w-full md:w-[40%] space-y-4">
                            <h2 className={`${plusJakartaSans.className} text-black text-2xl md:text-3xl lg:text-4xl font-bold break-words`}>
                                Trusted Voice
                            </h2>
                            <p className="opacity-60">
                                Our hosts bring decades of experience and credibility, making this podcast a powerful platform for sponsors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}