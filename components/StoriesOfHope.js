"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function StoriesOfHope() {
  const stories = [
    {
      name: "Aisha, 18 — Coventry",
      title: "Family at Risk of Homelessness",
      story: `“When our landlord served us a no-fault eviction notice, I was six months pregnant with our second child, and we had nowhere to go. I had never felt so helpless.

Beyond Shelter didn’t just give us a place to stay — they walked with us every step of the way. From liaising with the council to helping us apply for benefits and getting our toddler into a local nursery, they were there.

We now have a stable home, and I’m finally able to sleep at night. I genuinely don’t know what we would have done without them.”`,
      image: "/images/yaabuse2.jpg",
    },
    {
      name: "David, 16 — Birmingham",
      title: "Father Facing a Domestic Abuse Allegation",
      story: `“When I was asked to leave the family home, I ended up sleeping in my car. I didn’t even know I had the right to be part of the conversation about my children’s welfare.

Beyond Shelter helped me understand my parental responsibilities and rights. They weren’t there to judge — they helped me reflect, take accountability, and plan a way forward. They even worked with social services and helped arrange supervised contact.

For the first time, I felt like someone saw me as a father, not just a ‘risk’.”`,
      image: "/images/yaabuse.jpg",
    },
    {
      name: "Reece, 21 — Coventry",
      title: "Prison Leaver Reintegrating into the Community",
      story: `“I was released after serving time for a non-violent offence, and I had nowhere to go. Beyond Shelter arranged pre-release meetings with me in prison, created a support plan, and secured temporary accommodation before I even walked out.

I’ve since started a training course and receive weekly support around budgeting and routines. They also checked in regularly with my probation officer.

It’s the first time I’ve had a second chance that feels real.”`,
      image: "/images/yaabuse1.jpg",
    },
    {
      name: "Maryam, 24 — Sudanese Asylum Seeker",
      title: "Refugee Mother in Crisis",
      story: `“As a single mother who had just arrived in the UK, I was overwhelmed. I didn’t know how to access help, my son was ill, and we were placed in temporary housing that wasn’t safe.

Beyond Shelter didn’t just help us find somewhere better — they explained everything in a way I could understand, helped me register with a GP, got my son into school, and even provided food vouchers.

They treated me like a human being, not a case.”`,
      image: "/images/yaabuse3.jpg",
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

      <p className="text-primaryBlue/80 mb-10 max-w-3xl">
        These are real stories from people supported by Beyond Shelter UK. Each
        reflects the dignity, complexity, and resilience of individuals and
        families navigating crisis — and the difference compassionate,
        practical support can make.
      </p>

      {/* STORIES GRID */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
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
                       50vw"
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="mt-5 space-y-3">
              <h3 className="text-lg font-semibold text-primaryBlue">
                {person.name}
              </h3>

              <p className="text-sm font-medium text-primaryBlue/70">
                {person.title}
              </p>

              <p className="text-sm leading-relaxed text-primaryBlue/80 whitespace-pre-line">
                {person.story}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
