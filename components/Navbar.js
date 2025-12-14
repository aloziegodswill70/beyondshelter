"use client";

import Link from "next/link";
import { Menu, X, Instagram, Music2 } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#1D3557] to-[#457B9D] shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO → HOME */}
        <Link
          href="/"
          className="text-2xl font-bold text-white tracking-wide"
        >
          BeyondShelter
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-white/90 font-medium">
          <li>
            <Link href="/services" className="hover:text-white transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contacts" className="hover:text-white transition">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/need-help"
              className="bg-white text-[#1D3557] px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Get Help
            </Link>
          </li>
        </ul>

        {/* MOBILE SOCIAL ICONS */}
        <div className="flex md:hidden gap-4">
          <a
            href="https://www.instagram.com/beyondshelteruk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://www.tiktok.com/@beyondshelteruk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition"
          >
            <Music2 size={22} />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden ml-3 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white shadow-xl w-full px-6 py-6 rounded-b-3xl">
          <ul className="flex flex-col gap-6 text-lg text-[#1D3557] font-semibold">
            <li>
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="hover:text-[#457B9D]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="hover:text-[#457B9D]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                onClick={() => setOpen(false)}
                className="hover:text-[#457B9D]"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/need-help"
                onClick={() => setOpen(false)}
                className="text-white bg-[#E63946] px-6 py-3 rounded-full text-center"
              >
                Get Help Now
              </Link>
            </li>
          </ul>

          {/* SOCIAL ICONS IN DROPDOWN */}
          <div className="flex gap-6 mt-8">
            <a
              href="https://www.instagram.com/beyondshelteruk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D3557] hover:text-[#457B9D]"
            >
              <Instagram size={26} />
            </a>
            <a
              href="https://www.tiktok.com/@beyondshelteruk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D3557] hover:text-[#457B9D]"
            >
              <Music2 size={26} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
