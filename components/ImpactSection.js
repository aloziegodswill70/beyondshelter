"use client";
import { Home, HeartHandshake, Users, Utensils } from "lucide-react";

export default function ImpactSection() {
  const stats = [
    {
      value: "4,200+",
      label: "People Sheltered",
      icon: <Home size={28} />,
      color: "bg-primaryBlue",
    },
    {
      value: "9,800+",
      label: "Meals Served",
      icon: <Utensils size={28} />,
      color: "bg-shelterGreen",
    },
    {
      value: "1,300+",
      label: "Abuse Survivors Supported",
      icon: <HeartHandshake size={28} />,
      color: "bg-urgentRed",
    },
    {
      value: "550+",
      label: "Active Volunteers",
      icon: <Users size={28} />,
      color: "bg-clay",
    },
  ];

  return (
    <section className="mt-14 mb-16">
      <h2 className="text-xl font-bold text-primaryBlue mb-2">Our Impact</h2>
      <p className="text-sm text-primaryBlue/80 mb-6">
        Every day, Beyond Shelter helps people across the UK find safety,
        support and hope.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`rounded-3xl text-white p-5 shadow-lg flex flex-col items-start gap-3 ${item.color}`}
          >
            <div className="bg-white/20 p-2 rounded-xl">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold leading-none">{item.value}</h3>
            <p className="text-xs opacity-90">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
