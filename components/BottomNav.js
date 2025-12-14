'use client'

import Link from "next/link"
import { Home, HeartHandshake, HelpingHand, Users, Menu } from "lucide-react"

export default function BottomNav() {
  return (
    <div
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2
        bg-white shadow-2xl rounded-full
        px-6 py-3 flex justify-between items-center
        w-[92%] max-w-md
        border border-gray-100
        z-50
      "
    >

      <Link href="/" className="flex flex-col items-center text-[#1D3557]">
        <Home size={22} />
        <span className="text-[10px]">Home</span>
      </Link>

      <Link href="/need-help" className="flex flex-col items-center text-[#457B9D]">
        <HeartHandshake size={22} />
        <span className="text-[10px]">Get Help</span>
      </Link>

      <Link href="/donate" className="flex flex-col items-center text-red-600">
        <HelpingHand size={22} />
        <span className="text-[10px]">Donate</span>
      </Link>

      <Link href="/get-involve" className="flex flex-col items-center text-[#2A9D8F]">
        <Users size={22} />
        <span className="text-[10px]">Volunteer</span>
      </Link>

      <Link href="/menu" className="flex flex-col items-center text-[#1D3557]">
        <Menu size={22} />
        <span className="text-[10px]">More</span>
      </Link>

    </div>
  )
}
