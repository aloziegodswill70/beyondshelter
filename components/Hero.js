"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl mb-10">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/images/beyond1.jpg"
          fill
          priority
          alt="Beyond Shelter UK"
          className="object-cover opacity-25"
        />
      </div>

      {/* CONTENT */}
      <div className="relative app-card backdrop-blur-sm bg-white/85">

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1D3557]">
          Shelter. Safety. Support.
        </h1>

        <p className="mt-4 text-[#3A4F7A] leading-relaxed max-w-xl">
          Beyond Shelter UK provides emergency housing, crisis care,
          and long-term support for homeless individuals and abuse survivors.
        </p>

        {/* EMERGENCY ACTION BUTTONS */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

          <Link href="/need-help"
            className="py-4 rounded-2xl bg-red-600 text-white font-semibold text-center shadow hover:opacity-90">
            Get Quick Help
          </Link>

          <Link href="/refer-someone"
            className="py-4 rounded-2xl bg-[#1D3557] text-white font-semibold text-center shadow hover:opacity-90">
            Refer Someone in Need
          </Link>

          <Link href="/contacts"
            className="py-4 rounded-2xl bg-[#457B9D] text-white font-semibold text-center shadow hover:opacity-90">
            Enquiries
          </Link>

          <Link href="/emergency-helpline-in-uk"
            className="py-4 rounded-2xl bg-[#2A9D8F] text-white font-semibold text-center shadow hover:opacity-90">
            Emergency Helpline
          </Link>

        </div>
      </div>
    </section>
  );
}
