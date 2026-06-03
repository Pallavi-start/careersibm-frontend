"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ProfilesTable from "../../components/ProfilesTable"

export default function ProfilesPage() {
  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE;

  const [profiles, setProfiles] =
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

    const fetchProfiles =
      async () => {
        try {
          const res = await axios.get(
            `${API_BASE}/api/profiles`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setProfiles(
            res.data || []
          );
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };

    fetchProfiles();
  }, [API_BASE]);

  if (loading)
    return (
      <div>
        Loading Profiles...
      </div>
    );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        User Profiles
      </h1>

      <ProfilesTable
        profiles={profiles}
        openResume={openResume}
      />
      
    </div>
  );
}