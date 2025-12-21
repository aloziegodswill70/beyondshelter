"use client";

import Link from "next/link";

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* ===== HERO HEADER ===== */}
      <div className="w-full bg-black py-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#D4AF37]">
          Our Services
        </h1>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
          At <strong>BeyondShelter UK</strong>, we provide immediate,
          compassionate, and confidential support for individuals facing
          homelessness, abuse, exploitation, or emergency crises. Our services
          are tailored to help you regain safety, stability, and hope.
        </p>

        {/* ===== SERVICES GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Emergency Accommodation */}
          <div className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
              Emergency Accommodation
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We connect vulnerable individuals with safe temporary housing and
              emergency shelter options across the UK.
            </p>
          </div>

          {/* Crisis Helpline */}
          <div className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
              Crisis Helpline
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Access urgent phone support for domestic abuse, displacement,
              safeguarding concerns, and emergency welfare issues.
            </p>
          </div>

          {/* ✅ UPDATED: Fathers Who Need Help */}
          <div className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
                Fathers Who Need Help
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Emergency respite, temporary accommodation, and advocacy support
                for fathers required to leave the family home due to safeguarding
                or crisis situations. We provide non-judgmental, child-focused
                support to help fathers navigate this difficult period safely
                and fairly.
              </p>
            </div>

            <Link
              href="/fatherswhoneedhelp"
              className="mt-4 inline-block text-sm font-semibold text-[#1D3557] hover:underline"
            >
              Learn more →
            </Link>
          </div>

          {/* Community Outreach */}
          <div className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
              Community Outreach
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We work closely with communities to support vulnerable residents
              and deliver essential relief, advocacy, and safeguarding services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
