"use client";

import { PhoneCall } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:01332479423"
      aria-label="Call Beyond Shelter UK"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-urgentRed text-white
        shadow-2xl
        hover:scale-105 active:scale-95
        transition-transform
      "
    >
      <PhoneCall size={26} />
    </a>
  );
}
