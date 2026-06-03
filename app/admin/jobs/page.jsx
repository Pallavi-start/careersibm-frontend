"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function JobsPage() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ MODAL STATE
  const [showModal, setShowModal] = useState(false);

  // ✅ FORM STATE
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    experience: "",
    skills: "",
  });

  // ================= FETCH JOBS =================
  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          `${API_BASE}/api/jobs`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setJobs(res.data || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [API_BASE]);

  // ================= INPUT CHANGE =================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ================= SUBMIT JOB =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        `${API_BASE}/api/jobs`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // ✅ instant update UI (no reload)
      setJobs((prev) => [res.data, ...prev]);

      setShowModal(false);

      // reset form
      setForm({
        title: "",
        company: "",
        location: "",
        salary: "",
        experience: "",
        skills: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  // ================= LOADING =================
  if (loading) return <div>Loading Jobs...</div>;

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Jobs</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add Job
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Salary</th>
              <th>Experience</th>
            </tr>
          </thead>

          <tbody>
            {jobs.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-8">
                  No Jobs Found
                </td>
              </tr>
            ) : (
              jobs.map((job) => (
                <tr key={job._id} className="border-t">
                  <td className="p-4">{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.location}</td>
                  <td>{job.salary}</td>
                  <td>{job.experience}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ================= ADD JOB MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Add Job</h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                className="w-full border p-2"
                required
              />

              <input
                name="company"
                placeholder="Company"
                value={form.company}
                onChange={handleChange}
                className="w-full border p-2"
                required
              />

              <input
                name="location"
                placeholder="Location"
                value={form.location}
                onChange={handleChange}
                className="w-full border p-2"
                required
              />

              <input
                name="salary"
                placeholder="Salary"
                value={form.salary}
                onChange={handleChange}
                className="w-full border p-2"
                required
              />

              <input
                name="experience"
                placeholder="Experience"
                value={form.experience}
                onChange={handleChange}
                className="w-full border p-2"
                required
              />

              <input
                name="skills"
                placeholder="Skills"
                value={form.skills}
                onChange={handleChange}
                className="w-full border p-2"
              />

              {/* BUTTONS */}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-3 py-2 bg-gray-400 text-white rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-3 py-2 bg-blue-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}