"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import JobSection from "./components/JobSection";
import ApplyPage from "./components/ApplyPage";

export default function Home() {

  const [showForm, setShowForm] = useState(false);



  return (

    <main>

      <Navbar />

      <Hero />

      <JobSection setShowForm={setShowForm} />

      <Footer />



      {/* ================= APPLY MODAL ================= */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-5 overflow-y-auto">

          <div className="relative w-full max-w-2xl">

            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg z-10"
            >
              X
            </button>

            <ApplyPage />

          </div>

        </div>
      )}



      {/* ================= LOGIN MODAL ================= */}
     

           

        
       
      

    </main>

  );
}