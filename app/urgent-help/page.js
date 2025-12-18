export const metadata = {
  title: "Urgent Help & Emergency Support | Beyond Shelter UK",
  description:
    "Get urgent help, emergency shelter, crisis support, and immediate assistance from Beyond Shelter UK.",
};

export default function UrgentHelpPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <div className="w-full bg-red-900 py-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
          Urgent Help Needed
        </h1>
        <p className="mt-4 text-center text-gray-200 text-lg">
          If you are in danger, homeless tonight, or facing immediate crisis,
          please act now.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-14 space-y-8">
        <p className="text-lg leading-relaxed text-gray-700">
          Beyond Shelter UK provides rapid response support for individuals
          facing homelessness, domestic abuse, displacement, or emergency
          welfare situations.
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Emergency shelter referrals</li>
          <li>Domestic abuse safety support</li>
          <li>Crisis housing guidance</li>
          <li>Confidential emotional support</li>
          <li>Referrals to police or emergency services if required</li>
        </ul>

        {/* EMERGENCY BOX */}
        <div className="bg-black text-white p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#D4AF37]">
            Immediate Danger?
          </h2>
          <p className="mt-3 text-gray-200">
            If your life is at risk or you are in immediate danger, call
            <strong> 999 </strong> right now.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#0A213A] text-white p-10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold">Contact Beyond Shelter UK</h2>
          <p className="mt-4 text-gray-200">
            We respond with urgency, compassion, and confidentiality.
          </p>
          <a
            href="/contacts"
            className="inline-block mt-6 bg-white text-[#0A213A] font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition"
          >
            Contact Support Now
          </a>
        </div>
      </div>
    </section>
  );
}
