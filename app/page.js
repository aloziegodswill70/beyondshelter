// File: app/page.js

import Hero from "@/components/Hero";
import HowWeHelp from "@/components/HowWeHelp";
import StoriesOfHope from "@/components/StoriesOfHope";
import ImpactSection from "@/components/ImpactSection";
import UrgentHelp from "@/components/UrgentHelp";
import SupportOurMission from "@/components/SupportOurMission";
import LocationMap from "@/components/LocationMap";
import FloatingCallButton from "@/components/FloatingCallButton";

import Link from "next/link";

/* ================= SEO METADATA ================= */
export const metadata = {
  title: "Beyond Shelter UK | Emergency Housing, Abuse Support & Crisis Help",
  description:
    "Beyond Shelter UK provides emergency housing, domestic abuse support, crisis intervention, counselling and rehabilitation services across the UK.",
  keywords: [
    "Beyond Shelter UK",
    "Emergency housing UK",
    "Domestic abuse support",
    "Homeless help UK",
    "Crisis shelter",
    "Emergency accommodation",
  ],
  openGraph: {
    title: "Beyond Shelter UK",
    description:
      "Providing shelter, safety and hope to vulnerable individuals across the UK.",
    url: "https://beyondshelter.org.uk",
    siteName: "Beyond Shelter UK",
    type: "website",
  },
};

/* ================= HOME PAGE ================= */
export default function HomePage() {
  return (
    <>
      {/* ================= NAVBAR ================= */}

      <main className="pt-24">

        {/* ================= EXISTING SECTIONS (UNCHANGED) ================= */}
        <Hero />
        <HowWeHelp />
        <StoriesOfHope />
        <ImpactSection />
        <UrgentHelp />
        <SupportOurMission />
         <LocationMap />
        <FloatingCallButton />

        {/* =====================================================
            NEW SECTION — QUICK ACCESS LINKS (ADDED BELOW ONLY)
        ===================================================== */}
        <section className="mt-16 mb-20 max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primaryBlue mb-4">
            Explore More Resources
          </h2>

          <p className="text-sm text-primaryBlue/80 mb-8">
            Learn more about our work, how to get help, and how you can support
            Beyond Shelter.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* BLOG 1 */}
            <Link
              href="/blog/beyond-shelter-mission"
              className="app-card hover:shadow-xl transition block"
            >
              <h3 className="text-lg font-semibold text-primaryBlue mb-2">
                What We Do at Beyond Shelter 
              </h3>
              <p className="text-sm text-primaryBlue/80">
                Learn about our mission, services, and how we support vulnerable
                individuals across the Globe.
              </p>
            </Link>

            {/* BLOG 2 */}
            <Link
              href="/emergency-helpline-in-uk"
              className="app-card hover:shadow-xl transition block"
            >
              <h3 className="text-lg font-semibold text-primaryBlue mb-2">
                How to Get Emergency Help 
              </h3>
              <p className="text-sm text-primaryBlue/80">
                Step-by-step guidance on accessing shelter, crisis support,
                housing help, and safety resources.
              </p>
            </Link>

            {/* BLOG 3 */}
            <Link
              href="/domestic-abuse-support-in-uk"
              className="app-card hover:shadow-xl transition block"
            >
              <h3 className="text-lg font-semibold text-primaryBlue mb-2">
                Supporting Survivors of Abuse
              </h3>
              <p className="text-sm text-primaryBlue/80">
                Understanding abuse recovery, emotional support, and how Beyond
                Shelter helps survivors rebuild.
              </p>
            </Link>

            {/* SERVICES PAGE */}
            <Link
              href="/services"
              className="app-card hover:shadow-xl transition block"
            >
              <h3 className="text-lg font-semibold text-primaryBlue mb-2">
                Our Services
              </h3>
              <p className="text-sm text-primaryBlue/80">
                Explore emergency accommodation, helplines, legal guidance and
                community outreach services.
              </p>
            </Link>

            {/* VOLUNTEER PAGE */}
            <Link
              href="/volunteer-for-beyondshelter"
              className="app-card hover:shadow-xl transition block"
            >
              <h3 className="text-lg font-semibold text-primaryBlue mb-2">
                Volunteer With Us
              </h3>
              <p className="text-sm text-primaryBlue/80">
                Join our volunteers and help provide shelter, safety and hope to
                those in need.
              </p>
            </Link>

            {/* CONTACT PAGE */}
            <Link
              href="/contacts"
              className="app-card hover:shadow-xl transition block"
            >
              <h3 className="text-lg font-semibold text-primaryBlue mb-2">
                Contact Beyond Shelter
              </h3>
              <p className="text-sm text-primaryBlue/80">
                Reach out for support, enquiries, partnerships or urgent help.
              </p>
            </Link>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
    </>
  );
}
