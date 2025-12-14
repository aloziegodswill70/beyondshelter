"use client";

import { motion } from "framer-motion";
import { Facebook } from "lucide-react";

export default function TrendingTopicsClient() {
  const topics = [
    {
      title: "Free Beds Available Overnight in London Shelter",
      summary:
        "Urgent posting from local grassroots group offering free overnight beds for rough sleepers in central London.",
    },
    {
      title: "UK Rent Freeze Discussion — Shelter Support Needed",
      summary:
        "Community debate over rent freeze proposals and the role of charities in supporting tenants.",
    },
    {
      title: "Survivor Safe House Opening — Confidential Access",
      summary:
        "Newly opened safe house for abuse survivors seeking volunteers and donors.",
    },
    {
      title: "Volunteer Drivers Needed for Shelter Transfers",
      summary:
        "Volunteers needed to transport vulnerable individuals to shelters across the UK.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="bg-[#0A213A] text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Trending Topics on Facebook About Shelter Help
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-200"
        >
          Urgent Facebook discussions related to homelessness, emergency shelters,
          housing support and community help across the UK.
        </motion.p>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        {topics.map((topic, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#457B9D]"
          >
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <Facebook className="text-[#457B9D]" />
              {topic.title}
            </h2>
            <p className="mt-3 text-gray-700">{topic.summary}</p>
          </motion.div>
        ))}

        {/* CTA */}
        <div className="bg-[#0A213A] text-white text-center py-12 rounded-2xl">
          <h3 className="text-3xl font-bold">Need Shelter or Support?</h3>
          <p className="mt-4 text-gray-200">
            If you or someone you know needs urgent help, reach out today.
          </p>

          <a
            href="/urgent-help"
            className="inline-block mt-6 bg-[#E63946] px-8 py-3 rounded-full font-semibold hover:bg-red-600"
          >
            Get Help Now
          </a>
        </div>
      </section>
    </div>
  );
}
