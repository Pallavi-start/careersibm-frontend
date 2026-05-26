"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HiringProcess() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main Menu */}
      <button className="flex items-center gap-2 px-5 py-5">
        Hiring Process
        <ChevronDown size={18} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-full w-80 bg-white border  shadow-md z-50">
          <p className="px-5 py-4 hover:bg-gray-100 cursor-pointer">
            Application steps and tips
          </p>

          <p className="px-5 py-4 hover:bg-gray-100 cursor-pointer">
            Be Aware: Recruitment Scams
          </p>

          <p className="px-5 py-4 hover:bg-gray-100 cursor-pointer">
            Applicant data privacy
          </p>
        </div>
      )}
    </div>
  );
}