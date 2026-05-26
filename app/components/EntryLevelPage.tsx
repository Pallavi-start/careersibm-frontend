"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function EntryLevelPage() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main Menu */}
      <button className="flex items-center gap-2 px-5 py-5 hover:bg-gray-100 border-x border-gray-200">
        Entry level
        <ChevronDown size={18} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-full w-72 bg-white border border-gray-200 shadow-md z-50">
          <p className="px-5 py-4 hover:bg-gray-100 cursor-pointer">
            Entry-Level Opportunities
          </p>

          <p className="px-5 py-4 hover:bg-gray-100 cursor-pointer">
            Internships
          </p>
        </div>
      )}
    </div>
  );
}