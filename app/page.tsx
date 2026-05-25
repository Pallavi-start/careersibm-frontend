"use client";

import { useState } from "react";

import HeroVideoSlider from "./components/HeroVideoSlider";



export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen bg-white">

      

      <HeroVideoSlider />

     

     

      {/* ================= APPLY MODAL ================= */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setShowForm(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-md"
            >
              X
            </button>

            
          </div>
        </div>
      )}

    </main>
  );
}