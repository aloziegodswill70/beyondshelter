// File: app/domestic-abuse-support-in-uk/page.js
"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Phone, Shield, HeartHandshake, ArrowRight } from "lucide-react";

export default function DomesticAbuseSupportUK() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <div className="bg-bs_blue text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Domestic Abuse Support in UK
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto opacity-90">
          Beyond Shelter UK provides confidential help, emotional support,
          safe accommodation, and practical assistance for anyone experiencing
          domestic abuse anywhere in the United Kingdom.
        </p>
      </div>

      {/* ================= PAGE CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* EMERGENCY BOX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-urgentRed text-white p-6 rounded-xl shadow-xl"
        >
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle size={30} />
            <h2 className="text-2xl font-bold">If You Are in Immediate Danger</h2>
          </div>

          <p className="text-lg">
            Call <span className="font-bold underline">999</span> immediately.
          </p>

          <p className="mt-1 text-lg">
            If you cannot speak, dial 999 and press <strong>55</strong>.
            This will alert the police silently.
          </p>
        </motion.div>

        {/* ABOUT DOMESTIC ABUSE */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold">Domestic Abuse Help Across the UK</h2>

          <p className="text-lg">
            Domestic abuse includes physical violence, verbal abuse, emotional
            manipulation, coercive control, financial abuse, sexual violence,
            and any behaviour that makes you feel scared, unsafe, or powerless.
          </p>

          <p className="text-lg">
            At Beyond Shelter UK, we work across England, Scotland, Wales, and
            Northern Ireland to connect survivors with emergency shelter,
            counselling, legal support, and safety planning.
          </p>
        </motion.section>

        {/* SIGNS OF ABUSE */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="text-3xl font-bold mb-4">Signs You May Be Experiencing Abuse</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Your partner isolates you from family or friends.",
              "You’re constantly monitored, controlled or threatened.",
              "You are scared of your partner's reactions.",
              "Your finances, phone or movement are controlled.",
              "You experience verbal insults or emotional humiliation.",
              "You feel trapped, afraid or powerless in your home.",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-5 rounded-xl shadow-md text-lg"
              >
                • {item}
              </div>
            ))}
          </div>
        </motion.section>

        {/* CALL TO ACTION – SUPPORT OPTIONS */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">How We Can Support You</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Safe Shelter */}
            <div className="p-6 bg-bs_blue text-white rounded-xl shadow-lg">
              <Shield size={40} className="mb-3" />
              <h3 className="text-xl font-semibold mb-2">Safe Accommodation</h3>
              <p className="opacity-90">
                We help survivors access immediate emergency shelter with
                privacy, safety, and confidential protection.
              </p>
            </div>

            {/* Emotional Support */}
            <div className="p-6 bg-shelterGreen text-white rounded-xl shadow-lg">
              <HeartHandshake size={40} className="mb-3" />
              <h3 className="text-xl font-semibold mb-2">Emotional Support</h3>
              <p className="opacity-90">
                Speak with trained support workers who understand trauma,
                healing, fear, and survival.
              </p>
            </div>

            {/* Helpline */}
            <div className="p-6 bg-clay text-white rounded-xl shadow-lg">
              <Phone size={40} className="mb-3" />
              <h3 className="text-xl font-semibold mb-2">24/7 Confidential Helpline</h3>
              <p className="opacity-90">
                Reach out anytime for advice, safety guidance, or emergency
                action planning.
              </p>
            </div>
          </div>
        </motion.section>

        {/* SAFETY PLAN */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4">How to Create a Safety Plan</h2>

          <ul className="space-y-3 text-lg bg-gray-50 p-6 rounded-xl shadow-md">
            <li>• Keep important documents somewhere safe or hidden.</li>
            <li>• Know where you can go in an emergency.</li>
            <li>• Tell someone you trust what's happening.</li>
            <li>• Plan how to leave the home quickly if needed.</li>
            <li>• Memorise emergency numbers.</li>
          </ul>
        </motion.section>

        {/* CONTACT CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">You Are Not Alone</h2>

          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We will support you confidentially, without judgement, and with
            complete respect for your safety and privacy.
          </p>

          <a
            href="/contacts"
            className="inline-flex items-center gap-2 bg-bs_blue text-white py-3 px-6 text-lg rounded-lg shadow-lg hover:bg-bs_navy transition"
          >
            Get Help Now <ArrowRight size={20} />
          </a>
        </motion.section>
      </div>
    </div>
  );
}
