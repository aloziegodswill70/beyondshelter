// File: app/get-involve/GetInvolveClient.js
"use client";

import { motion } from "framer-motion";
import { HandHeart, Users, HeartHandshake, ArrowRight } from "lucide-react";

export default function GetInvolveClient() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="bg-[#0A213A] text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Get Involved
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
        >
          Make a real difference in the lives of vulnerable people across the UK.
          From volunteering to partnering with us, your support saves lives.
        </motion.p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-20">

        {/* Volunteer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#457B9D]"
        >
          <h2 className="text-3xl font-bold text-[#0A213A] flex items-center gap-3">
            <Users size={32} className="text-[#457B9D]" />
            Volunteer With Us
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Join our team of compassionate volunteers providing emergency support,
            housing guidance, outreach and emotional care across the UK.
          </p>
          <a
            href="/contacts"
            className="mt-6 inline-flex items-center gap-2 text-[#E63946] font-semibold hover:underline"
          >
            Sign Up to Volunteer <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Donate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#E63946]"
        >
          <h2 className="text-3xl font-bold text-[#0A213A] flex items-center gap-3">
            <HandHeart size={32} className="text-[#E63946]" />
            Make a Donation
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Your donations provide housing support, meals, counselling and
            protection for people facing abuse and homelessness.
          </p>
          <a
            href="/donate"
            className="mt-6 inline-flex items-center gap-2 text-[#E63946] font-semibold hover:underline"
          >
            Donate Now <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#2A9D8F]"
        >
          <h2 className="text-3xl font-bold text-[#0A213A] flex items-center gap-3">
            <HeartHandshake size={32} className="text-[#2A9D8F]" />
            Partner With Beyond Shelter
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We collaborate with councils, NGOs, churches and businesses to expand
            emergency housing and crisis support across the UK.
          </p>
          <a
            href="/contacts"
            className="mt-6 inline-flex items-center gap-2 text-[#E63946] font-semibold hover:underline"
          >
            Contact Partnership Team <ArrowRight size={18} />
          </a>
        </motion.div>

      </section>

      {/* CTA */}
      <section className="bg-[#0A213A] text-white py-16 text-center px-6">
        <h3 className="text-3xl md:text-4xl font-bold">
          Your involvement can save a life today
        </h3>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Volunteer, donate, or partner with us to bring safety, shelter and hope
          to people in crisis.
        </p>

        <a
          href="/contacts"
          className="mt-8 inline-block bg-[#E63946] py-3 px-8 rounded-full text-lg font-semibold hover:bg-red-600 transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}
