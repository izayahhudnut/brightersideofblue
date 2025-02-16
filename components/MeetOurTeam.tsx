import Image from 'next/image';

const MeetOurTeam = () => {
  return (
    <section className="bg-white py-16">
      <div className="w-[80%] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Team Member 1 */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/image.svg"
              alt="Jim 'JJ' Joyner"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          
          </div>
          {/* Team Member 2 */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/image1.svg"
              alt="Danny Howard"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          
          </div>
          {/* Team Member 3 */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/image2.svg"
              alt="Tommy Sawyer"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          
          </div>
          {/* Team Member 4 */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/image3.svg"
              alt="John Frank"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
