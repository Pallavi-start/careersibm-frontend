"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function LifeAtIBM() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main Menu */}
      <button className="flex items-center gap-2 px-5 py-5 hover:bg-gray-100 border-x border-gray-200">
        Life @ IBM
        <ChevronDown size={18} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-full w-64 bg-white border border-gray-200 shadow-md z-50">
          <Link href="/culture" className="block px-5 py-4 hover:bg-gray-100">
            Culture
          </Link>

          <Link
            href="/careers-blog"
            className="block px-5 py-4 hover:bg-gray-100"
          >
            Careers blog
          </Link>

          <Link
            href="/locations"
            className="block px-5 py-4 hover:bg-gray-100"
          >
            Locations
          </Link>
        </div>
      )}
    </div>
  );
}