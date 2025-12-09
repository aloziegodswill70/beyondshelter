// File: components/AboutSection.js
"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="mt-10 app-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* HEADER */}
        <h2 className="text-2xl font-bold text-[#1D3557] mb-3">
          About Beyond Shelter UK
        </h2>

        {/* TEXT BLOCK */}
        <p className="text-[15px] leading-relaxed text-[#3A4F7A]">
          Beyond Shelter UK is a community-driven organisation dedicated to
          protecting homeless and abused individuals across the United Kingdom.
          We provide safe housing, emergency support, rehabilitation assistance,
          and long-term guidance to help people rebuild their lives with dignity.
        </p>

        <p className="mt-3 text-[15px] leading-relaxed text-[#3A4F7A]">
          Our mission is simple: <strong>no one should face homelessness, trauma
          or abuse alone</strong>. Through compassion, partnership and community
          action, we offer hope, healing, and a fresh start.
        </p>

        {/* HIGHLIGHT CARD */}
        <div className="mt-5 bg-[#F1EFEA] rounded-2xl p-4 border border-[#E3E1DC]">
          <h3 className="font-semibold text-lg text-[#1D3557]">
            Our Core Commitments
          </h3>

          <ul className="mt-3 space-y-2 text-[15px] text-[#3A4F7A]">
            <li>• Providing emergency shelter and temporary housing.</li>
            <li>• Supporting survivors of domestic abuse with care & safety.</li>
            <li>• Offering counselling and mental wellness support.</li>
            <li>• Connecting individuals to employment & reintegration programs.</li>
            <li>• Building a strong community where everyone feels valued.</li>
          </ul>
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-6 text-center">
          <a
            href="#support"
            className="inline-block bg-[#1D3557] text-white py-3 px-6 rounded-2xl font-semibold shadow-md hover:bg-[#142744] transition"
          >
            Join Our Mission
          </a>
        </div>
      </motion.div>
    </section>
  );
}
