"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import DashboardCards from "../../components/DashboardCards";

export default function Dashboard() {
  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE;

  const [stats, setStats] = useState({
    applications: 0,
    profiles: 0,
    jobs: 0,
  });

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    const fetchData = async () => {
      const [apps, profiles, jobs] =
        await Promise.all([
          axios.get(
            `${API_BASE}/api/applications`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          ),
          axios.get(
            `${API_BASE}/api/profiles`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          ),
          axios.get(
            `${API_BASE}/api/jobs`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          ),
        ]);

      setStats({
        applications:
          apps.data.length,
        profiles:
          profiles.data.length,
        jobs: jobs.data.length,
      });
    };

    fetchData();
  }, [API_BASE]);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <DashboardCards
        applications={
          stats.applications
        }
        profiles={stats.profiles}
        jobs={stats.jobs}
      />
    </>
  );
}