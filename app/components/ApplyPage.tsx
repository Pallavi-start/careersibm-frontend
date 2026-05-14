"use client";

import { useState } from "react";
import axios from "axios";

export default function ApplyPage() {

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


  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // Submit Form
const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();

  data.append("fullName", formData.fullName);
  data.append("email", formData.email);
  data.append("phone", formData.phone);
  data.append("address", formData.address);
  data.append("skills", formData.skills);
  data.append("experience", formData.experience);

  if (resume) data.append("resume", resume);

  if (documents) {
    for (let i = 0; i < documents.length; i++) {
      data.append("documents", documents[i]);
    }
  }

  try {
    const res = await axios.post(
      "https://careersibm-backend-3.onrender.com/api/applications/apply",
      data
    );

    alert(res.data.message);

  } catch (err) {
    console.log(err.response?.data || err.message);
    alert("Submission Failed");
  }
};


  return (

    <main className="h-screen overflow-y-auto bg-gray-100 flex items-start justify-center p-6">

      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-10 mx-auto my-10">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-3">
          Job Application
        </h1>

        <p className="text-center text-gray-500 mb-8 text-lg">
          Submit your details and documents
        </p>


        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >


          {/* Full Name */}
          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 text-base outline-none focus:border-blue-500"
            />

          </div>


          {/* Email */}
          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 text-base outline-none focus:border-blue-500"
            />

          </div>


          {/* Phone */}
          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 text-base outline-none focus:border-blue-500"
            />

          </div>


          {/* Address */}
          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Address
            </label>

            <textarea
              name="address"
              rows={4}
              onChange={handleChange}
              placeholder="Enter address"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 text-base outline-none focus:border-blue-500"
            />

          </div>


          {/* Skills */}
          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Skills
            </label>

            <input
              type="text"
              name="skills"
              onChange={handleChange}
              placeholder="React.js, Node.js, MongoDB"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 text-base outline-none focus:border-blue-500"
            />

          </div>


          {/* Experience */}
          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Experience
            </label>

            <select
              name="experience"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-5 py-4 text-base outline-none focus:border-blue-500"
            >

              <option value="">Select Experience</option>
              <option value="Fresher">Fresher</option>
              <option value="1 Year">1 Year</option>
              <option value="2 Years">2 Years</option>
              <option value="3+ Years">3+ Years</option>

            </select>

          </div>


          {/* Resume Upload */}
          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Upload Resume
            </label>

            <input
              type="file"
              onChange={(e) => {

                if (e.target.files) {
                  setResume(e.target.files[0]);
                }

              }}
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />

          </div>


          {/* Documents Upload */}
          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Upload Documents
            </label>

            <input
              type="file"
              multiple
              onChange={(e) => {

                if (e.target.files) {
                  setDocuments(e.target.files);
                }

              }}
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />

          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition"
          >
            Submit Application
          </button>

        </form>

      </div>

    </main>

  );
}