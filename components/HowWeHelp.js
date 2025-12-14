"use client";
import { Home, Heart, ShieldCheck, Soup, Users } from "lucide-react";

export default function HowWeHelp() {
  const services = [
    {
      title: "Emergency Shelter",
      desc: "Safe, warm temporary housing for individuals escaping homelessness or abuse.",
      icon: <Home className="w-6 h-6 md:w-7 md:h-7" />,
      bg: "bg-primaryBlue",
    },
    {
      title: "Abuse Support",
      desc: "Confidential help for victims of domestic abuse, trauma, or violence.",
      icon: <ShieldCheck className="w-6 h-6 md:w-7 md:h-7" />,
      bg: "bg-urgentRed",
    },
    {
      title: "Meals & Essentials",
      desc: "Daily meals, clothing, hygiene kits, and other essential supplies.",
      icon: <Soup className="w-6 h-6 md:w-7 md:h-7" />,
      bg: "bg-shelterGreen",
    },
    {
      title: "Counselling",
      desc: "Emotional support, mental health care, and recovery guidance.",
      icon: <Heart className="w-6 h-6 md:w-7 md:h-7" />,
      bg: "bg-clay",
    },
    {
      title: "Community Support",
      desc: "Group therapy, social integration and long-term reintegration help.",
      icon: <Users className="w-6 h-6 md:w-7 md:h-7" />,
      bg: "bg-primaryBlue",
    },
  ];

  return (
    <section className="mt-12 px-4 md:px-0">
      <h2 className="text-xl md:text-2xl font-bold text-primaryBlue mb-6 text-center md:text-left">
        How We Help
      </h2>

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
      ">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              app-card
              shadow-md
              flex
              gap-4
              items-start
              p-5
              hover:shadow-xl
              transition
              duration-300
            "
          >
            <div
              className={`
                ${service.bg}
                text-white
                p-4
                rounded-2xl
                flex
                items-center
                justify-center
                shrink-0
              `}
            >
              {service.icon}
            </div>

            <div>
              <h3 className="font-semibold text-primaryBlue text-base md:text-lg">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-primaryBlue/80 mt-1 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
