"use client";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function StoriesOfHope() {
  const stories = [
    {
      name: "Sarah, 32",
      story:
        "After escaping domestic abuse, Sarah found emergency shelter, counselling and long-term support that helped her rebuild her life.",
      image: "/images/story1.jpg",
    },
    {
      name: "Michael, 41",
      story:
        "Michael was sleeping rough for 2 years. Beyond Shelter helped him get housing, meals, and job placement support.",
      image: "/images/story2.jpg",
    },
    {
      name: "Amara, 23",
      story:
        "As a young woman fleeing emotional and physical abuse, Amara found safety, legal support and a new beginning.",
      image: "/images/story3.jpg",
    },
  ];

  return (
    <section className="mt-14 mb-16">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={22} className="text-shelterGreen" />
        <h2 className="text-xl font-bold text-primaryBlue">Stories of Hope</h2>
      </div>

      <p className="text-sm text-primaryBlue/80 mb-6">
        Real stories from people we’ve supported across the UK.
      </p>

      <div className="flex flex-col gap-6">
        {stories.map((person, index) => (
          <div key={index} className="app-card overflow-hidden shadow-lg">
            <div className="relative w-full h-48 rounded-3xl overflow-hidden">
              <Image
                src="/images/beyond2.jpg"
                alt={person.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-primaryBlue">{person.name}</h3>
              <p className="text-sm text-primaryBlue/80 mt-1 leading-relaxed">
                {person.story}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
