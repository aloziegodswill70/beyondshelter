// app/annual-report/page.js

export const metadata = {
  title: "Annual Report | Beyond Shelter UK",
  description:
    "View the Beyond Shelter UK Annual Report, including financial transparency, impact highlights, donations, shelter programs, and the lives transformed across the United Kingdom.",
};

export default function AnnualReport() {
  return (
    <section className="pt-28 pb-16 px-6 max-w-5xl mx-auto text-bs_navy">
      {/* PAGE HEADER */}
      <h1 className="text-3xl md:text-4xl font-bold text-bs_red mb-4">
        Annual Report
      </h1>

      <p className="text-bs_navy/70 text-lg max-w-3xl leading-relaxed">
        At Beyond Shelter UK, transparency and accountability are at the heart of our mission.
        Each year we publish our Annual Report detailing our financial records, achievements,
        community impact, programs, and how your donations are used to help homeless and
        vulnerable individuals across the United Kingdom.
      </p>

      {/* IMPACT SUMMARY */}
      <div className="app-card mt-10">
        <h2 className="text-2xl font-semibold text-bs_blue mb-3">2024 Impact Highlights</h2>

        <ul className="space-y-4 text-bs_navy/80">
          <li>🏠 <strong>4,200+</strong> individuals provided with emergency or long-term shelter</li>
          <li>🛡️ <strong>1,350</strong> domestic abuse survivors placed in safe housing</li>
          <li>📞 <strong>17,800+</strong> helpline calls answered by our crisis team</li>
          <li>🍲 <strong>65,000+</strong> meals served across our shelter network</li>
          <li>💬 <strong>2,900+</strong> people received counselling and emotional support</li>
        </ul>
      </div>

      {/* DONATION USAGE */}
      <div className="app-card mt-8">
        <h2 className="text-2xl font-semibold text-bs_blue mb-3">
          How Your Donations Were Used
        </h2>

        <ul className="space-y-4 text-bs_navy/80">
          <li>60% – Shelter operations, safe houses, beds & emergency accommodation</li>
          <li>20% – Domestic abuse support, crisis intervention & protection services</li>
          <li>10% – Counselling, mental health programs & reintegration support</li>
          <li>7% – Community outreach, awareness campaigns & street support teams</li>
          <li>3% – Administration & compliance (kept minimal through volunteers)</li>
        </ul>
      </div>

      {/* FINANCIAL STATEMENT SUMMARY */}
      <div className="app-card mt-8">
        <h2 className="text-2xl font-semibold text-bs_blue mb-3">
          Financial Summary
        </h2>

        <p className="text-bs_navy/80 leading-relaxed">
          Our financial operations are audited annually and managed with strict
          oversight to ensure transparency. Below is a simplified
          breakdown of the year’s financial activity:
        </p>

        <div className="mt-4 bg-gray-50 rounded-xl p-4 text-sm">
          <p><strong>Total Donations Received:</strong> £3,420,000</p>
          <p><strong>Total Expenditure:</strong> £3,180,000</p>
          <p><strong>Remaining Reserves:</strong> £240,000</p>
        </div>
      </div>

      {/* DOWNLOADABLE PDF SECTION */}
      <div className="app-card mt-8 text-center">
        <h2 className="text-xl font-semibold text-bs_blue mb-2">
          Download Full Annual Report
        </h2>
        <p className="text-bs_navy/70 mb-4">
          Access the complete audited report, including charts, financial details,
          and partner acknowledgements.
        </p>

        <button className="px-6 py-3 bg-bs_red text-white font-semibold rounded-full shadow-md hover:bg-bs_blue transition">
          Download PDF
        </button>
      </div>

      {/* CLOSING MESSAGE */}
      <p className="text-bs_navy/60 mt-12 text-sm leading-relaxed max-w-2xl">
        Thank you for standing with us. Your generosity ensures that vulnerable people
        across the UK find safety, warmth, hope, and a chance to rebuild.
      </p>
    </section>
  );
}
