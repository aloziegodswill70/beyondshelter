import Link from "next/link";

export const metadata = {
  title: "Get Emergency and Urgent Shelter Help | Beyond Shelter UK",
  description:
    "Learn how to get emergency and urgent shelter help in the UK. Explore support pages for homelessness, abuse survivors, fathers in crisis, mental health emergencies, and more.",
};

export default function GetEmergencyAndUrgentShelterHelp() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* ===== HERO ===== */}
      <div className="w-full bg-[#0A213A] py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Get Emergency and Urgent Shelter Help in the UK
        </h1>
        <p className="mt-4 text-gray-200 max-w-3xl mx-auto text-lg">
          Beyond Shelter UK provides immediate guidance, emergency resources,
          and safe pathways for individuals facing homelessness, abuse,
          crisis displacement, or urgent danger.
        </p>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

        <p className="text-lg leading-relaxed text-gray-700">
          If you or someone you know is facing an emergency situation,
          homelessness, abuse, or emotional crisis, help is available.
          Beyond Shelter UK connects vulnerable individuals with urgent
          support, shelter guidance, and safety resources across the UK.
        </p>

        <h2 className="text-2xl font-bold text-[#0A213A]">
          Emergency & Urgent Help Pages
        </h2>

        <p className="text-gray-700">
          Below is a complete list of our emergency, shelter, and crisis
          support pages. Click any link to access immediate guidance.
        </p>

        {/* ===== LINKS LIST ===== */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#0A213A] font-medium">

          <li><Link href="/need-help" className="hover:underline">I Need Help</Link></li>
          <li><Link href="/urgent-help" className="hover:underline">Urgent Help</Link></li>
          <li><Link href="/emergency" className="hover:underline">Emergency Support</Link></li>
          <li><Link href="/emergency-help" className="hover:underline">Emergency Help</Link></li>

          <li><Link href="/gethelp" className="hover:underline">Get Help Now</Link></li>
          <li><Link href="/shelter" className="hover:underline">Shelter Assistance</Link></li>
          <li><Link href="/emergency-shelter-in-uk" className="hover:underline">Emergency Shelter in the UK</Link></li>
          <li><Link href="/how-to-get-help-for-shelter" className="hover:underline">How to Get Help for Shelter</Link></li>

          <li><Link href="/ten-ways-to-get-shelter" className="hover:underline">Ten Ways to Get Shelter</Link></li>
          <li><Link href="/housing-advice-in-uk" className="hover:underline">Housing Advice in the UK</Link></li>

          <li><Link href="/domestic-abuse-support-in-uk" className="hover:underline">Domestic Abuse Support</Link></li>
          <li><Link href="/sexualabuse" className="hover:underline">Sexual Abuse Help</Link></li>

          <li><Link href="/mental-health-support" className="hover:underline">Mental Health Support</Link></li>
          <li><Link href="/how-to-get-out-of-suicide" className="hover:underline">How to Get Out of Suicide Crisis</Link></li>

          <li><Link href="/fatherswhoneedhelp" className="hover:underline">Fathers Who Need Help</Link></li>
          <li><Link href="/fathers-who-need-help" className="hover:underline">Support for Fathers in Crisis</Link></li>

          <li><Link href="/morehelp" className="hover:underline">More Help & Resources</Link></li>
          <li><Link href="/legal-support" className="hover:underline">Legal Support</Link></li>

          <li><Link href="/emergency-helpline-in-uk" className="hover:underline">Emergency Helplines UK</Link></li>
          <li><Link href="/organizations-that-can-help-you-with-shelter-in-uk" className="hover:underline">
            Organisations That Can Help With Shelter
          </Link></li>

          <li><Link href="/faq" className="hover:underline">Frequently Asked Questions</Link></li>
          <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
          <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>

        </ul>

        <h2 className="text-2xl font-bold text-[#0A213A]">
          You Are Not Alone
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Whether you are facing homelessness, abuse, mental health distress,
          or sudden displacement, Beyond Shelter UK exists to help you find
          safety and stability. Reach out immediately if you are in danger
          or unsure of your next step.
        </p>

        {/* ===== CTA ===== */}
        <div className="bg-[#0A213A] text-white text-center py-12 px-6 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold">
            Need Emergency Help Right Now?
          </h3>
          <p className="mt-4 text-gray-200 text-lg">
            If you are at risk or unsafe, do not wait. Help is available.
          </p>
          <Link
            href="/need-help"
            className="inline-block mt-6 bg-white text-[#0A213A] font-bold py-3 px-10 rounded-full hover:bg-gray-200 transition"
          >
            Get Help Now
          </Link>
        </div>

      </div>
    </section>
  );
}
