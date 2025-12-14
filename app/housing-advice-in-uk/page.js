export default function HousingAdviceInUKPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          Housing Advice in the UK
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Practical guidance and support for housing challenges across the United Kingdom.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Intro */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">
            Understanding Your Housing Options
          </h2>
          <p className="leading-relaxed">
            Housing issues can be stressful and confusing, especially during times
            of financial difficulty, family breakdown, or sudden change. Knowing
            your rights and available options can help you make informed decisions
            and stay safe.
          </p>
        </div>

        {/* Emergency */}
        <div className="bg-red-100 border border-red-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            If You Are Facing Immediate Homelessness
          </h2>
          <p>
            If you are in the UK and have nowhere safe to stay tonight, contact your
            local council immediately and request emergency housing support.
          </p>
          <p className="mt-2">
            In an emergency or if you are unsafe, call <strong>999</strong>.
          </p>
        </div>

        {/* Common issues */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Common Housing Issues We See
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Risk of eviction or notice to leave</li>
            <li>Rent arrears or benefit delays</li>
            <li>Unsafe or poor living conditions</li>
            <li>Domestic abuse or family conflict</li>
            <li>No fixed address or temporary accommodation</li>
          </ul>
        </div>

        {/* Advice */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Housing Advice That May Help
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Check your tenancy rights before leaving a property</li>
            <li>Speak to your local council’s housing department</li>
            <li>Apply for housing benefit or Universal Credit housing support</li>
            <li>Seek advice from recognised housing charities</li>
            <li>Do not leave accommodation without professional guidance if possible</li>
          </ul>
        </div>

        {/* UK resources */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Free Housing Support in the UK
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Shelter UK:</strong> Housing advice and legal guidance
            </li>
            <li>
              <strong>Citizens Advice:</strong> Support with benefits and housing rights
            </li>
            <li>
              <strong>Local Council:</strong> Emergency and long-term housing options
            </li>
            <li>
              <strong>Gov.uk:</strong> Official housing and tenancy information
            </li>
          </ul>
        </div>

        {/* BeyondShelter */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Can Help
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Guidance on emergency housing options</li>
            <li>Referrals to trusted housing organisations</li>
            <li>Support during housing crises</li>
            <li>Compassionate, confidential assistance</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Need Housing Support Now?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Housing problems can feel overwhelming, but help is available.
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
