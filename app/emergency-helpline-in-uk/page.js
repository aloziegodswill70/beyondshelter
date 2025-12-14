// File: app/emergency-helpline-in-uk/page.js

export const metadata = {
  title: "Emergency Helpline in UK | Beyond Shelter UK",
  description:
    "Find emergency support in the UK for homelessness, abuse, crisis situations, and urgent assistance. Beyond Shelter UK is here to help.",
};

export default function EmergencyHelplineInUK() {
  return (
    <div className="min-h-screen bg-white text-bs_navy">

      {/* ================= HERO ================= */}
      <section className="bg-urgentRed text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold">Emergency Helpline in the UK</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
          If you or someone else is in immediate danger, call 0133247923 now.
          This page lists trusted emergency support options available 24/7.
        </p>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">24/7 Emergency Support</h2>

        <p className="text-bs_navy/80 mb-10">
          Whether you are experiencing homelessness, abuse, crisis, or need
          urgent assistance — Beyond Shelter UK provides confidential support
          and guidance.
        </p>

        {/* Helpline Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold">Emergency Support Line</h3>
            <p className="text-bs_navy/70 mt-2">
              Immediate help and crisis response.
            </p>
            <p className="mt-4 text-2xl font-bold text-urgentRed">
              0133247923
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold">Beyond Shelter Helpline</h3>
            <p className="text-bs_navy/70 mt-2">
              Confidential help for individuals in distress.
            </p>
            <p className="mt-4 text-2xl font-bold">0133247923</p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold">Housing & Crisis Support</h3>
            <p className="text-bs_navy/70 mt-2">
              Assistance for emergency accommodation and welfare.
            </p>
            <p className="mt-4 text-2xl font-bold">0133247923</p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold">Emotional & Wellbeing Support</h3>
            <p className="text-bs_navy/70 mt-2">
              Speak to someone who understands your situation.
            </p>
            <p className="mt-4 text-2xl font-bold">0133247923</p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm bg-bs_gold/20">
            <h3 className="text-xl font-bold">Beyond Shelter Office</h3>
            <p className="text-bs_navy/70 mt-2">
              Visit or contact our support office.
            </p>
            <p className="mt-4 font-semibold">
              2 Lamplight way, Swadlincote, DE11 9HA
            </p>
            <p className="mt-2 text-lg font-bold">0133247923</p>
          </div>

        </div>

        {/* Additional Info */}
        <div className="mt-16 p-6 bg-bs_gold/10 border rounded-xl">
          <h3 className="text-2xl font-bold">If You Cannot Speak on the Phone</h3>
          <p className="mt-3 text-bs_navy/75">
            If you are unable to speak freely, try calling and staying silent.
          </p>

          <p className="mt-4 text-bs_navy/75">
            Our team will understand and respond appropriately to keep you safe.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center py-20 bg-bs_navy text-white px-6">
        <h2 className="text-3xl font-bold">Need Immediate Help?</h2>
        <p className="opacity-90 mt-3 max-w-2xl mx-auto">
          Your safety matters. Reach out now and let us support you.
        </p>

        <a
          href="/urgent-help"
          className="mt-8 inline-block bg-bs_gold text-bs_navy font-semibold py-3 px-10 rounded-lg hover:bg-bs_gold/90 transition"
        >
          Visit Urgent Help Page
        </a>
      </section>
    </div>
  );
}
