import { Home, Shield, Users, Phone, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "10 Ways to Get Shelter in the UK | Beyond Shelter UK",
  description:
    "Discover ten practical ways to get emergency or temporary shelter in the UK. Beyond Shelter UK provides guidance, support, and referrals for people in crisis.",
};

export default function TenWaysToGetShelter() {
  const ways = [
    {
      title: "Contact Local Councils",
      text:
        "UK local councils have a legal duty to help people who are homeless or at risk of homelessness. Contact your council’s housing department immediately.",
    },
    {
      title: "Emergency Shelters & Night Shelters",
      text:
        "Many charities and faith organisations operate emergency shelters offering overnight accommodation, meals, and basic care.",
    },
    {
      title: "Domestic Abuse Refuges",
      text:
        "If you are fleeing domestic abuse, confidential refuges provide safe housing and protection for you and your children.",
    },
    {
      title: "Charitable Housing Organisations",
      text:
        "Nonprofits and housing charities can help place individuals into temporary accommodation or supported housing programs.",
    },
    {
      title: "Crisis Helplines",
      text:
        "Calling a homelessness or crisis helpline can quickly connect you to emergency accommodation and local support services.",
    },
    {
      title: "Hostels & Supported Housing",
      text:
        "Short-term hostels offer shelter while longer-term housing solutions are arranged, especially for young people and vulnerable adults.",
    },
    {
      title: "Faith & Community Centres",
      text:
        "Churches, mosques, and community centres often provide temporary shelter or can refer you to trusted housing partners.",
    },
    {
      title: "Friends or Trusted Contacts",
      text:
        "Staying temporarily with trusted friends or family can provide immediate safety while seeking longer-term housing.",
    },
    {
      title: "Online Shelter Directories",
      text:
        "Trusted online platforms list verified shelters, emergency housing services, and crisis accommodation across the UK.",
    },
    {
      title: "Beyond Shelter UK Support",
      text:
        "Beyond Shelter UK offers confidential guidance, referrals, and crisis support to help you access safe shelter quickly.",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* ===== HERO ===== */}
      <div className="bg-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37]">
          Ten Ways to Get Shelter in the UK
        </h1>
        <p className="mt-4 text-gray-200 max-w-3xl mx-auto">
          If you are homeless or facing housing crisis, these steps can help you
          find immediate safety and support.
        </p>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        {ways.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-black mb-2">
              {index + 1}. {item.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        ))}

        {/* ===== CTA ===== */}
        <div className="mt-12 bg-[#0A213A] text-white text-center py-12 px-6 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold">
            Need Immediate Shelter Assistance?
          </h3>
          <p className="mt-4 text-gray-200 text-lg">
            Beyond Shelter UK is here to guide you confidentially and urgently.
          </p>

          <a
            href="/need-help"
            className="inline-block mt-6 bg-white text-[#0A213A] font-bold py-3 px-10 rounded-full shadow hover:bg-gray-200 transition"
          >
            Get Help Now
          </a>
        </div>
      </div>
    </section>
  );
}
