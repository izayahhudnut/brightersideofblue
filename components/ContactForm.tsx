import Image from "next/image";
import Button from "./ui/mainbutton";
import { ArrowUpRight } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#1B1927] text-white p-6 md:p-10 rounded-lg">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="relative w-full h-full min-h-[300px]">
          <Image
            src="/contactimage.png"
            alt="Contact Us"
            fill
            className="rounded-lg object-contain"
          />
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-4 md:p-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Get in Touch with Us</h2>
          <p className="text-gray-400 mb-6">
            Got questions? We&apos;ve got answers! Let&apos;s connect and bring your ideas to life.
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded-xl bg-[#252337] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded-xl bg-[#252337] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@domain.com"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone (optional)
              </label>
              <input
                type="text"
                id="phone"
                className="w-full p-2 rounded-xl bg-[#252337] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+1 332 245 666"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Write Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full p-2 rounded-xl bg-[#252337] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message"
            ></textarea>
          </div>
        </form>
        <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4 mt-4">
          <Button 
            text="Submit Now" 
            size="small" 
            className="text-sm md:text-base py-2 px-4 md:py-2 md:px-6"
          />
          <Button
            as="a"
            href="https://venmo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm md:text-base py-2 px-4 md:py-2 md:px-6"
          >
            <span>Support via Venmo</span>
            <ArrowUpRight size={14} className="md:w-4 md:h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
