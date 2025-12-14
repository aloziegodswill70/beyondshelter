"use client";

import { motion } from "framer-motion";
import { Facebook, MessageCircle, Users, Shield } from "lucide-react";

export default function HowYouCanGetHelpFromFacebook() {
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
            How You Can Get Help From Facebook
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-200 text-lg md:text-xl"
          >
            Facebook can be a powerful tool for finding support, contacting organisations, 
            and getting real-time help—especially during emergencies or difficult situations.
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        {/* Overview Section */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#0A213A]">
            Why Facebook Is Useful for Getting Help
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Millions of people in the UK rely on Facebook every day not just for communication,
            but also for quick access to support, community help, and crisis assistance. 
            Facebook allows you to reach verified organisations, message trained volunteers, 
            and join support groups privately and securely.
          </p>
        </div>

        {/* Ways You Can Get Help */}
        <div className="mt-12 space-y-10">

          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-xl p-8 border-l-8 border-blue-600">
            <div className="flex items-start gap-6">
              <Facebook size={50} className="text-blue-600" />
              <div>
                <h3 className="text-2xl font-semibold text-[#0A213A]">
                  1. Connect With Verified Support Pages
                </h3>
                <p className="mt-3 text-gray-700">
                  Organisations such as Beyond Shelter UK, domestic abuse support services, 
                  homelessness charities, and crisis helplines often operate verified Facebook pages.  
                  You can access updates, emergency posts, and important announcements instantly.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-xl p-8 border-l-8 border-green-600">
            <div className="flex items-start gap-6">
              <MessageCircle size={50} className="text-green-600" />
              <div>
                <h3 className="text-2xl font-semibold text-[#0A213A]">
                  2. Message for Private and Confidential Support
                </h3>
                <p className="mt-3 text-gray-700">
                  Facebook Messenger provides a confidential way to reach trained support staff 
                  without needing to call. This can be especially useful for people experiencing 
                  domestic abuse, homelessness, or unsafe situations.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-xl p-8 border-l-8 border-purple-600">
            <div className="flex items-start gap-6">
              <Users size={50} className="text-purple-600" />
              <div>
                <h3 className="text-2xl font-semibold text-[#0A213A]">
                  3. Join Supportive Community Groups
                </h3>
                <p className="mt-3 text-gray-700">
                  Facebook groups allow you to connect with others facing similar challenges—
                  whether it's homelessness, abuse recovery, addiction, financial hardship, 
                  or mental health struggles. Many groups are moderated by professionals.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-xl p-8 border-l-8 border-red-600">
            <div className="flex items-start gap-6">
              <Shield size={50} className="text-red-600" />
              <div>
                <h3 className="text-2xl font-semibold text-[#0A213A]">
                  4. Report Abuse and Unsafe Situations
                </h3>
                <p className="mt-3 text-gray-700">
                  Facebook’s reporting system allows you to flag harmful content, harassment,
                  threats, fake profiles, or dangerous posts. This feature helps protect vulnerable people.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Safety Box */}
        <div className="mt-12 bg-[#E63946] text-white p-6 rounded-xl shadow-lg">
          <p className="text-lg">
            ❗ <strong>If you are in immediate danger, always call 999.</strong>  
            Facebook is helpful—but not a replacement for emergency services.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/beyondshelter-is-on-facebook-get-help"
            className="inline-block bg-[#0A213A] text-white py-3 px-10 rounded-full text-lg font-semibold shadow hover:bg-[#16375b] transition"
          >
            Go to Beyond Shelter on Facebook
          </a>
        </div>

      </section>
    </div>
  );
}
