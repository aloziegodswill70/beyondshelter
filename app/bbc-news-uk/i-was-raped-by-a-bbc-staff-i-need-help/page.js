// app/i-was-raped-by-a-bbc-staff-i-need-help/page.js

export const metadata = {
  title: "I Was Harmed by Someone Working in Media – I Need Help | Survivor Support UK",
  description:
    "A safe, confidential guide for anyone who has experienced sexual violence or misconduct by an individual, including someone working in a media or public organisation. Learn how to get help, report safely, and access UK survivor support services.",
};

export default function IWereHarmedPage() {
  return (
    <section className="pt-28 pb-16 px-6 max-w-5xl mx-auto text-bs_navy">

      {/* PAGE TITLE */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          I Was Harmed by Someone Working in Media — I Need Help
        </h1>

        <p className="mt-3 text-sm text-bs_navy/70 max-w-3xl">
          If you have experienced sexual assault, sexual violence, or any form of misconduct 
          from any individual — including someone who works in the media, journalism, broadcasting, 
          or any other professional environment — please know that what happened is not your fault, 
          and you deserve immediate support.
        </p>

        <p className="mt-2 text-sm text-bs_navy/70">
          This page provides safe guidance, survivor resources, and information on how to 
          report harm appropriately in the UK.
        </p>
      </header>

      {/* IMMEDIATE HELP */}
      <div className="app-card mb-6">
        <h2 className="text-2xl font-semibold text-bs_blue mb-2">
          If You Are in Immediate Danger
        </h2>
        <p className="text-bs_navy/80 mb-2">
          Please call <strong>999</strong> right now.
        </p>
        <p className="text-bs_navy/70">
          Emergency responders are trained to support victims of sexual violence with safety,
          confidentiality and care.
        </p>
      </div>

      {/* THIS PAGE’S SAFETY NOTICE */}
      <div className="app-card mb-6 bg-[#FDF4F4]">
        <h2 className="text-xl font-semibold text-bs_blue mb-2">
          Important Information
        </h2>

        <p className="text-bs_navy/80 leading-relaxed">
          This page does not make any claims about any specific individual or organisation.
          Its purpose is to support anyone who feels they have been harmed by a person in a
          position of trust, influence or professional authority — including those who work
          in media, broadcasting, journalism or public institutions.
        </p>

        <p className="text-bs_navy/80 mt-2">
          If you experienced harm, you have the right to seek support and report it safely.
        </p>
      </div>

      {/* SURVIVOR SUPPORT */}
      <div className="app-card mb-6">
        <h2 className="text-2xl font-semibold text-bs_blue mb-2">
          Specialist Support for Survivors of Sexual Violence
        </h2>

        <p className="text-bs_navy/80 mb-4">
          These UK organisations provide confidential, non-judgmental support:
        </p>

        <ul className="space-y-4">
          <li className="bg-[#F1EFEA] p-4 rounded-2xl">
            <strong>Rape Crisis England & Wales</strong>
            <p className="text-sm text-bs_navy/75">
              Emotional support, live chat, and guidance for survivors of all genders.
            </p>
          </li>

          <li className="bg-[#F1EFEA] p-4 rounded-2xl">
            <strong>Women’s Aid</strong>
            <p className="text-sm text-bs_navy/75">
              Domestic and sexual abuse support, refuge spaces, and survivor advocacy.
            </p>
          </li>

          <li className="bg-[#F1EFEA] p-4 rounded-2xl">
            <strong>The Survivors Trust</strong>
            <p className="text-sm text-bs_navy/75">
              Specialist services for survivors of rape, assault and sexual trauma.
            </p>
          </li>

          <li className="bg-[#F1EFEA] p-4 rounded-2xl">
            <strong>SARCs – Sexual Assault Referral Centres</strong>
            <p className="text-sm text-bs_navy/75">
              Free forensic exams, crisis workers, and medical support even without 
              reporting to the police.
            </p>
          </li>
        </ul>
      </div>

      {/* REPORTING OPTIONS */}
      <div className="app-card mb-6">
        <h2 className="text-2xl font-semibold text-bs_blue mb-2">
          Reporting What Happened — Your Options
        </h2>

        <p className="text-bs_navy/80">
          You may choose to:
        </p>

        <ul className="list-disc pl-5 mt-3 text-bs_navy/80 space-y-2">
          <li>Report to the police (999 or 101)</li>
          <li>Contact a SARC for confidential forensic support</li>
          <li>Speak with a solicitor specialising in sexual violence cases</li>
          <li>
            Inform the employer or safeguarding team of the individual involved
            (all UK organisations have formal reporting procedures)
          </li>
          <li>Seek anonymous advice from support services before deciding</li>
        </ul>

        <p className="text-bs_navy/70 mt-4">
          You are in control. You decide what happens next.
        </p>
      </div>

      {/* BEYOND SHELTER SUPPORT */}
      <div className="app-card text-center">
        <h3 className="text-xl font-semibold text-bs_blue mb-2">
          You Are Not Alone — We’re Here to Support You
        </h3>

        <p className="text-bs_navy/80 mb-4">
          Beyond Shelter UK provides guidance, emotional listening, and links to verified
          crisis organisations. We cannot investigate allegations, but we can help you connect
          with people who can protect your safety and rights.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/contact"
            className="inline-block px-5 py-3 bg-bs_blue text-white rounded-full font-semibold shadow-md hover:opacity-95 transition"
          >
            Contact Our Support Team
          </a>

          <a
            href="/urgent-help"
            className="inline-block px-5 py-3 bg-bs_orange text-white rounded-full font-semibold shadow-md hover:opacity-95 transition"
          >
            Get Immediate Help
          </a>
        </div>
      </div>

    </section>
  );
}
