'use client'
import { Home, HeartHandshake, HelpingHand, Users, Menu } from "lucide-react"

export default function BottomNav() {
  return (
    <div className="
      fixed bottom-4 left-1/2 -translate-x-1/2 
      bg-white shadow-2xl rounded-full 
      px-6 py-3 flex justify-between items-center
      w-[90%] max-w-md
      border border-gray-100
      z-50
    ">
      
      <button className="flex flex-col items-center text-primaryBlue">
        <Home size={22} />
        <span className="text-[10px]">Home</span>
      </button>

      <button className="flex flex-col items-center text-primaryBlue">
        <HeartHandshake size={22} />
        <span className="text-[10px]">Get Help</span>
      </button>

      <button className="flex flex-col items-center text-urgentRed">
        <HelpingHand size={22} />
        <span className="text-[10px]">Donate</span>
      </button>

      <button className="flex flex-col items-center text-shelterGreen">
        <Users size={22} />
        <span className="text-[10px]">Volunteer</span>
      </button>

      <button className="flex flex-col items-center text-primaryBlue">
        <Menu size={22} />
        <span className="text-[10px]">More</span>
      </button>

    </div>
  );
}
