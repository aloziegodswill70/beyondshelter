"use client";
import { Home, HeartHandshake, Users, Utensils } from "lucide-react";

export default function ImpactSection() {
  const stats = [
    {
      value: "4,200+",
      label: "People Sheltered",
      icon: <Home className="w-6 h-6 md:w-7 md:h-7" />,
      color: "bg-primaryBlue",
    },
    {
      value: "9,800+",
      label: "Meals Served",
      icon: <Utensils className="w-6 h-6 md:w-7 md:h-7" />,
      color: "bg-shelterGreen",
    },
    {
      value: "1,300+",
      label: "Abuse Survivors Supported",
      icon: <HeartHandshake className="w-6 h-6 md:w-7 md:h-7" />,
      color: "bg-urgentRed",
    },
    {
      value: "550+",
      label: "Active Volunteers",
      icon: <Users className="w-6 h-6 md:w-7 md:h-7" />,
      color: "bg-clay",
    },
  ];

  return (
    <section className="mt-16 mb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-primaryBlue mb-2">
          Our Impact
        </h2>

        <p className="text-sm md:text-base text-primaryBlue/80 mb-8 max-w-2xl">
          Every day, Beyond Shelter helps people across the UK find safety,
          support, and renewed hope.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl text-white p-6 shadow-lg flex flex-col gap-4 ${item.color}`}
            >
              <div className="bg-white/20 p-3 rounded-xl w-fit">
                {item.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold leading-none">
                {item.value}
              </h3>

              <p className="text-xs md:text-sm opacity-90">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
