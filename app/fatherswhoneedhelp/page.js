import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Fathers Who Need Help | Beyond Shelter UK",
  description:
    "Emergency respite, accommodation and advocacy support for fathers in crisis across the UK.",
};

export default function FathersWhoNeedHelp() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* ===== HERO IMAGE ===== */}
      {/* ===== HERO IMAGE ===== */}
        <div className="relative w-full h-[380px] sm:h-[420px] md:h-[520px] lg:h-[600px]">
          <Image
              src="/images/dadhelps.jpg"
              alt="Father in crisis with family"
              fill
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-center"
             />
          </div>


      {/* ===== HEADER TEXT ===== */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-10 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1D3557]">
            Emergency Respite & Advocacy Support for Fathers
          </h1>

          <p className="mt-2 text-lg italic text-gray-600">
            Temporary Accommodation & Support for Dads in Crisis
          </p>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-5xl mx-auto px-6 pb-16 space-y-8">

        <p className="text-gray-700 leading-relaxed">
          At <strong>Beyond Shelter UK CIC</strong>, we recognise that when
          allegations of domestic abuse arise, fathers are often required to
          leave the family home as part of safeguarding or police conditions.
          Yet, there are <strong>very few services</strong> offering safe,
          temporary accommodation or advocacy support for fathers during this
          crisis period.
        </p>

        <p className="font-semibold text-gray-800">
          We believe in child-focused, non-judgmental intervention that
          prioritises safety, fairness, and reintegration wherever possible.
        </p>

        {/* ===== SERVICES LIST ===== */}
        <div className="bg-gray-50 rounded-xl border divide-y">

          <ServiceItem text="Emergency accommodation for fathers asked to leave the family home as part of a safeguarding plan" />
          <ServiceItem text="Immediate placement in a safe, confidential environment for 1–3 nights" />
          <ServiceItem text="Guidance and advocacy with social services" />
          <ServiceItem text="Help understanding parental rights & child contact" />
          <ServiceItem text="Signposting to legal, mental health & support services" />
          <ServiceItem text="Liaison with social workers to support safeguarding plans" />

        </div>

        {/* ===== CTA ===== */}
        <div className="bg-[#1D3557] text-white rounded-xl p-8 text-center space-y-4">
          <p className="text-lg">
            If you're a father in need of urgent help, or a professional looking
            to make a referral, please contact us:
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              href="/refer-someone"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1D3557] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition"
            >
              Make a Referral
            </Link>

            <a
              href="tel:01332479423"
              className="inline-flex items-center justify-center gap-2 bg-[#E63946] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-red-600 transition"
            >
              Call 01332 479423
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== SMALL HELPER COMPONENT ===== */
function ServiceItem({ text }) {
  return (
    <div className="flex items-start gap-4 p-5">
      <span className="text-[#457B9D] text-xl">✔</span>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}
