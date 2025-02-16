import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-plus-jakarta-sans',
});

export default function Merch() {
  return (
    <section className="bg-white text-black py-10 md:py-20">
      <div className="w-full px-4 md:w-[80%] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex flex-row items-center space-x-2">
            <Image 
              src="minilogo.svg" 
              alt="logo" 
              height={50} 
              width={50}
              className="w-8 h-8 md:w-12 md:h-12" 
            />
            <h1 className="text-2xl md:text-3xl font-bold text-black ml-2">
              <span className="text-blue-600">Explore</span> Our Merch
            </h1>
          </div>

          <a
            href="https://stores.inksoft.com/brighter_side_of_blue_podcast/shop/products/all?page=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded border border-blue-600 px-4 md:px-6 py-2 text-black font-bold hover:bg-blue-100 transition w-full sm:w-auto justify-center sm:justify-start"
          >
            Browse All
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Product Cards Section */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card 1 */}
          <div className="relative rounded-xl p-4 shadow-lg">
            {/* Best Seller Badge */}
            <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
              Best Seller
            </div>
            {/* Product Image */}
            <Image
              src="/product1.png"
              alt="Adult Attain Quarter-Zip Pullover"
              height={200}
              width={200}
              className="mx-auto object-cover w-48 md:w-52 h-auto"
            />
            {/* Product Details */}
            <div className="mt-4">
              <p className="text-gray-500 text-sm">Men-Cloths</p>
              <h3 className="font-bold text-lg">Adult Attain Quarter-Zip Pullover</h3>
              <p className="text-lg mt-2 opacity-50">$30</p>
              <a
                href="https://stores.inksoft.com/brighter_side_of_blue_podcast/shop/product-detail/1020518"
                target="_blank"
                rel="noopener noreferrer"
                className={`${plusJakartaSans.className} mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition inline-block text-center`}
              >
                Add to Cart
              </a>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="relative rounded-xl p-4 shadow-lg">
            <Image
              src="/product2.png"
              alt="Product 2"
              height={200}
              width={200}
              className="mx-auto object-cover w-48 md:w-52 h-auto"
            />
            <div className="mt-4">
              <p className="text-gray-500 text-sm">Men-Cloths</p>
              <h3 className="font-bold text-lg">Premium Hoodie</h3>
              <p className="text-lg mt-2 opacity-50">$40</p>
              <a
                href="https://stores.inksoft.com/brighter_side_of_blue_podcast/shop/product-detail/1020521"
                target="_blank"
                rel="noopener noreferrer"
                className={`${plusJakartaSans.className} mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition inline-block text-center`}
              >
                Add to Cart
              </a>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="relative rounded-xl p-4 shadow-lg">
            <Image
              src="/product3.png"
              alt="Product 3"
              height={200}
              width={200}
              className="mx-auto object-cover w-48 md:w-52 h-auto"
            />
            <div className="mt-4">
              <p className="text-gray-500 text-sm">Men-Cloths</p>
              <h3 className="font-bold text-lg">Classic T-Shirt</h3>
              <p className="text-lg mt-2 opacity-50">$20</p>
              <a
                href="https://stores.inksoft.com/brighter_side_of_blue_podcast/shop/product-detail/1020528"
                target="_blank"
                rel="noopener noreferrer"
                className={`${plusJakartaSans.className} mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition inline-block text-center`}
              >
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}