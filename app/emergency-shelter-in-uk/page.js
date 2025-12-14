"use client";

import { motion } from "framer-motion";

export default function EmergencyShelterInUk() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* ======= HERO ======= */}
      <section className="bg-[#0A213A] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Emergency Shelter in the UK
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-200"
          >
            If you or someone you know needs immediate safe housing, Beyond Shelter is here to help. 
            We provide urgent support, guidance, and connections to emergency accommodation across the UK.
          </motion.p>
        </div>
      </section>

      {/* ======= CONTENT ======= */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">

        <div>
          <h2 className="text-3xl font-bold text-[#0A213A]">
            What Is Emergency Shelter in the UK?
          </h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            Emergency shelter in the UK refers to short-term safe housing provided to people experiencing homelessness, domestic violence, abuse, or sudden displacement. 
            These services include:
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
            <li>Safe emergency accommodation</li>
            <li>24/7 helplines and crisis intervention</li>
            <li>Support for women, children, and vulnerable adults</li>
            <li>Access to food, hygiene, and medical support</li>
            <li>Temporary housing for people fleeing violence</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#0A213A]">
            How Beyond Shelter Supports You
          </h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            Beyond Shelter works with UK organisations, councils, and crisis teams to help victims find safe places to stay immediately. Whether you are homeless, fleeing domestic abuse, or stranded, we are committed to ensuring your safety and dignity.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
            <li>Connecting you with verified emergency shelters</li>
            <li>Helping you access police-protected safe houses</li>
            <li>Providing emotional and crisis guidance</li>
            <li>Supporting refugees, immigrants, and vulnerable persons</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#0A213A]">
            When Should You Seek Emergency Shelter?
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            You should seek emergency shelter if you are experiencing:
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
            <li>Domestic violence or sexual abuse</li>
            <li>Homelessness or sudden eviction</li>
            <li>Family breakdown or unsafe living conditions</li>
            <li>Being stranded in a city without support</li>
            <li>A crisis affecting your mental or physical safety</li>
          </ul>
        </div>

        {/* ======= CALL TO ACTION ======= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-[#0A213A] text-white py-10 px-6 rounded-2xl"
        >
          <h3 className="text-3xl font-bold">Need Emergency Shelter Now?</h3>
          <p className="mt-4 text-gray-200 text-lg">
            We respond immediately. You are not alone — help is available.
          </p>

          <a
            href="/contacts"
            className="mt-6 inline-block bg-white text-[#0A213A] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            Contact Us Now
          </a>
        </motion.div>

      </section>

    </div>
  );
}
