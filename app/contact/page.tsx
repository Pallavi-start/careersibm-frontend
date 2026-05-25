"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ FIXED HANDLE CHANGE
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ FIXED HANDLE SUBMIT (syntax corrected)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 text-center px-4">
        <h1 className="text-4xl font-bold">Contact Our Company</h1>
        <p className="mt-2 opacity-90">
          We are here to help job seekers & employers 24/7
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-6">

        {/* LEFT SIDE - COMPANY INFO */}
        <div className="space-y-6">

          <h2 className="text-2xl font-bold">Company Details</h2>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold">🏢 IBM India Pvt. Ltd.</h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold">📍 Office Address</h3>
            <p className="text-gray-600">
              Human Resources Department<br/>
IBM India Pvt. Ltd.
No. 12, Subramanya Arcade<br/>
Bannerghatta Main Road<br/>
Bengaluru – 560029, India
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold">📧 Email</h3>
            <p className="text-gray-600">rccindia.ibm@ibm.com</p>
           
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold">📞 Phone</h3>
            <p className="text-gray-600">+91-</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold">⏰ Working Hours</h3>
            <p className="text-gray-600">Mon - Sat: 9 AM - 7 PM</p>
          </div>

          {/* WHATSAPP BUTTON */}
         

        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4">Send Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full border p-3 rounded-lg"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

      {/* GOOGLE MAP */}
      <div className="max-w-6xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-bold mb-4">📍 Our Location</h2>

       <iframe
  className="w-full h-80 rounded-xl shadow"
  loading="lazy"
  src="https://www.google.com/maps?q=IBM%20India%20Pvt%20Ltd%20Subramanya%20Arcade%20Bannerghatta%20Road%20Bengaluru&output=embed"
></iframe>
      </div>

      {/* FOOTER */}
      

    </div>
  );
}