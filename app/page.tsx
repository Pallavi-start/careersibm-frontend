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
    <main className="min-h-screen bg-white">

      <Navbar />

      <Hero />

      <JobSection setShowForm={setShowForm} />

      <Footer />

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

            <ApplyPage />
          </div>
        </div>
      )}

    </main>
  );
}