"use client";
import { PhoneCall, AlertTriangle, Home, Shield, ArrowRight } from "lucide-react";

export default function UrgentHelp() {
  const actions = [
    {
      title: "I Need Emergency Shelter",
      desc: "Find immediate safe housing available near you.",
      icon: <Home size={26} />,
      color: "bg-primaryBlue",
    },
    {
      title: "I Am in Danger",
      desc: "Get help quickly and safely if you are at risk right now.",
      icon: <AlertTriangle size={26} />,
      color: "bg-urgentRed",
    },
    {
      title: "Domestic Abuse Support",
      desc: "Confidential help for abuse victims — you are not alone.",
      icon: <Shield size={26} />,
      color: "bg-shelterGreen",
    },
    {
      title: "Call Our Helpline",
      desc: "Speak with someone immediately for free support.",
      icon: <PhoneCall size={26} />,
      color: "bg-clay",
    },
  ];

  return (
    <section className="mt-14 mb-10">
      <div className="bg-urgentRed text-white rounded-3xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-2">Urgent Help</h2>
        <p className="text-sm opacity-95 mb-4">
          If you or someone else is in immediate danger or needs urgent housing,
          use one of the options below.
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        {actions.map((item, i) => (
          <button
            key={i}
            className={`flex items-center justify-between p-5 rounded-3xl text-white shadow-md ${item.color}`}
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-2xl">
                {item.icon}
              </div>

              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm opacity-90">{item.desc}</p>
              </div>
            </div>

            <ArrowRight size={24} className="opacity-80" />
          </button>
        ))}
      </div>
    </section>
  );
}
