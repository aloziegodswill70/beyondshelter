"use client";

import { MapPin } from "lucide-react";

export default function LocationMap() {
  return (
    <section className="mt-16 mb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <MapPin size={26} className="text-primaryBlue" />
          <h2 className="text-2xl font-bold text-primaryBlue">
            Our Location
          </h2>
        </div>

        <p className="text-primaryBlue/80 mb-6">
          Visit or contact Beyond Shelter UK at our registered address.
        </p>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Address */}
          <div className="p-6 md:p-8">
            <h3 className="text-lg font-semibold text-primaryBlue mb-2">
              Office Address
            </h3>
            <p className="text-sm text-primaryBlue/80 leading-relaxed">
              2 Lamplight Way<br />
              Swadlincote<br />
              DE11 9HA<br />
              United Kingdom
            </p>

            <a
              href="https://www.google.com/maps?q=2+Lamplight+Way,+Swadlincote,+DE11+9HA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-urgentRed font-semibold hover:underline"
            >
              View on Google Maps →
            </a>
          </div>

          {/* Map */}
          <div className="w-full h-[300px] md:h-full">
            <iframe
              title="Beyond Shelter UK Location"
              src="https://www.google.com/maps?q=2+Lamplight+Way,+Swadlincote,+DE11+9HA&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
