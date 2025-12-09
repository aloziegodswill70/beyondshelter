"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Instagram, Music2 } from "lucide-react"; // TikTok = Music2 icon

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#1D3557] to-[#457B9D] shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          BeyondShelter
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white/90 font-medium">
          <li className="hover:text-white cursor-pointer transition">Home</li>
          <li className="hover:text-white cursor-pointer transition">Services</li>
          <li className="hover:text-white cursor-pointer transition">About</li>
          <li className="hover:text-white cursor-pointer transition">Contact</li>
        </ul>

        {/* Mobile Social Icons */}
        <div className="flex md:hidden gap-4">
          <a href="#" className="text-white hover:text-gray-200 transition">
            <Instagram size={22} />
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition">
            <Music2 size={22} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden ml-3 text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-xl w-full px-6 py-6 rounded-b-2xl animate-slideDown">
          <ul className="flex flex-col gap-6 text-lg text-[#1D3557] font-semibold">
            <li className="hover:text-[#457B9D] cursor-pointer">Home</li>
            <li className="hover:text-[#457B9D] cursor-pointer">Services</li>
            <li className="hover:text-[#457B9D] cursor-pointer">About</li>
            <li className="hover:text-[#457B9D] cursor-pointer">Contact</li>
          </ul>

          {/* Social Icons inside Dropdown */}
          <div className="flex gap-6 mt-6">
            <a href="#" className="text-[#1D3557] hover:text-[#457B9D] transition">
              <Instagram size={26} />
            </a>
            <a href="#" className="text-[#1D3557] hover:text-[#457B9D] transition">
              <Music2 size={26} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
