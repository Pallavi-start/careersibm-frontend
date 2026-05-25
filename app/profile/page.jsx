"use client";

import { useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    preferredName: "",
    email: "",
    language: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  const token = localStorage.getItem("token");

  // CHECK LOGIN
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

    // GO TO JOBS PAGE
    router.push("/jobs");

  } catch (error) {

    console.log(error);

    alert(
      error.response?.data?.message ||
      "Error saving profile"
    );
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
          <div>
            <label className="block mb-2 font-medium">
              Legal first name *
            </label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              className="w-full border p-3 bg-gray-50"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Legal middle name
            </label>
            <input
              type="text"
              name="middleName"
              onChange={handleChange}
              className="w-full border p-3 bg-gray-50"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Legal last name *
            </label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              className="w-full border p-3 bg-gray-50"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Preferred Name *
            </label>
            <input
              type="text"
              name="preferredName"
              onChange={handleChange}
              className="w-full border p-3 bg-gray-50"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email *
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full border p-3 bg-gray-50"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Preferred Language *
            </label>
            <select
              name="language"
              onChange={handleChange}
              className="w-full border p-3 bg-gray-50"
            >
              <option>Select</option>
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <div className="col-span-2">
            <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700">
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}