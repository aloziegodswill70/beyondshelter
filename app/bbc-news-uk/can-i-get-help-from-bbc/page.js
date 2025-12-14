// app/can-i-get-help-from-bbc/page.js

export const metadata = {
  title: "Can I Get Help From BBC? | Understanding BBC Support & Information Services",
  description:
    "Learn whether the BBC provides help, support or emergency assistance. Understand what the BBC can and cannot do, and find the correct UK organisations that offer real support.",
};

export default function CanIGetHelpFromBBC() {
  return (
    <section className="pt-28 pb-16 px-6 max-w-6xl mx-auto text-bs_navy">

      {/* PAGE TITLE */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          Can I Get Help From BBC?
        </h1>

        <p className="mt-3 text-sm text-bs_navy/70 max-w-3xl">
          Many people search online to understand whether the BBC offers direct help, 
          emergency support or safeguarding services. This page explains what the BBC 
          can and cannot assist with, and provides links to real organisations in the UK 
          that offer immediate help for housing, abuse, crisis care and legal protection.
        </p>
      </header>

      {/* WHAT BBC CAN DO */}
      <div className="app-card mb-6">
        <h2 className="text-2xl font-semibold text-bs_blue mb-2">
          What Kind of Help the BBC Provides
        </h2>

        <p className="text-bs_navy/80 mb-3">
          The BBC does **not** provide emergency housing, crisis intervention, police support, 
          or safeguarding services.  
          However, the BBC plays an important role in:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-bs_navy/80">
          <li>Raising awareness about national issues such as homelessness and abuse</li>
          <li>Investigating institutional failures and public safety concerns</li>
          <li>Providing factual information through BBC News and BBC Reality Check</li>
          <li>Highlighting national helplines and charities in some broadcasts</li>
        </ul>
      </div>

      {/* WHAT BBC CANNOT DO */}
      <div className="app-card mb-6">
        <h2 className="text-2xl font-semibold text-bs_blue mb-2">
          What the BBC Cannot Help You With
        </h2>

        <p className="text-bs_navy/80 leading-relaxed">
          The BBC is a public service broadcaster. It does **not** offer:
        </p>

        <ul className="list-disc pl-5 mt-3 text-bs_navy/80 space-y-2">
          <li>Emergency shelter or housing placement</li>
          <li>Crisis intervention or emergency response</li>
          <li>Domestic abuse or rape survivor support</li>
          <li>Financial assistance or welfare support</li>
          <li>Direct legal help or police services</li>
        </ul>

        <p className="text-bs_navy/70 mt-4">
          For real support, UK citizens should contact verified national services listed below.
        </p>
      </div>

      {/* WHERE TO GET REAL HELP */}
      <div className="app-card mb-6">
        <h2 className="text-2xl font-semibold text-bs_blue mb-2">
          Where You Can Actually Get Help in the UK
        </h2>

        <p className="text-bs_navy/80">
          If you need help, here are verified UK services offering real, practical support:
        </p>

        <div className="grid gap-4 mt-4">

          <div className="bg-[#F1EFEA] p-4 rounded-2xl">
            <h3 className="font-semibold">Emergency Services (999)</h3>
            <p className="text-sm text-bs_navy/75 mt-1">
              If you are in immediate danger, call 999 immediately.
            </p>
          </div>

          <div className="bg-[#F1EFEA] p-4 rounded-2xl">
            <h3 className="font-semibold">Shelter UK</h3>
            <p className="text-sm text-bs_navy/75 mt-1">
              Free housing advice and emergency homelessness support.
            </p>
          </div>

          <div className="bg-[#F1EFEA] p-4 rounded-2xl">
            <h3 className="font-semibold">Rape Crisis England & Wales</h3>
            <p className="text-sm text-bs_navy/75 mt-1">
              Specialist emotional support for survivors of sexual violence.
            </p>
          </div>

          <div className="bg-[#F1EFEA] p-4 rounded-2xl">
            <h3 className="font-semibold">Women's Aid</h3>
            <p className="text-sm text-bs_navy/75 mt-1">
              Domestic abuse support, safe accommodation and guidance.
            </p>
          </div>

        </div>
      </div>

      {/* WHY PEOPLE CONFUSE BBC FOR SUPPORT */}
      <div className="app-card mb-6">
        <h2 className="text-2xl font-semibold text-bs_blue mb-2">
          Why People Think the BBC Offers Help
        </h2>

        <p className="text-bs_navy/80">
          Many BBC news reports mention helplines, charity services, domestic abuse resources 
          or safeguarding organisations.  
        </p>

        <p className="text-bs_navy/80 mt-2">
          This sometimes leads people to believe the BBC itself provides the help —  
          but they only **inform**, they do not **intervene**.
        </p>
      </div>

      {/* CONTACT BEYOND SHELTER */}
      <div className="app-card text-center">
        <h3 className="text-xl font-semibold text-bs_blue mb-2">
          Need Support Right Now?
        </h3>

        <p className="text-bs_navy/80 mb-4">
          Beyond Shelter UK offers confidential guidance and links to safe accommodation, 
          safeguarding support, and survivor-focused services.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/contact"
            className="inline-block px-5 py-3 bg-bs_orange text-white rounded-full font-semibold shadow-md hover:opacity-95 transition"
          >
            Contact Beyond Shelter UK
          </a>

          <a
            href="/urgent-help"
            className="inline-block px-5 py-3 bg-bs_blue text-white rounded-full font-semibold shadow-md hover:opacity-95 transition"
          >
            Get Urgent Help
          </a>
        </div>
      </div>

    </section>
  );
}
