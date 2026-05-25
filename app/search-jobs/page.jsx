"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import JobSection from "../components/JobSection";
import ApplyPage from "../components/ApplyPage";

export default function SearchJobsPage() {
     const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="min-h-[60vh] bg-[#dceaf1] px-6 md:px-16 py-6">

        <div className="text-sm md:text-base mb-8 flex gap-2">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/careers">Careers</Link>
          <span>/</span>
          <span>Search Jobs</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extralight mb-10">
              Come search jobs <br />
              like an IBMer.
            </h1>
            <div>
              <h4>From leading the way in groundbreaking technologies to making a difference in local communities, bring your skills to transform the way the world works.</h4>
            </div>
            
          </div>

          <div>
           <Image
  src="/image/1-homepage.avif"
  alt="Image"
  width={500}
  height={500}
  className="w-100"
  style={{ height: "auto" }}
/>
          </div>
        </div>
      </div>
  <JobSection setShowForm={setShowForm} />
   {showForm && (
        <ApplyPage setShowForm={setShowForm} />
      )}
    </>
  );
}