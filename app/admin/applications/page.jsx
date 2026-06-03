"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ApplicationsTable from "../../components/ApplicationsTable";

export default function ApplicationsPage() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const [applications, setApplications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const openResume = (url) => {
    const viewer = `https://docs.google.com/gview?url=${url}&embedded=true`;

    window.open(
      viewer,
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    const fetchApplications =
      async () => {
        try {
          const res = await axios.get(
            `${API_BASE}/api/applications`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setApplications(
            res.data || []
          );
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };

    fetchApplications();
  }, [API_BASE]);

  if (loading)
    return (
      <div>
        Loading Applications...
      </div>
    );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Applications
      </h1>

      <ApplicationsTable
        applications={applications}
        openResume={openResume}
      />
    </div>
  );
}