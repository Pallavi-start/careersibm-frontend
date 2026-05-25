"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter(); // ✅ FIXED
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    preferredName: "",
    email: "",
    language: "",
    coverLetter: "",
    resume: "",
  });

  // =====================
  // RESUME UPLOAD
  // =====================
  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];

    const data = new FormData();
    data.append("resume", file);

    const token = localStorage.getItem("token");

    const response = await axios.post(
      `${API_BASE}/api/upload-resume`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setFormData((prev) => ({
      ...prev,
      resume: response.data.fileUrl,
    }));
  };

  // =====================
  // COVER LETTER UPLOAD
  // =====================
  const handleCoverLetterUpload = async (e) => {
    const file = e.target.files[0];

    const data = new FormData();
    data.append("resume", file); // same backend endpoint

    const token = localStorage.getItem("token");

    const response = await axios.post(
      `${API_BASE}/api/upload-resume`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setFormData((prev) => ({
      ...prev,
      coverLetter: response.data.fileUrl,
    }));
  };

  // =====================
  // INPUT CHANGE
  // =====================
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // =====================
  // SUBMIT PROFILE
  // =====================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      await axios.post(
        `${API_BASE}/api/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Profile saved successfully");

      // ✅ redirect after success
      router.push("/Search-jobs");


    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Error saving profile");
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="border-b p-4">
        <h1 className="text-xl font-bold">IBM Careers</h1>
      </div>

      {/* Banner */}
      <div className="bg-blue-50 py-14 px-10">
        <h2 className="text-5xl font-light text-gray-700">
          Edit information
        </h2>
      </div>

      {/* Form */}
      <div className="max-w-5xl mx-auto p-10">

        <h3 className="text-2xl mb-8 text-gray-700">
          General information
        </h3>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            className="w-full border p-3 bg-gray-50"
          />

          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            onChange={handleChange}
            className="w-full border p-3 bg-gray-50"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            className="w-full border p-3 bg-gray-50"
          />

          <input
            type="text"
            name="preferredName"
            placeholder="Preferred Name"
            onChange={handleChange}
            className="w-full border p-3 bg-gray-50"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 bg-gray-50"
          />

          <select
            name="language"
            onChange={handleChange}
            className="w-full border p-3 bg-gray-50"
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>

          {/* COVER LETTER */}
          <div className="col-span-2">
            <label className="block mb-2 font-medium">
              Upload Cover Letter
            </label>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleCoverLetterUpload}
              className="w-full border p-3 bg-gray-50"
            />
          </div>

          {/* RESUME */}
          <div className="col-span-2">
            <label className="block mb-2 font-medium">
              Upload Resume
            </label>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
              className="w-full border p-3 bg-gray-50"
            />
          </div>

          {/* SUBMIT */}
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700"
            >
              Save Profile
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}