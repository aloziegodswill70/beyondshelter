"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-28 pb-10 px-6 flex flex-col items-center text-center">

      {/* MAIN HERO CARD */}
      <div className="app-card w-full max-w-md">

        {/* Hero Image */}
        <div className="w-full mb-6">
          <Image
            src="/images/beyond1.jpg"
            width={500}
            height={380}
            alt="Beyond Shelter UK"
            className="rounded-2xl w-full h-auto"
          />
        </div>

        {/* Text */}
        <h2 className="text-3xl font-bold text-bs_navy">
          Shelter. Safety. Support.
        </h2>

        <p className="mt-4 text-bs_navy/70 leading-relaxed">
          We provide emergency shelter, food, emotional support, and a path 
          to safety for homeless individuals and abuse survivors in the UK.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col gap-4">
          <button className="w-full py-3 bg-bs_orange text-white font-semibold rounded-full shadow hover:bg-orange-600 transition">
            Get Help Now
          </button>

          <button className="w-full py-3 bg-bs_blue text-white font-semibold rounded-full shadow hover:bg-blue-600 transition">
            Support Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
