// File: app/community-outreach-projects/page.js
"use client";

import { motion } from "framer-motion";

export default function CommunityOutreachProjects() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= HEADER ================= */}
      <div className="bg-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Community Outreach Projects
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto opacity-90">
          BeyondShelter.org.uk is committed to supporting vulnerable individuals
          through targeted community outreach initiatives across the UK.
        </p>
      </div>

      {/* ================= MAIN WRAPPER ================= */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* SECTION 1 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold">Our Mission Through Outreach</h2>
          <p className="text-lg leading-relaxed">
            BeyondShelter’s outreach projects are designed to identify, support,
            and empower individuals who are homeless, at risk, or recovering from
            traumatic experiences such as abuse, displacement, and crisis-related
            emergencies. We work directly within local communities to ensure that
            help reaches those who need it most.
          </p>
        </motion.section>

        {/* SECTION 2 – PROJECT LIST */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold">Key Community Projects</h2>

          <div className="space-y-8">

            <div className="border-l-4 border-green-700 pl-5">
              <h3 className="text-2xl font-bold">Homeless Street Walks</h3>
              <p className="text-lg leading-relaxed mt-2">
                Volunteers visit high-risk areas to distribute food, blankets,
                hygiene packs, and emergency support information to rough sleepers.
              </p>
            </div>

            <div className="border-l-4 border-green-700 pl-5">
              <h3 className="text-2xl font-bold">Women & Family Support Outreach</h3>
              <p className="text-lg leading-relaxed mt-2">
                Specialised teams engage survivors of domestic abuse, displaced
                mothers, and vulnerable children, providing help, referrals, and
                emotional support.
              </p>
            </div>

            <div className="border-l-4 border-green-700 pl-5">
              <h3 className="text-2xl font-bold">Youth Empowerment Programmes</h3>
              <p className="text-lg leading-relaxed mt-2">
                Training sessions, mentorship, and life-skill workshops for young
                people experiencing homelessness, unemployment, or trauma.
              </p>
            </div>

            <div className="border-l-4 border-green-700 pl-5">
              <h3 className="text-2xl font-bold">Crisis Intervention Support</h3>
              <p className="text-lg leading-relaxed mt-2">
                We deploy rapid-response volunteers to assist individuals facing
                urgent situations such as sudden homelessness, abuse threats,
                trafficking risks, or crisis displacement.
              </p>
            </div>

            <div className="border-l-4 border-green-700 pl-5">
              <h3 className="text-2xl font-bold">Community Awareness Campaigns</h3>
              <p className="text-lg leading-relaxed mt-2">
                Outreach events educate the public about abuse prevention,
                homelessness support, mental health awareness, and community
                safety.
              </p>
            </div>

          </div>
        </motion.section>

        {/* SECTION 3 – IMPACT */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold">Our Impact Across The UK</h2>
          <p className="text-lg leading-relaxed">
            Through these outreach projects, BeyondShelter has been able to 
            reach thousands of individuals in need. Our volunteers, donors, 
            and partner organisations work together to create meaningful 
            change in communities—providing immediate help, long-term care, 
            and hope for a safer future.
          </p>
        </motion.section>

        {/* SECTION 4 – CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-center py-12"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Join Our Community Outreach Mission
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Whether you volunteer, donate, or help spread awareness, your support
            strengthens our ability to reach vulnerable individuals across the UK.
          </p>

          <a
            href="/contact"
            className="inline-block bg-green-700 text-white px-10 py-3 rounded-lg text-lg hover:bg-green-800 transition"
          >
            Get Involved Today
          </a>
        </motion.section>

      </div>
    </div>
  );
}
