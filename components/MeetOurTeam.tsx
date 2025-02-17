// MeetOurTeam.tsx
import Image from "next/image";

const MeetOurTeam = () => {
  const teamMembers = [
    { name: "Jim 'JJ' Joyner", image: "/image.svg" },
    { name: "Danny Howard", image: "/image1.svg" },
    { name: "Tommy Sawyer", image: "/image2.svg" },
    { name: "John Frank", image: "/image3.svg" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="w-[80%] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="relative bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={member.image} alt={member.name} width={300} height={300} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
