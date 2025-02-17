// About.tsx
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#1B1927] text-white py-10 md:py-20">
      <div className="w-full px-4 md:w-[80%] mx-auto">
        {/* Section Title */}
        <h1 className="mb-4 font-general-sans text-2xl md:text-3xl font-bold text-center md:text-left">
          Listen & Watch
        </h1>

        {/* Platform Icons */}
        <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between gap-8 md:gap-0 w-full my-6 md:my-10">
          {["Apple", "Spotify", "Youtube", "TikTok"].map((platform) => (
            <div key={platform} className="flex justify-center">
              <Image
                src={`/${platform}.svg`}
                width={200}
                height={200}
                alt={`${platform} platform`}
                className="opacity-60 w-20 md:w-[150px] h-auto transform hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        {/* About Content Section */}
        <div className="flex flex-col md:flex-row mt-10 md:mt-20 gap-8 md:gap-12 md:justify-between">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src="/AboutImage.svg"
              alt="About us"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full md:w-[45%]">
            <div className="flex flex-col h-full justify-center">
              <Image
                src="/AboutText.svg"
                alt="About text"
                width={500}
                height={200}
                className="w-full h-auto mb-4"
              />
              <p className="mt-3 md:mt-5 opacity-60 text-sm md:text-base text-center md:text-left">
                A podcast that highlights and celebrates the incredible contributions police officers make to our communities. We focus on compelling crime stories, featuring interviews with those directly involved &mdash; victims, investigators, officers, informants, and more. And to keep things engaging, we sprinkle in a bit of humor along the way!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
