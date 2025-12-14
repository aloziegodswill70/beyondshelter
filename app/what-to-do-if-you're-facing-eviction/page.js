export default function WhatToDoIfYoureFacingEviction() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* ================= HEADER ================= */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          What to Do If You're Facing Eviction
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Practical steps you can take right now if you are at risk of losing your home in the UK.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">

        {/* Intro */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">You Are Not Alone</h2>
          <p className="leading-relaxed">
            Facing eviction can be frightening and overwhelming. In the UK, there are legal
            protections, emergency options, and organisations that can help you keep your home
            or find safe alternatives.
          </p>
        </div>

        {/* Step 1 */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            1. Check Your Eviction Notice Carefully
          </h2>
          <p className="leading-relaxed mb-4">
            Not all eviction notices are valid. The notice must follow the correct legal process
            depending on your tenancy type.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Check the notice type (Section 21, Section 8, or other)</li>
            <li>Confirm dates, notice period, and landlord details</li>
            <li>Do not leave immediately unless ordered by a court</li>
          </ul>
        </div>

        {/* Step 2 */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            2. Contact Your Local Council Immediately
          </h2>
          <p className="leading-relaxed">
            Your local council has a legal duty to help if you are at risk of homelessness.
            Contact them as soon as you receive an eviction notice.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-[#FFF7E0] border border-[#D4AF37] rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            3. Get Free Housing Advice
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Shelter UK:</strong> 0808 800 4444</li>
            <li><strong>Citizens Advice:</strong> Free legal and housing guidance</li>
            <li><strong>Law Centres:</strong> Free legal help in many areas</li>
          </ul>
        </div>

        {/* Step 4 */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            4. Do Not Leave Before a Court Order
          </h2>
          <p className="leading-relaxed">
            In most cases, you cannot be legally evicted without a court order and bailiffs.
            Leaving too early can reduce your chances of receiving emergency housing.
          </p>
        </div>

        {/* Step 5 */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            5. Check Financial & Benefit Support
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Universal Credit housing element</li>
            <li>Discretionary Housing Payments (DHP)</li>
            <li>Emergency welfare assistance</li>
          </ul>
        </div>

        {/* Emergency */}
        <div className="bg-red-100 border border-red-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            If Eviction Is Imminent
          </h2>
          <p className="leading-relaxed">
            If you are about to lose your home within days or hours, contact your local council
            immediately or seek emergency shelter support.
          </p>
        </div>

        {/* BeyondShelter Help */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Can Support You
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Guidance on eviction steps</li>
            <li>Referral to emergency housing services</li>
            <li>Support for vulnerable individuals and families</li>
            <li>Confidential and compassionate help</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Need Immediate Help?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            If eviction is affecting you right now, reach out for help today.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Get Help Now
          </a>
        </div>

      </div>
    </section>
  );
}
