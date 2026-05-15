"use client";

import { useState } from "react";
import axios from "axios";

type AddJobFormProps = {
  onJobAdded?: () => void;
  onClose?: () => void;
};

export default function AddJobForm({ onJobAdded, onClose }: AddJobFormProps) {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  const handleAddJob = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!API_BASE) {
      alert("API not configured");
      return;
    }

    try {
      await axios.post(`${API_BASE}/api/jobs`, {
        title,
        company,
        location,
        salary,
      });

      alert("Job added successfully ✅");

      setTitle("");
      setCompany("");
      setLocation("");
      setSalary("");

      if (onJobAdded) onJobAdded();
      if (onClose) onClose();

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.log(err.response?.data || err.message);
        alert(err.response?.data?.message || "Failed to add job ❌");
      } else {
        console.log(err);
        alert("Failed to add job ❌");
      }
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