"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE}/api/jobs`)
      .then((res) => setJobs(res.data))
      .catch(console.log);
  }, []);

  return (
    <div className="min-h-screen bg-[#eaf4fb] px-6 lg:px-20 py-10">
      
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-light text-gray-900">
          Let&apos;s find you the right job
        </h1>
        <p className="text-gray-600 mt-2">
          Explore recommended opportunities based on your profile
        </p>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs?.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-5 border border-gray-100"
            >
              {/* Category */}
              <p className="text-xs text-gray-500 uppercase">
                {job.category || "Job"}
              </p>

              {/* Title */}
              <h2 className="text-lg font-semibold mt-2 text-gray-900">
                {job.title}
              </h2>

              {/* Location */}
              <p className="text-sm text-gray-600 mt-1">
                {job.location}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-3 line-clamp-3">
                {job.description}
              </p>

              {/* Footer */}
              <div className="mt-5 flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  {job.type || "Full Time"}
                </span>

                <button className="text-blue-600 text-sm font-medium hover:underline">
                  View job →
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No jobs found</p>
        )}
      </div>
    </div>
  );
}