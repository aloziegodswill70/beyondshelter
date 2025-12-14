"use client";

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
          {/* Service Card */}
          <div className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
              Emergency Accommodation
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We connect vulnerable individuals with safe temporary housing and
              emergency shelter options across the UK.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
              Crisis Helpline
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Access 24/7 phone support for domestic abuse, displacement,
              exploitation, and urgent welfare issues.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
              Legal & Welfare Guidance
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We offer guidance on immigration matters, reporting abuse,
              emergency housing laws, and welfare support options.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
              Community Outreach
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We work closely with UK communities to support vulnerable residents
              and deliver essential relief services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
