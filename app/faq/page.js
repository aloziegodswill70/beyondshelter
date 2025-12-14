"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      q: "What is Beyond Shelter UK?",
      a: "Beyond Shelter UK is a humanitarian non-profit offering crisis support, safe shelter, emergency help, and advocacy for vulnerable individuals across the United Kingdom."
    },
    {
      q: "Do you provide emergency housing?",
      a: "Yes. We assist individuals experiencing homelessness, domestic abuse, crisis displacement, and those who urgently need temporary or emergency shelter."
    },
    {
      q: "Is Beyond Shelter UK a free service?",
      a: "Yes. Our crisis assistance, consultation, and emotional support services are provided free to those in need."
    },
    {
      q: "How quickly can I receive help?",
      a: "We respond to urgent requests immediately. Non-emergency inquiries are typically handled within 24 hours."
    },
    {
      q: "Can I contact Beyond Shelter anonymously?",
      a: "Absolutely. We respect your privacy, and anonymous communication is allowed for safety reasons."
    },
    {
      q: "Do you help domestic abuse victims?",
      a: "Yes. We offer confidential assistance, safety planning, emotional support, and connections to secure locations and legal resources."
    },
    {
      q: "Do you work with UK authorities?",
      a: "Where necessary and only with consent, we collaborate with local councils, police departments, and support agencies to protect vulnerable individuals."
    },
    {
      q: "How do I get in touch?",
      a: "Visit our Contact page or call our support helpline for immediate assistance."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

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
            Frequently Asked Questions (FAQ)
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-200 text-lg md:text-xl"
          >
            Find answers to the most common questions about our services,
            support options, and urgent assistance in the UK.
          </motion.p>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-5">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-[#0A213A]">
                  {item.q}
                </h3>
                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 text-gray-700"
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#0A213A] text-white text-center py-12 px-6 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold">Still Have Questions?</h3>
          <p className="mt-4 text-gray-200 text-lg">
            Our support team is here to guide you. Reach out today.
          </p>
          <a
            href="/contacts"
            className="inline-block mt-6 bg-white text-[#0A213A] font-bold py-3 px-10 rounded-full shadow hover:bg-gray-200 transition"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}
