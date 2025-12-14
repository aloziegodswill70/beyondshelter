// app/bbc-news-uk/page.js
export const metadata = {
  title: "BBC News UK | Beyond Shelter UK",
  description:
    "BBC News UK updates and highlights related to homelessness, housing, domestic abuse and social welfare across the United Kingdom — curated by Beyond Shelter UK.",
};

export default function BBCNewsUKPage() {
  return (
    <section className="pt-28 pb-16 px-6 max-w-6xl mx-auto text-bs_navy">

      {/* PAGE TITLE */}
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-bs_navy">
          BBC News UK
        </h1>
        <p className="mt-2 text-sm text-bs_navy/70 max-w-3xl">
          Latest coverage and summaries from BBC News that affect homelessness,
          housing policy, domestic abuse response and social welfare in the United Kingdom.
          We curate the most relevant national developments to inform our work and the communities we serve.
        </p>
      </header>

      {/* HIGHLIGHTS */}
      <div className="app-card mb-6">
        <h2 className="text-2xl font-semibold text-bs_blue mb-3">Top UK Headlines Impacting Our Work</h2>

        <ul className="list-disc pl-5 space-y-2 text-bs_navy/80">
          <li>Rising rental and housing costs across major UK cities and the pressure on low-income households.</li>
          <li>Government policy updates related to homelessness prevention and housing assistance.</li>
          <li>Cost-of-living changes affecting access to food, utilities and basic needs.</li>
          <li>Reports on domestic abuse, refuge availability and survivor protection measures.</li>
          <li>Local council funding constraints and emergency accommodation shortages.</li>
        </ul>
      </div>

      {/* WHY IT MATTERS */}
      <div className="app-card mb-6">
        <h2 className="text-2xl font-semibold text-bs_blue mb-3">Why BBC Coverage Matters</h2>

        <p className="text-bs_navy/80 leading-relaxed">
          BBC News is a leading national source that shapes public understanding and policy debate.
          By monitoring national reporting, we can:
        </p>

        <ol className="mt-4 list-decimal pl-5 space-y-2 text-bs_navy/80">
          <li>Align our advocacy with current policy debates and funding priorities.</li>
          <li>Adapt our frontline services to immediate community needs revealed by reporting.</li>
          <li>Share evidence-based updates with partners, volunteers and those we support.</li>
        </ol>
      </div>

      {/* ACTIONS */}
      <div className="app-card mb-6">
        <h2 className="text-2xl font-semibold text-bs_blue mb-3">How You Can Stay Informed & Help</h2>

        <div className="grid gap-4">
          <div className="bg-[#F1EFEA] p-4 rounded-2xl">
            <h3 className="font-semibold text-bs_navy">Subscribe</h3>
            <p className="text-sm text-bs_navy/75 mt-1">
              Subscribe to our newsletter to receive curated news summaries and urgent updates.
            </p>
          </div>

          <div className="bg-[#F1EFEA] p-4 rounded-2xl">
            <h3 className="font-semibold text-bs_navy">Share Reliable Information</h3>
            <p className="text-sm text-bs_navy/75 mt-1">
              When you see BBC investigations or reporting that highlights a need, share it with local groups and councils.
            </p>
          </div>

          <div className="bg-[#F1EFEA] p-4 rounded-2xl">
            <h3 className="font-semibold text-bs_navy">Support Our Campaigns</h3>
            <p className="text-sm text-bs_navy/75 mt-1">
              Help amplify calls for policy change, funding for shelters, and better emergency services by donating or volunteering.
            </p>
          </div>
        </div>
      </div>

      {/* RESOURCES */}
      <div className="app-card mb-6">
        <h2 className="text-2xl font-semibold text-bs_blue mb-3">Resources & Further Reading</h2>

        <p className="text-bs_navy/80 mb-3">
          Below are the types of BBC articles and resources we commonly review:
        </p>

        <ul className="list-disc pl-5 text-bs_navy/80 space-y-2">
          <li>Investigative features on housing and social policy</li>
          <li>Regional reports on council services and emergency housing</li>
          <li>Interviews with survivors and frontline workers</li>
          <li>Analysis pieces on welfare reform and social care funding</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="app-card text-center">
        <h3 className="text-xl font-semibold text-bs_blue mb-2">Keep Informed. Get Involved.</h3>
        <p className="text-bs_navy/80 mb-4">
          Subscribe to our newsletter or follow us on social media for timely updates and opportunities to help.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/subscribe"
            className="inline-block px-5 py-3 bg-bs_orange text-white rounded-full font-semibold shadow-md hover:opacity-95 transition"
          >
            Subscribe
          </a>

          <a
            href="/support-us"
            className="inline-block px-5 py-3 bg-bs_blue text-white rounded-full font-semibold shadow-md hover:opacity-95 transition"
          >
            Support Our Work
          </a>
        </div>
      </div>

    </section>
  );
}
