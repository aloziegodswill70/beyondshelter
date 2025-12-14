// File: app/beyondshelter-are-on-facebook/page.js
"use client";

import { motion } from "framer-motion";

export default function BeyondShelterAreOnFacebook() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          BeyondShelter Are on Facebook
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto opacity-90">
          Stay connected with BeyondShelter on Facebook for updates, support
          resources, awareness campaigns, and ways to get involved.
        </p>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-14">

        {/* SECTION 1 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold">Stay Connected With Us</h2>
          <p className="text-lg leading-relaxed">
            BeyondShelter.org.uk is now active on Facebook, offering a direct 
            way for individuals, families, and supporters to stay engaged with our 
            mission. From live updates to crisis alerts and awareness posts, our 
            Facebook page helps us reach more people who may need urgent help.
          </p>
        </motion.section>

        {/* SECTION 2 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold">What We Share on Facebook</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Emergency assistance information</li>
            <li>Updates about displaced and vulnerable individuals</li>
            <li>Safety awareness and prevention tips</li>
            <li>Campaigns, charity events, and volunteer activities</li>
            <li>Support resources for victims and survivors</li>
            <li>Community impact stories and reports</li>
          </ul>
        </motion.section>

        {/* SECTION 3 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold">Why Follow BeyondShelter?</h2>
          <p className="text-lg leading-relaxed">
            Following us on Facebook ensures that you never miss important updates 
            related to safety, community alerts, housing support, or crisis 
            assistance. It also helps expand awareness so more vulnerable people 
            can find the help they need quickly.
          </p>
        </motion.section>

        {/* SECTION 4 – CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center py-10"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Follow Us on Facebook Today
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join our growing community and stay informed. Your engagement helps 
            support individuals who need urgent care, guidance, and protection.
          </p>

          <a
            href="https://facebook.com"
            target="_blank"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Visit Facebook Page
          </a>
        </motion.section>

      </div>
    </div>
  );
}
