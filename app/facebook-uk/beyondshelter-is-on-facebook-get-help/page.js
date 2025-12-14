"use client";

import { motion } from "framer-motion";
import { Facebook, MessageCircle, Shield } from "lucide-react";

export default function BeyondShelterFacebookHelp() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="bg-[#0A213A] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Beyond Shelter is on Facebook – Get Help Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-200 text-lg md:text-xl"
          >
            Connect with Beyond Shelter UK on Facebook for emergency
            support, crisis updates, safe housing help, and confidential
            communication.
          </motion.p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        {/* Why Contact Us on Facebook */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#0A213A]">
            Why Reach Out to Us Through Facebook?
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Many people in crisis prefer using Facebook because it is discreet,
            fast, and accessible from any device. Beyond Shelter UK offers
            support through our official Facebook page to help individuals
            facing homelessness, abuse, or urgent safety concerns.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Fast response from trained support volunteers</li>
            <li>• Confidential messaging through Facebook inbox</li>
            <li>• Updates on available shelters and emergency aid</li>
            <li>• Support for domestic abuse and crisis situations</li>
            <li>• Community resources and helpful posts</li>
          </ul>
        </div>

        {/* Safety Note */}
        <div className="mt-10 bg-[#E63946] text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-start gap-4">
            <Shield size={32} />
            <p className="text-lg">
              If you are in immediate danger, please call 
              <span className="font-bold"> 999 </span> right now.  
              Facebook messaging should be used for non-emergency support only.
            </p>
          </div>
        </div>

        {/* How to Reach Us */}
        <div className="mt-12 bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#0A213A]">
            How to Contact Beyond Shelter UK on Facebook
          </h2>

          <p className="mt-4 text-gray-700">
            You can reach our support team through our verified Facebook page.
            We are available day and night to offer guidance and connect you
            with safe housing, crisis intervention, or emotional support.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">

            {/* Contact Card 1 */}
            <div className="bg-blue-600 text-white rounded-xl p-6 flex items-start gap-4 shadow-md">
              <Facebook size={40} />
              <div>
                <h3 className="text-xl font-semibold">Visit Our Page</h3>
                <p className="text-sm mt-2 opacity-90">
                  Access updates, housing availability, emergency posts, and helpful resources.
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 bg-white text-blue-700 font-bold px-6 py-2 rounded-full shadow hover:bg-gray-200 transition"
                >
                  Open Facebook Page
                </a>
              </div>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-[#0A213A] text-white rounded-xl p-6 flex items-start gap-4 shadow-md">
              <MessageCircle size={40} />
              <div>
                <h3 className="text-xl font-semibold">Send Us a Message</h3>
                <p className="text-sm mt-2 opacity-90">
                  Our support volunteers respond quickly to private inbox messages.
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 bg-white text-[#0A213A] font-bold px-6 py-2 rounded-full shadow hover:bg-gray-200 transition"
                >
                  Message Support
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-[#0A213A] text-white text-center py-12 px-6 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold">
            Need Immediate Help?
          </h3>

          <p className="mt-4 text-gray-200 text-lg">
            We are here for you. Contact us on Facebook or use our emergency support page.
          </p>

          <a
            href="/emergency-shelter-in-uk"
            className="inline-block mt-6 bg-white text-[#0A213A] font-bold py-3 px-10 rounded-full shadow hover:bg-gray-200 transition"
          >
            Get Emergency Support
          </a>
        </div>

      </section>
    </div>
  );
}
