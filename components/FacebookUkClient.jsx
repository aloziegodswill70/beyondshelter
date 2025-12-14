// File: components/FacebookUkClient.jsx
"use client";

import { motion } from "framer-motion";

export default function FacebookUkClient() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* ========== HERO SECTION ========== */}
      <section className="bg-[#0A213A] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Facebook UK – Latest Updates & Support Guide
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-200"
          >
            Stay updated with Facebook UK news, safety information, and how
            Beyond Shelter supports people affected by online abuse.
          </motion.p>
        </div>
      </section>

      {/* ========== CONTENT SECTION ========== */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">

        <div>
          <h2 className="text-3xl font-bold text-[#0A213A]">
            Facebook UK – What You Should Know
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Facebook is widely used across the UK for communication,
            community building, and business. However, it also exposes users
            to harassment, scams, impersonation, and misinformation.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#0A213A]">
            Common Issues UK Users Face
          </h2>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
            <li>Fake profiles and impersonation</li>
            <li>Cyberbullying and harassment</li>
            <li>Romance scams and fraud</li>
            <li>Threatening or abusive messages</li>
            <li>Privacy breaches</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#0A213A]">
            What To Do If You Feel Unsafe
          </h2>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
            <li>Report content directly to Facebook</li>
            <li>Block the offender immediately</li>
            <li>Save evidence such as screenshots</li>
            <li>Contact authorities if at risk</li>
            <li>Reach out to Beyond Shelter for support</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#0A213A]">
            How Beyond Shelter Helps
          </h2>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
            <li>Confidential emotional support</li>
            <li>Guidance on reporting online abuse</li>
            <li>Safety planning</li>
            <li>Referrals to legal or crisis services</li>
          </ul>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0A213A] text-white text-center py-12 px-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-3xl font-bold">
            Need Help With an Online Safety Issue?
          </h3>
          <p className="mt-4 text-gray-200 text-lg">
            If something online makes you feel unsafe or distressed,
            Beyond Shelter is here to help.
          </p>

          <a
            href="/contacts"
            className="inline-block mt-6 bg-white text-[#0A213A] font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </motion.div>

      </section>
    </div>
  );
}
