"use client";
import { useState } from "react";
import s_icon from "../../public/images/letter-s.png"
import Link from "next/link";
import data from "@/data/data"; 
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-light sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        <div className="flex items-center space-x-6">
        <Image
            src={s_icon} // Path to logo image
            alt="Logo"
            width={40}
            height={40}
            className="object-contain my-[10px]"
          />

        
          <nav className="hidden md:flex space-x-8 text-gray-700 text-lg font-semibold">
            {data.navigation.map((nav, index) => (
              <Link
                key={index}
                href={nav.link}
                className="hover:text-black transition-all"
              >
                {nav.section}
              </Link>
            ))}
          </nav>
        </div>

       
        <div className="hidden md:flex items-center space-x-4 text-gray-600 text-lg">
        <span>{data.location}</span>
        
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md p-4">
     {data.navigation.map((nav, index) => (
    <Link key={index} href={nav.link} passHref>
      <a className="block py-2 text-gray-700 hover:text-black">{nav.section}</a>
    </Link>
  ))}
        </nav>
      )}
    </header>
  );
}
