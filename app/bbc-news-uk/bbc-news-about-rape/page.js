// app/bbc-news-about-rape/page.js

export const metadata = {
  title: "BBC News – Reports About Rape, Abuse & Safeguarding | Beyond Shelter UK",
  description:
    "A curated review of BBC News coverage related to rape, sexual violence, safeguarding, survivor protection and support resources across the United Kingdom.",
};

export default function BBCNewsAboutRapePage() {
  return (
    <section className="pt-28 pb-16 px-6 max-w-6xl mx-auto text-bs_navy">

      {/* PAGE TITLE */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-bs_navy">
          BBC News – Reports About Rape & Sexual Violence
        </h1>

        <p className="mt-3 text-sm text-bs_navy/70 max-w-3xl">
          This page provides a responsible and sensitive summary of issues highlighted by 
          BBC News regarding rape, sexual violence, safeguarding failures, survivor support, 
          and criminal justice developments across the UK. 
          Beyond Shelter UK is committed to raising awareness and supporting survivors 
          through safe shelter, counselling, and advocacy.
        </p>
      </header>

      {/* IMPACT OVERVIEW */}
      <div className="app-card mb-6">
        <h2 className="text-2xl font-semibold text-bs_blue mb-3">
          Key Themes Reported by BBC News
        </h2>

        <ul className="list-disc pl-5 space-y-2 text-bs_navy/80">
          <li>Delays in police investigations and challenges in achieving justice.</li>
          <li>Reports on institutional failures in schools, hospitals, and public services.</li>
          <li>Increased public awareness of consent and safeguarding laws.</li>
          <li>Support gaps for survivors seeking emergency shelter or legal assistance.</li>
          <li>Community-level initiatives aimed at reducing gender-based violence.</li>
        </ul>
      </div>

      {/* WHY IT MATTERS */}
      <div className="app-card mb-6">
        <h2 className="text-2xl font-semibold text-bs_blue mb-3">
          Why Monitoring BBC Coverage Matters
        </h2>

        <p className="text-bs_navy/80 leading-relaxed">
          BBC News plays a critical role in shaping national understanding of sexual violence 
          and holding institutions accountable. By following their reporting, Beyond Shelter UK can:
        </p>

        <ol className="mt-4 list-decimal pl-5 space-y-2 text-bs_navy/80">
          <li>Advocate for stronger safeguarding policies and survivor protection laws.</li>
          <li>Align our support services with real needs highlighted across the country.</li>
          <li>Raise public awareness about early intervention and reporting pathways.</li>
          <li>Collaborate with local authorities, charities, and trauma specialists.</li>
        </ol>
      </div>

      {/* SUPPORT FOR SURVIVORS */}
      <div className="app-card mb-6">
        <h2 className="text-2xl font-semibold text-bs_blue mb-3">
          Support for Survivors of Sexual Violence
        </h2>

        <p className="text-bs_navy/80">
          Beyond Shelter UK provides confidential, trauma-informed support for survivors. 
          We also signpost people to national and local services including:
        </p>

        <div className="mt-4 grid gap-4">

          <div className="bg-[#F1EFEA] p-4 rounded-2xl">
            <h3 className="font-semibold text-bs_navy">NHS Sexual Assault Referral Centres (SARCs)</h3>
            <p className="text-sm text-bs_navy/75 mt-1">
              Free medical care, forensic services and emotional support.
            </p>
          </div>

          <div className="bg-[#F1EFEA] p-4 rounded-2xl">
            <h3 className="font-semibold text-bs_navy">Rape Crisis England & Wales</h3>
            <p className="text-sm text-bs_navy/75 mt-1">
              Specialist helplines, counselling, and long-term support.
            </p>
          </div>

          <div className="bg-[#F1EFEA] p-4 rounded-2xl">
            <h3 className="font-semibold text-bs_navy">Police & Legal Support</h3>
            <p className="text-sm text-bs_navy/75 mt-1">
              Information on reporting options, rights, and victim support advocates.
            </p>
          </div>

        </div>
      </div>

      {/* EDUCATION & AWARENESS */}
      <div className="app-card mb-6">
        <h2 className="text-2xl font-semibold text-bs_blue mb-3">
          Education, Prevention & Public Awareness
        </h2>

        <p className="text-bs_navy/80">
          BBC News frequently highlights the need for early education on consent, boundaries, 
          online safety, and community awareness. Beyond Shelter UK participates in prevention 
          campaigns such as:
        </p>

        <ul className="list-disc pl-5 mt-3 text-bs_navy/80 space-y-2">
          <li>Consent and healthy relationships workshops</li>
          <li>Domestic abuse awareness programmes</li>
          <li>Youth safeguarding and community outreach</li>
          <li>Partnerships with schools, universities and councils</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="app-card text-center">
        <h3 className="text-xl font-semibold text-bs_blue mb-2">You Are Not Alone</h3>
        <p className="text-bs_navy/80 mb-4">
          If you or someone you know needs support, reach out immediately. 
          Confidential help is available 24/7.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/support-our-mission"
            className="inline-block px-5 py-3 bg-bs_orange text-white rounded-full font-semibold shadow-md hover:opacity-95 transition"
          >
            Support Our Work
          </a>
          <a
            href="/contact"
            className="inline-block px-5 py-3 bg-bs_blue text-white rounded-full font-semibold shadow-md hover:opacity-95 transition"
          >
            Contact Us
          </a>
        </div>
      </div>

    </section>
  );
}
