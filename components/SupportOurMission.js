// File: components/SupportOurMission.js
"use client";

export default function SupportOurMission() {
  return (
    <section id="support" className="mt-10 app-card">
      {/* HEADER */}
      <h2 className="text-2xl font-bold text-[#1D3557] mb-3">
        Support Our Mission
      </h2>

      {/* DESCRIPTION */}
      <p className="text-[15px] text-[#3A4F7A] leading-relaxed">
        Every day, thousands of people across the UK face homelessness, abuse,
        and trauma alone. Your support helps us provide emergency shelter,
        safety, counselling, and long-term rehabilitation for vulnerable
        individuals who need hope the most.
      </p>

      <p className="mt-3 text-[15px] text-[#3A4F7A] leading-relaxed">
        Whether it’s a one-time gift or a monthly contribution, your kindness
        directly transforms lives.  
        <strong>With your help, we can reach more people, faster.</strong>
      </p>

      {/* SUPPORT OPTIONS */}
      <div className="mt-6 grid gap-4">
        {/* Option 1 */}
        <div className="bg-[#F1EFEA] p-4 rounded-2xl border border-[#E3E1DC]">
          <h3 className="font-semibold text-lg text-[#1D3557]">
            £10 – Provide a Warm Meal
          </h3>
          <p className="mt-1 text-[14px] text-[#3A4F7A]">
            Helps us serve a warm and nutritious meal to someone in need.
          </p>
        </div>

        {/* Option 2 */}
        <div className="bg-[#F1EFEA] p-4 rounded-2xl border border-[#E3E1DC]">
          <h3 className="font-semibold text-lg text-[#1D3557]">
            £25 – Provide Emergency Supplies
          </h3>
          <p className="mt-1 text-[14px] text-[#3A4F7A]">
            Supports hygiene kits, blankets, clothing, and basic necessities.
          </p>
        </div>

        {/* Option 3 */}
        <div className="bg-[#F1EFEA] p-4 rounded-2xl border border-[#E3E1DC]">
          <h3 className="font-semibold text-lg text-[#1D3557]">
            £50 – Fund Safe Housing
          </h3>
          <p className="mt-1 text-[14px] text-[#3A4F7A]">
            Helps secure temporary accommodation for someone escaping abuse.
          </p>
        </div>
      </div>

      {/* DONATE BUTTON */}
      <div className="mt-8 text-center">
        <button className="w-full bg-[#E63946] hover:bg-[#c92f3a] text-white font-semibold py-3 rounded-2xl shadow-md transition">
          Donate Now
        </button>

        <p className="mt-2 text-sm text-[#3A4F7A]">
          100% of your donation goes directly to helping vulnerable individuals.
        </p>
      </div>
    </section>
  );
}
