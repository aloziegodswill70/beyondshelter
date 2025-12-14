// File: app/bbc-news-about-stranded-london-residents/page.js
"use client";

import { motion } from "framer-motion";

export default function BBCNewsAboutStrandedLondonResidents() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ================= HEADER BANNER ================= */}
      <div className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          BBC News: Stranded London Residents – Support, Updates & Assistance
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto opacity-90">
          Information, resources, and guidance for London residents affected by
          displacement, crises, unsafe housing, or emergency situations.
        </p>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        {/* SECTION 1 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold">Overview</h2>
          <p className="text-lg leading-relaxed">
            Recent BBC News reports have highlighted situations where London
            residents found themselves stranded due to emergencies, housing
            crises, transit disruptions, and unexpected displacement. 
            BeyondShelter offers support, guidance, and safe pathways for
            vulnerable individuals affected by these events.
          </p>
        </motion.section>

        {/* SECTION 2 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold">Common Reasons Residents Become Stranded</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Public transport shutdowns and network disruptions</li>
            <li>Sudden eviction or emergency housing loss</li>
            <li>Financial hardship preventing safe travel</li>
            <li>Flooding, extreme weather, or building damage</li>
            <li>Domestic safety concerns or conflict situations</li>
            <li>Crisis displacement without access to support</li>
          </ul>
        </motion.section>

        {/* SECTION 3 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold">How BeyondShelter Supports Stranded Individuals</h2>
          <p className="text-lg leading-relaxed">
            BeyondShelter.org.uk ensures that individuals in vulnerable or 
            stranded conditions across London receive immediate support, including:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Emergency accommodation coordination</li>
            <li>Crisis intervention and safe relocation assistance</li>
            <li>Practical guidance on accessing local council help</li>
            <li>Mental health and emotional support</li>
            <li>Safeguarding support for vulnerable individuals</li>
            <li>Connections to verified charities and social services</li>
          </ul>
        </motion.section>

        {/* SECTION 4 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4 bg-gray-100 p-6 rounded-xl"
        >
          <h2 className="text-3xl font-semibold">What To Do If You Are Stranded in London</h2>
          <ol className="list-decimal pl-6 space-y-3 text-lg">
            <li>Move to a safe, well-lit public location if possible.</li>
            <li>Contact your local council’s emergency helpline.</li>
            <li>Reach out to trusted friends, family, or organisations.</li>
            <li>Use verified shelter services and avoid unsafe alternatives.</li>
            <li>Request immediate assistance through BeyondShelter.</li>
          </ol>
        </motion.section>

        {/* SECTION 5 */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center py-10"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Need Help Right Now?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            If you or someone you know is stranded, displaced, or unsafe in
            London, we are here to help. Reach out for immediate guidance and
            support.
          </p>

          <a
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
          >
            Contact BeyondShelter
          </a>
        </motion.section>
      </div>
    </div>
  );
}
