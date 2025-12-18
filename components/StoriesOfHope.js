"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function StoriesOfHope() {
  const stories = [
    {
      name: "Sarah, 12",
      story:
        "After escaping domestic abuse, Sarah found emergency shelter, counselling and long-term support that helped her rebuild her life.",
      image: "/images/beyond3.jpg",
    },
    {
      name: "Michael, 8",
      story:
        "Michael was sleeping rough for 2 years. Beyond Shelter helped him get housing, meals, and job placement support.",
      image: "/images/beyond2.jpg",
    },
    {
      name: "Amara, 10",
      story:
        "As a young woman fleeing emotional and physical abuse, Amara found safety, legal support and a new beginning.",
      image: "/images/beyond1.jpg",
    },
  ];

  return (
    <section className="mt-16 mb-20">

      {/* HEADER */}
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={22} className="text-shelterGreen" />
        <h2 className="text-2xl font-bold text-primaryBlue">
          Stories of Hope
        </h2>
      </div>

      <p className="text-primaryBlue/80 mb-8 max-w-2xl">
        Real stories from people we’ve supported across the UK — proof that
        compassion, shelter, and care can change lives.
      </p>

      {/* STORIES GRID */}
      <div
        className="
          grid gap-8
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {stories.map((person, index) => (
          <div
            key={index}
            className="app-card overflow-hidden hover:shadow-xl transition"
          >
            {/* IMAGE */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={person.image}
                alt={person.name}
                fill
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-primaryBlue">
                {person.name}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-primaryBlue/80">
                {person.story}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
