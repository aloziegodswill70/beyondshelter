export const metadata = {
  title: "Fathers Who Need Help | Beyond Shelter UK",
  description:
    "Support services for fathers facing homelessness, crisis, housing loss, or family challenges in the UK.",
};

export default function FathersWhoNeedHelp() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      <div className="w-full bg-black py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37]">
          Fathers Who Need Help
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <p className="text-gray-700 text-lg">
          Many fathers face homelessness, separation, financial hardship, or
          crisis while trying to support their children. You deserve help too.
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Emergency accommodation support</li>
          <li>Housing advice for single fathers</li>
          <li>Crisis intervention and emotional support</li>
          <li>Referrals to family-focused services</li>
        </ul>

        <a
          href="/need-help"
          className="inline-block mt-6 bg-black text-white py-3 px-8 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Get Help Now
        </a>
      </div>
    </section>
  );
}
