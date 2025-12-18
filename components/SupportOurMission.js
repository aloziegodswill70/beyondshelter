// File: components/SupportOurMission.js
"use client";

export default function SupportOurMission() {
  return (
    <section
      id="support"
      className="mt-12 app-card max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* HEADER */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1D3557] mb-4">
        Support Our Mission
      </h2>

      {/* DESCRIPTION */}
      <p className="text-sm sm:text-[15px] md:text-base text-[#3A4F7A] leading-relaxed">
        Every day, thousands of people across the World face homelessness, abuse,
        and trauma alone. Your support helps us provide emergency shelter,
        safety, counselling, and long-term rehabilitation for vulnerable
        individuals who need hope the most.
      </p>

      <p className="mt-3 text-sm sm:text-[15px] md:text-base text-[#3A4F7A] leading-relaxed">
        Whether it’s a one-time gift or a monthly contribution, your kindness
        directly transforms lives.{" "}
        <strong>With your help, we can reach more people, faster.</strong>
      </p>

      {/* SUPPORT OPTIONS */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Option 1 */}
        <div className="bg-[#F1EFEA] p-5 rounded-2xl border border-[#E3E1DC] hover:shadow-md transition">
          <h3 className="font-semibold text-base sm:text-lg text-[#1D3557]">
            £10 – Provide a Warm Meal
          </h3>
          <p className="mt-2 text-sm text-[#3A4F7A]">
            Helps us serve a warm and nutritious meal to someone in need.
          </p>
        </div>

        {/* Option 2 */}
        <div className="bg-[#F1EFEA] p-5 rounded-2xl border border-[#E3E1DC] hover:shadow-md transition">
          <h3 className="font-semibold text-base sm:text-lg text-[#1D3557]">
            £25 – Provide Emergency Supplies
          </h3>
          <p className="mt-2 text-sm text-[#3A4F7A]">
            Supports hygiene kits, blankets, clothing, and basic necessities.
          </p>
        </div>

        {/* Option 3 */}
        <div className="bg-[#F1EFEA] p-5 rounded-2xl border border-[#E3E1DC] hover:shadow-md transition">
          <h3 className="font-semibold text-base sm:text-lg text-[#1D3557]">
            £50 – Fund Safe Housing
          </h3>
          <p className="mt-2 text-sm text-[#3A4F7A]">
            Helps secure temporary accommodation for someone escaping abuse.
          </p>
        </div>
      </div>

      {/* DONATE BUTTON */}
      <div className="mt-10 flex flex-col items-center text-center">
        <button className="w-full sm:w-auto bg-[#E63946] hover:bg-[#c92f3a] text-white font-semibold px-10 py-3 rounded-2xl shadow-md transition">
          Donate Now
        </button>

        <p className="mt-3 text-xs sm:text-sm text-[#3A4F7A] max-w-md">
          100% of your donation goes directly to helping vulnerable individuals.
        </p>
      </div>
    </section>
  );
}
