"use client";

import { useState } from "react";
import axios from "axios";

export default function ApplyPage({ setShowForm }) {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    skills: "",
    experience: "",
  });


  const [resume, setResume] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {

  e.preventDefault();

  // CHECK LOGIN
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login first");
    return;
  }

  if (!API_BASE) {
    alert("Backend URL not configured");
    return;
  }

  if (!resume) {
    alert("Please upload resume");
    return;
  }

  const data = new FormData();

  data.append("fullName", formData.fullName);
  data.append("email", formData.email);
  data.append("phone", formData.phone);
  data.append("address", formData.address);
  data.append("skills", formData.skills);
  data.append("experience", formData.experience);

  data.append("resume", resume);

  try {

    const res = await axios.post(
      `${API_BASE}/api/applications/apply`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    alert(
      res.data.message ||
      "Application submitted successfully"
    );

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      skills: "",
      experience: "",
    });

    setResume(null);

    setShowForm(false);

  } catch (err) {

    console.error(err);

    alert("Submission Failed");
  }
};
  return (
   
  <main className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-6 overflow-y-auto">

   <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 mx-auto relative overflow-visible max-h-[90vh] overflow-y-auto">

      <button
  type="button"
  onClick={() => setShowForm(false)}
  className="absolute top-4 right-4 z-[100] flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-black text-3xl font-bold shadow-md hover:bg-gray-300"
>
  ×
</button>
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-3">
          Job Application
        </h1>

        <p className="text-center text-gray-500 mb-8 text-lg">
          Submit your details and resume
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          >
            <option value="">Select Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="1 Year">1 Year</option>
            <option value="2 Years">2 Years</option>
            <option value="3+ Years">3+ Years</option>
          </select>

          <input
            type="file"
            onChange={(e) => {
              if (e.target.files) setResume(e.target.files[0]);
            }}
            className="w-full border p-3 rounded-xl"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700"
          >
            Submit Application
          </button>
        </form>
      </div>
    </main>
  );
}