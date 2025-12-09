"use client";
import { Home, Heart, ShieldCheck, Soup, Users } from "lucide-react";

export default function HowWeHelp() {
  const services = [
    {
      title: "Emergency Shelter",
      desc: "Safe, warm temporary housing for individuals escaping homelessness or abuse.",
      icon: <Home size={26} />,
      bg: "bg-primaryBlue",
    },
    {
      title: "Abuse Support",
      desc: "Confidential help for victims of domestic abuse, trauma, or violence.",
      icon: <ShieldCheck size={26} />,
      bg: "bg-urgentRed",
    },
    {
      title: "Meals & Essentials",
      desc: "Daily meals, clothing, hygiene kits, and other essential supplies.",
      icon: <Soup size={26} />,
      bg: "bg-shelterGreen",
    },
    {
      title: "Counselling",
      desc: "Emotional support, mental health care, and recovery guidance.",
      icon: <Heart size={26} />,
      bg: "bg-clay",
    },
    {
      title: "Community Support",
      desc: "Group therapy, social integration and long-term reintegration help.",
      icon: <Users size={26} />,
      bg: "bg-primaryBlue",
    },
  ];

  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-primaryBlue mb-4">
        How We Help
      </h2>

      <div className="flex flex-col gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="app-card flex items-start gap-4 shadow-md"
          >
            <div className={`${service.bg} text-white p-4 rounded-2xl`}>
              {service.icon}
            </div>

            <div>
              <h3 className="font-semibold text-primaryBlue text-lg">
                {service.title}
              </h3>
              <p className="text-sm text-primaryBlue/80 mt-1">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
