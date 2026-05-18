"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const [openLogin, setOpenLogin] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const dropdownRef = useRef(null);

  // ✅ click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenLogin(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          IBM Careers
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Jobs</li>
          <li className="cursor-pointer hover:text-blue-600">About</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
        </ul>

        {/* Login Dropdown (Desktop) */}
        <div className="hidden md:block relative" ref={dropdownRef}>

          <button
            onClick={() => setOpenLogin(!openLogin)}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          {/* Animated dropdown */}
          <div
            className={`absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg overflow-hidden transition-all duration-200 origin-top ${
              openLogin ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
            <button
              onClick={() => router.push("employee-login")}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Employee Login
            </button>

            <button
              onClick={() => router.push("/admin/login")}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Admin Login
            </button>
          </div>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">

          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Jobs</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Contact</p>

          <hr />

          <button
            onClick={() => router.push("/login")}
            className="w-full text-left py-2"
          >
            Employee Login
          </button>

          <button
            onClick={() => router.push("")}
            className="w-full text-left py-2"
          >
            Admin Login
          </button>

        </div>
      )}

    </nav>
  );
}