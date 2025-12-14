"use client";

import { Heart, Users, HandHelping, ArrowRight } from "lucide-react";

export default function VolunteerForBeyondShelter() {
  return (
    <main className="pt-28 px-6 max-w-6xl mx-auto">

      {/* ================= HERO ================= */}
      <section className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-primaryBlue">
          Volunteer With Beyond Shelter UK
        </h1>

        <p className="mt-4 text-primaryBlue/80 max-w-2xl mx-auto">
          Your time, skills, and compassion can change lives. Join our mission
          to provide shelter, safety, and hope to vulnerable individuals across
          the UK.
        </p>
      </section>

      {/* ================= WHY VOLUNTEER ================= */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: <Heart size={26} />,
            title: "Make Real Impact",
            desc: "Help people escape homelessness, abuse, and crisis situations.",
            bg: "bg-urgentRed",
          },
          {
            icon: <Users size={26} />,
            title: "Join a Caring Community",
            desc: "Work alongside compassionate volunteers and professionals.",
            bg: "bg-primaryBlue",
          },
          {
            icon: <HandHelping size={26} />,
            title: "Use Your Skills",
            desc: "Support through counselling, admin, outreach, logistics, and more.",
            bg: "bg-shelterGreen",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="app-card shadow-lg flex flex-col gap-4"
          >
            <div className={`${item.bg} text-white w-fit p-3 rounded-2xl`}>
              {item.icon}
            </div>

            <h3 className="font-semibold text-lg text-primaryBlue">
              {item.title}
            </h3>

            <p className="text-sm text-primaryBlue/80 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* ================= VOLUNTEER ROLES ================= */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-primaryBlue mb-4">
          Volunteer Roles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Shelter Support Assistant",
            "Domestic Abuse Support Volunteer",
            "Outreach & Community Engagement",
            "Counselling & Emotional Support",
            "Food & Essentials Distribution",
            "Administrative & Online Support",
          ].map((role, i) => (
            <div
              key={i}
              className="bg-[#F1EFEA] border border-[#E3E1DC] rounded-2xl p-4 text-primaryBlue font-medium"
            >
              {role}
            </div>
          ))}
        </div>
      </section>

      {/* ================= VOLUNTEER FORM ================= */}
      <section className="app-card mb-20">
        <h2 className="text-2xl font-bold text-primaryBlue mb-2">
          Become a Volunteer
        </h2>

        <p className="text-sm text-primaryBlue/80 mb-6">
          Fill out the form below and our team will get in touch with you.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          />

          <input
            type="text"
            placeholder="City / Location"
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          />

          <textarea
            placeholder="How would you like to help?"
            rows={4}
            className="md:col-span-2 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          />

          <button
            type="submit"
            className="md:col-span-2 mt-2 bg-urgentRed hover:bg-red-700 text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 transition"
          >
            Submit Application
            <ArrowRight size={20} />
          </button>
        </form>
      </section>
    </main>
  );
}
