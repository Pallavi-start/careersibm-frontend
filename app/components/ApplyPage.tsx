"use client";

import { useState } from "react";
import axios from "axios";

export default function ApplyPage() {
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
  const [documents, setDocuments] = useState<FileList | null>(null);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!API_BASE) {
      alert("Backend URL not configured");
      return;
    }

    if (!resume) {
      alert("Please upload resume");
      return;
    }

    const data = new FormData();

    // TEXT FIELDS
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("address", formData.address);
    data.append("skills", formData.skills);
    data.append("experience", formData.experience);

    // FILE: resume (required)
    data.append("resume", resume);

    // FILE: documents (optional multiple)
    if (documents) {
      for (let i = 0; i < documents.length; i++) {
        data.append("documents", documents[i]);
      }
    }

    try {
      const res = await axios.post(
        `${API_BASE}/api/applications/apply`,
        data
      );

      alert(res.data.message || "Application submitted successfully");

      // RESET FORM
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        skills: "",
        experience: "",
      });

      setResume(null);
      setDocuments(null);

    } catch (err) {
      console.log(err);
      alert("Submission Failed");
    }
  };

  return (
    <main className="h-screen overflow-y-auto bg-gray-100 flex items-start justify-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-10 mx-auto my-10">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-3">
          Job Application
        </h1>

        <p className="text-center text-gray-500 mb-8 text-lg">
          Submit your details and documents
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName ?? ""}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email ?? ""}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone ?? ""}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address ?? ""}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills"
            value={formData.skills ?? ""}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <select
            name="experience"
            value={formData.experience ?? ""}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          >
            <option value="">Select Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="1 Year">1 Year</option>
            <option value="2 Years">2 Years</option>
            <option value="3+ Years">3+ Years</option>
          </select>

          {/* RESUME */}
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files) setResume(e.target.files[0]);
            }}
            className="w-full border p-3 rounded-xl"
            required
          />

          {/* DOCUMENTS */}
          <input
            type="file"
            multiple
            onChange={(e) => {
              if (e.target.files) setDocuments(e.target.files);
            }}
            className="w-full border p-3 rounded-xl"
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