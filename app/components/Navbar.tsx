"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import InfrastructureDropdown from "./InfrastructureDropdown";
import SupportDropdown from "./SupportDropdown";
import LifeAtIBM from "./LifeAtIBM";
import EntryLevelPage from "./EntryLevelPage";
import HiringProcess from "./HiringProcess"

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="w-full bg-white border-b border-[#e0e0e0]">
      
      {/* TOP NAVBAR */}
      <div className="flex items-center justify-between h-[64px] px-5 md:px-8 border-b border-[#e0e0e0]">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-5 md:gap-10">
          
          {/* MOBILE MENU ICON */}
<button
  onClick={() => setMobileMenu(!mobileMenu)}
  className="md:hidden text-2xl text-[#393939]"
>
  ☰
</button>

          {/* LOGO */}
          <Link href="">
            <Image
  src="/IBM.png"
  alt="IBM"
  width={120}
  height={40}
  className="w-32 h-auto"
  priority
/>
          
          </Link>

      {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center text-[15px] font-normal text-[#393939]">
            
            {/* SOFTWARE */}
            <div className="relative group">
              
              {/* Button */}
              <div className="flex items-center gap-1 cursor-pointer hover:text-black transition h-[60px] px-5 hover:bg-[#f4f4f4]">
                <span>Software</span>
                <ChevronDown size={16} />
              </div>

              {/* BIG DROPDOWN */}
              <div className="absolute top-full left-0 hidden group-hover:flex bg-[#f4f4f4] border border-gray-300 w-[1200px] z-50">
                
                {/* LEFT MENU */}
                <div className="w-[300px] border-r border-gray-300">
                  
                  <ul className="text-[15px]">
                    <li className="bg-gray-300 px-5 py-4 font-medium">
                      Artificial intelligence
                    </li>

                    <li className="px-5 py-4 hover:bg-gray-200 cursor-pointer">
                      Data & analytics
                    </li>

                    <li className="px-5 py-4 hover:bg-gray-200 cursor-pointer">
                      DevOps
                    </li>

                    <li className="px-5 py-4 hover:bg-gray-200 cursor-pointer">
                      Integration
                    </li>

                    <li className="px-5 py-4 hover:bg-gray-200 cursor-pointer">
                      Security
                    </li>

                    <li className="px-5 py-4 hover:bg-gray-200 cursor-pointer">
                      Technology business management
                    </li>
                  </ul>

                  {/* Bottom Button */}
                  <div className="bg-[#0f62fe] text-white px-5 py-4 mt-24 flex items-center justify-between hover:bg-blue-700 cursor-pointer">
                    Explore all products
                    <span className="text-2xl">→</span>
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1 px-10 py-8">
                  
                  {/* Title */}
                  <h2 className="text-5xl font-light text-[#0f62fe] mb-12 flex items-center gap-4">
                    Artificial intelligence
                    <span>→</span>
                  </h2>

                  {/* GRID */}
                  <div className="grid grid-cols-3 gap-12 text-[15px]">
                    
                    {/* COLUMN 1 */}
                    <div className="space-y-10">
                      <div>
                        <h4 className="font-semibold mb-2">
                          AI coding agent
                        </h4>

                        <p className="text-gray-700 leading-7">
                          Bob your AI software development partner
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          Maximo Application Suite
                        </h4>

                        <p className="text-gray-700 leading-7">
                          AI-powered monitoring and predictive maintenance.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          watsonx
                        </h4>

                        <p className="text-gray-700 leading-7">
                          AI and data platform
                        </p>
                      </div>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="space-y-10">
                      <div>
                        <h4 className="font-semibold mb-2">
                          watsonx Orchestrate
                        </h4>

                        <p className="text-gray-700 leading-7">
                          Generative AI automation solution.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          watsonx.data
                        </h4>

                        <p className="text-gray-700 leading-7">
                          Hybrid open data lakehouse for AI analytics.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          watsonx.data integration
                        </h4>

                        <p className="text-gray-700 leading-7">
                          Adaptive data integration platform.
                        </p>
                      </div>
                    </div>

                    {/* COLUMN 3 */}
                    <div className="space-y-10">
                      <div>
                        <h4 className="font-semibold mb-2">
                          watsonx.data intelligence
                        </h4>

                        <p className="text-gray-700 leading-7">
                          Discover and govern data assets.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          watsonx.governance
                        </h4>

                        <p className="text-gray-700 leading-7">
                          Manage and monitor your AI platform.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* INFRASTRUCTURE */}
            <div className="relative group">
              
              <div className="flex items-center gap-1 cursor-pointer hover:text-black transition h-[60px] px-5 hover:bg-[#f4f4f4]">
                <span>Infrastructure</span>
                <ChevronDown size={16} />
              </div>

              <div className="absolute top-full left-0 hidden group-hover:block z-50">
                <InfrastructureDropdown />
              </div>

            </div>

            {/* CONSULTING */}
            <Link
              href="/consulting"
              className="hover:text-black transition h-[60px] flex items-center px-5 hover:bg-[#f4f4f4]"
            >
              Consulting
            </Link>

   <div className="relative group">
  <div className="flex items-center gap-1 h-[60px] px-5 hover:bg-[#f4f4f4] cursor-pointer">
    <span>Support</span>
    <ChevronDown size={16} />
  </div>

  <div className="fixed top-[60px] left-0 w-screen hidden lg:group-hover:block z-50">
    <SupportDropdown />
  </div>
</div>

            {/* THINK */}
            <Link
              href="/"
              className="hover:text-black transition h-[60px] flex items-center px-5 hover:bg-[#f4f4f4]"
            >
              Think
            </Link>

          </div>
        </div>

        {/* RIGHT ICON */}
        <Globe
          size={22}
          className="text-[#393939] cursor-pointer"
        />
      </div>

      {/* MOBILE CAREERS BAR */}
      <div className="md:hidden flex items-center justify-between px-5 h-[64px] border-b border-[#e0e0e0]">
        
        <h2 className="text-[18px] font-semibold text-black">
          IBM Careers
        </h2>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-[#393939] text-xl"
        >
          {mobileMenu ? "⌃" : "⌄"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-b border-[#e0e0e0]">
          
          <div className="flex flex-col text-[16px] text-[#393939]">
            
            <Link
              href="/overview"
              className="px-5 py-5 border-b border-gray-200"
            >
              Overview
            </Link>

            <Link
              href="/life-at-ibm"
              className="px-5 py-5 border-b border-gray-200"
            >
              Life @ IBM
            </Link>

            <Link
              href="/career-areas"
              className="px-5 py-5 border-b border-gray-200"
            >
              Career Areas
            </Link>

            <Link
              href="/entry-level"
              className="px-5 py-5 border-b border-gray-200"
            >
              Entry level
            </Link>

            <Link
              href="/hiring-process"
              className="px-5 py-5 border-b border-gray-200"
            >
              Hiring Process
            </Link>

            <Link
              href="/recruitmentScams"
              className="px-5 py-5 border-b border-gray-200"
            >
              Be aware: recruitment scams
            </Link>

           <Link
  href="/search-jobs"
  className="px-5 py-5 border-b border-gray-200"
>
  Search Jobs
</Link>

            <Link
              href="/connect"
              className="px-5 py-5 border-b border-gray-200 text-[#0f62fe]"
            >
              Connect
            </Link>

            <Link
              href="/login"
              className="px-5 py-5 bg-[#0f62fe] text-white"
            >
              My profile
            </Link>

          </div>
        </div>
      )}

      {/* DESKTOP SECOND NAVBAR */}
      <div className="hidden md:flex items-center justify-between pl-8 h-[60px] border-b border-[#e0e0e0]">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-8">
          
          <Link href="/">
            <h2 className="text-[15px] font-semibold text-black cursor-pointer">
              IBM Careers
            </h2>
          </Link>

          <div className="flex items-center gap-8 text-[15px] font-normal text-[#393939]">
            
            <LifeAtIBM />

            <Link
              href="/career-areas"
              className="hover:text-black transition"
            >
              Career Areas
            </Link>

           <EntryLevelPage/>
           <HiringProcess />

            <Link
              href="/recruitmentScams"
              className="h-[60px] flex items-center   text-black"
            >
              Be aware: recruitment scams
            </Link>

            <Link
              href="/search-jobs"
              className="hover:text-black transition"
            >
              Search Jobs
            </Link>

          </div>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex h-full">
          
          <Link
            href="/connect"
            className="flex items-center px-6 text-[15px] text-[#0f62fe] hover:bg-gray-100 transition"
          >
            Connect
          </Link>

          <Link href="/login">
            <button className="px-5 py-5 bg-[#0f62fe] text-white">
              My profile
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}