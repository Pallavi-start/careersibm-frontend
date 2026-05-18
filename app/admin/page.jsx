"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/admin/login"); // better than push
    }
  }, [router]);

  // Download Resume
  const downloadResume = async (url) => {
    try {
      const response = await fetch(url);

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");

      a.href = blobUrl;
      a.download = "resume.pdf";

      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);

      window.URL.revokeObjectURL(blobUrl);

    } catch (error) {
      console.log("Download Error:", error);
    }
  };

  // Open Resume
  const openResume = (url) => {
    const viewer = `https://docs.google.com/gview?url=${url}&embedded=true`;

    window.open(
      viewer,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Fetch Applications
  useEffect(() => {
    const token = localStorage.getItem("token");

    // Protect Admin Page
    if (!token) {
      router.push("/admin/login");
      return;
    }

    const fetchApplications = async () => {
      try {
        if (!API_BASE) {
          console.error("API BASE URL is missing");
          setLoading(false);
          return;
        }

        const res = await axios.get(
          `${API_BASE}/api/applications`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setApplications(res.data || []);

      } catch (err) {
        console.log(
          "Error fetching applications:",
          err
        );

        if (err.response?.status === 401) {
          localStorage.removeItem("token");

          router.push("/admin/login");
        }

      } finally {
        setLoading(false);
      }
    };

    fetchApplications();

  }, [API_BASE, router]);

  // Loading State
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

      <table
        border="1"
        cellPadding="10"
        width="100%"
      >
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
              <td
                colSpan="7"
                style={{ textAlign: "center" }}
              >
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

                {/* Resume Column */}
                <td>
                  <button
                    onClick={() =>
                      openResume(app.resume)
                    }
                    style={{
                      color: "blue",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    View
                  </button>

                  <button
                    onClick={() =>
                      downloadResume(app.resume)
                    }
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Download
                  </button>
                </td>

                {/* Status */}
                <td>
                  <span
                    style={{
                      padding: "5px 10px",
                      borderRadius: "5px",
                      color: "white",
                      background:
                        app.status === "approved"
                          ? "green"
                          : app.status === "rejected"
                          ? "red"
                          : "orange",
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