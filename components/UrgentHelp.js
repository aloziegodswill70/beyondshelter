"use client";
import {
  PhoneCall,
  AlertTriangle,
  Home,
  Shield,
  ArrowRight,
} from "lucide-react";

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
    <section className="mt-14 mb-12">
      {/* HEADER */}
      <div className="bg-urgentRed text-white rounded-3xl p-6 md:p-8 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Urgent Help
        </h2>
        <p className="text-sm md:text-base opacity-95 max-w-2xl">
          If you or someone else is in immediate danger or needs urgent housing,
          use one of the options below.
        </p>
      </div>

      {/* ACTION BUTTONS */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((item, i) => (
          <button
            key={i}
            className={`group flex items-center justify-between p-5 md:p-6 rounded-3xl text-white shadow-md transition hover:scale-[1.01] ${item.color}`}
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-2xl">
                {item.icon}
              </div>

              <div className="text-left">
                <h3 className="text-base md:text-lg font-bold">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm opacity-90">
                  {item.desc}
                </p>
              </div>
            </div>

            <ArrowRight
              size={22}
              className="opacity-80 group-hover:translate-x-1 transition"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
