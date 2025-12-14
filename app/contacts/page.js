// File: app/contacts/page.js
"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, AlertTriangle } from "lucide-react";

export default function Contacts() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= HEADER ================= */}
      <div className="bg-bs_blue text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Contacts</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto opacity-90">
          Get in touch with Beyond Shelter UK — we are here to help, support,
          and respond to your needs.
        </p>
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* EMERGENCY CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-urgentRed text-white p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle size={28} />
            <h2 className="text-2xl font-bold">Emergency Support</h2>
          </div>
          <p className="text-lg">
            If you or someone you know is in immediate danger, call:
          </p>
          <p className="mt-2 text-xl font-semibold">
            📞 <span className="underline">0133247923</span>
          </p>
          <p className="mt-1 text-lg opacity-90">
            For free confidential support, you can also contact:
            <br />
            <strong>Beyond Shelter Helpline:</strong> 0133247923
          </p>
        </motion.div>

        {/* CONTACT DETAILS SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid md:grid-cols-3 gap-10"
        >
          {/* Phone */}
          <div className="border-l-4 border-bs_blue pl-5">
            <Phone size={30} className="text-bs_blue mb-3" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="mt-2 text-lg">0133247923</p>
          </div>

          {/* Email */}
          <div className="border-l-4 border-bs_blue pl-5">
            <Mail size={30} className="text-bs_blue mb-3" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="mt-2 text-lg">support@beyondshelter.org.uk</p>
          </div>

          {/* Address */}
          <div className="border-l-4 border-bs_blue pl-5">
            <MapPin size={30} className="text-bs_blue mb-3" />
            <h3 className="text-xl font-semibold">Office Address</h3>
            <p className="mt-2 text-lg">
              Beyond Shelter UK<br />
              2 Lamplight Way<br />
              Swadlincote, DE11 9HA
            </p>
          </div>
        </motion.section>

        {/* OPENING HOURS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>

          <div className="bg-gray-100 p-6 rounded-xl shadow-md space-y-2">
            <p className="text-lg">Monday – Friday: <strong>9am – 6pm</strong></p>
            <p className="text-lg">Saturday: <strong>10am – 4pm</strong></p>
            <p className="text-lg text-red-600">Sunday: Closed</p>
          </div>
        </motion.section>

        {/* CONTACT FORM */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold">Send Us a Message</h2>
          <p className="text-lg max-w-2xl">
            You can reach out privately using the form below. Our support team
            will respond as soon as possible.
          </p>

          <form className="space-y-5 bg-gray-50 p-8 rounded-xl shadow-lg">

            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-bs_blue outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-bs_blue outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-bs_blue outline-none"
                placeholder="How can we assist you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-bs_blue text-white py-3 rounded-lg text-lg font-semibold hover:bg-bs_navy transition"
            >
              Send Message
            </button>
          </form>
        </motion.section>
      </div>
    </div>
  );
}
