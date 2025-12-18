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
          alt="Emergency Shelter & Support UK"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENT */}
      <div className="relative app-card backdrop-blur-sm bg-white/85 px-6 py-12">

        {/* BLINKING HERO TEXT */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-[#1D3557] animate-pulse">
          🚨 Emergency Shelter, Safety & Urgent Help 🚨
        </h1>

        <p className="mt-5 text-center text-[#3A4F7A] leading-relaxed max-w-2xl mx-auto text-lg">
          Beyond Shelter UK provides <strong>immediate emergency housing</strong>, 
          crisis intervention, and urgent support for homeless individuals, abuse survivors,
          fathers in crisis, and people at risk.
        </p>

        {/* EMERGENCY ACTION BUTTONS */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <Link
            href="/need-help"
            className="py-4 rounded-2xl text-white font-semibold text-center shadow 
            animate-[pulse_2s_infinite] bg-red-600 hover:bg-red-700 transition"
          >
            Get Help Now
          </Link>

          <Link
            href="/emergency-help"
            className="py-4 rounded-2xl text-white font-semibold text-center shadow 
            animate-[pulse_2.5s_infinite] bg-orange-600 hover:bg-orange-700 transition"
          >
            Emergency Help
          </Link>

          <Link
            href="/emergency"
            className="py-4 rounded-2xl text-white font-semibold text-center shadow 
            animate-[pulse_3s_infinite] bg-emerald-600 hover:bg-emerald-700 transition"
          >
            Immediate Shelter
          </Link>

          <Link
            href="/fatherswhoneedhelp"
            className="py-4 rounded-2xl text-white font-semibold text-center shadow 
            animate-[pulse_2.8s_infinite] bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Fathers Who Need Help
          </Link>

          <Link
            href="/contacts"
            className="py-4 rounded-2xl text-white font-semibold text-center shadow 
            animate-[pulse_3.2s_infinite] bg-[#457B9D] hover:bg-[#35607A] transition"
          >
            Contact Support
          </Link>

          {/* ✅ LAST PAGE ADDED */}
          <Link
            href="/get-emergency-and-urgent-shelter-help"
            className="py-4 rounded-2xl text-white font-bold text-center shadow-lg 
            animate-[pulse_1.8s_infinite] bg-black hover:bg-gray-900 transition"
          >
            Read: Emergency & Urgent Shelter Help
          </Link>

        </div>
      </div>
    </section>
  );
}
