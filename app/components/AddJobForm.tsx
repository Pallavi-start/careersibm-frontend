"use client";

import { useState } from "react";
import axios from "axios";

type AddJobFormProps = {
  onJobAdded?: () => void; // optional refresh callback
  onClose?: () => void; // optional modal close
};

export default function AddJobForm({ onJobAdded, onClose }: AddJobFormProps) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  const handleAddJob = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post("https://careersibm-backend-3.onrender.com/api/jobs", {
        title,
        company,
        location,
        salary,
      });

      alert("Job added successfully ✅");

      // clear form
      setTitle("");
      setCompany("");
      setLocation("");
      setSalary("");

      // refresh job list (important)
      if (onJobAdded) onJobAdded();

      // close modal (if used)
      if (onClose) onClose();

    } catch (err) {
      console.log("Error adding job:", err);
      alert("Failed to add job ❌");
    }
  };

  return (
    <form onSubmit={handleAddJob} className="p-4 space-y-3 bg-white rounded-xl shadow">

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 w-full rounded"
        required
      />

      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
        className="border p-2 w-full rounded"
        required
      />

      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="border p-2 w-full rounded"
        required
      />

      <input
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="Salary"
        className="border p-2 w-full rounded"
        required
      />

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 w-full rounded hover:bg-gray-800"
      >
        Add Job
      </button>

    </form>
  );
}