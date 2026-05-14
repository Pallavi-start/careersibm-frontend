"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "https://careersibm-backend-3.onrender.com";

export default function Admin() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`${API_BASE}/api/applications`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setApplications(res.data);
      } catch (err) {
        console.log("Error fetching applications:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Loading Admin Dashboard...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 Admin Dashboard</h1>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Skills</th>
            <th>Experience</th>
            <th>Resume</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {applications.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No Applications Found
              </td>
            </tr>
          ) : (
            applications.map((app) => (
              <tr key={app._id}>
                <td>{app.fullName}</td>
                <td>{app.email}</td>
                <td>{app.phone}</td>
                <td>{app.skills}</td>
                <td>{app.experience}</td>

                {/* ✅ CLOUDINARY RESUME LINK */}
                <td>
                  {app.resume ? (
                    <a
                      href={app.resume}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "blue" }}
                    >
                      View Resume
                    </a>
                  ) : (
                    "No Resume"
                  )}
                </td>

                <td>
                  <span
                    style={{
                      padding: "4px 8px",
                      background:
                        app.status === "approved"
                          ? "green"
                          : app.status === "rejected"
                          ? "red"
                          : "orange",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    {app.status || "pending"}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}