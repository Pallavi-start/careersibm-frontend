"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EmployeeDashboard() {
  const router = useRouter();

  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE;

  const [applications, setApplications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // Protect Dashboard + Fetch Data
  useEffect(() => {
    const token =
      localStorage.getItem(
        "employeeToken"
      );

    // Redirect if not logged in
    if (!token) {
      router.push(
        "/employee-login"
      );

      return;
    }

    const fetchApplications =
      async () => {
        try {
          const res = await fetch(
            `${API_BASE}/api/applications`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const data =
            await res.json();

          setApplications(data);

        } catch (error) {
          console.log(
            "Fetch Error:",
            error
          );
        } finally {
          setLoading(false);
        }
      };

    fetchApplications();

  }, [API_BASE, router]);

  // Logout
  const logout = () => {
    localStorage.removeItem(
      "employeeToken"
    );

    router.push("/employee-login");
  };

  // Resume Viewer
  const openResume = (url) => {
    const viewer = `https://docs.google.com/gview?url=${url}&embedded=true`;

    window.open(
      viewer,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Download Resume
  const downloadResume = async (
    url
  ) => {
    try {
      const response =
        await fetch(url);

      const blob =
        await response.blob();

      const blobUrl =
        window.URL.createObjectURL(
          blob
        );

      const a =
        document.createElement("a");

      a.href = blobUrl;
      a.download = "resume.pdf";

      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);

      window.URL.revokeObjectURL(
        blobUrl
      );

    } catch (error) {
      console.log(
        "Download Error:",
        error
      );
    }
  };

  // Loading
  if (loading) {
    return (
      <div
        style={{
          padding: "40px",
        }}
      >
        <h2>
          Loading Employee
          Dashboard...
        </h2>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #000000, #0f172a)",
        color: "white",
        padding: "40px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "36px",
              marginBottom: "10px",
            }}
          >
            Employee Dashboard
          </h1>

          <p
            style={{
              color: "#9ca3af",
            }}
          >
            IBM Careers Employee
            Portal 🚀
          </p>
        </div>

        <button
          onClick={logout}
          style={{
            padding: "12px 20px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "#111827",
            padding: "25px",
            borderRadius: "16px",
          }}
        >
          <h2>
            Total Applications
          </h2>

          <h1
            style={{
              fontSize: "40px",
            }}
          >
            {
              applications.length
            }
          </h1>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "25px",
            borderRadius: "16px",
          }}
        >
          <h2>Pending</h2>

          <h1
            style={{
              fontSize: "40px",
              color: "orange",
            }}
          >
            {
              applications.filter(
                (app) =>
                  app.status ===
                    "pending" ||
                  !app.status
              ).length
            }
          </h1>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "25px",
            borderRadius: "16px",
          }}
        >
          <h2>Approved</h2>

          <h1
            style={{
              fontSize: "40px",
              color: "green",
            }}
          >
            {
              applications.filter(
                (app) =>
                  app.status ===
                  "approved"
              ).length
            }
          </h1>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "25px",
            borderRadius: "16px",
          }}
        >
          <h2>Rejected</h2>

          <h1
            style={{
              fontSize: "40px",
              color: "red",
            }}
          >
            {
              applications.filter(
                (app) =>
                  app.status ===
                  "rejected"
              ).length
            }
          </h1>
        </div>
      </div>

      {/* Applications Table */}
      <div
        style={{
          background: "#111827",
          padding: "30px",
          borderRadius: "16px",
          overflowX: "auto",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Recent Applications
        </h2>

        <table
          width="100%"
          cellPadding="12"
          style={{
            borderCollapse:
              "collapse",
            color: "white",
          }}
        >
          <thead>
            <tr
              style={{
                background:
                  "#1f2937",
              }}
            >
              <th align="left">
                Name
              </th>

              <th align="left">
                Email
              </th>

              <th align="left">
                Skills
              </th>

              <th align="left">
                Experience
              </th>

              <th align="left">
                Resume
              </th>

              <th align="left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {applications.length ===
            0 ? (
              <tr>
                <td
                  colSpan="6"
                >
                  No Applications
                  Found
                </td>
              </tr>
            ) : (
              applications.map(
                (app) => (
                  <tr
                    key={app._id}
                    style={{
                      borderBottom:
                        "1px solid #374151",
                    }}
                  >
                    <td>
                      {
                        app.fullName
                      }
                    </td>

                    <td>
                      {app.email}
                    </td>

                    <td>
                      {app.skills}
                    </td>

                    <td>
                      {
                        app.experience
                      }
                    </td>

                    <td>
                      <button
                        onClick={() =>
                          openResume(
                            app.resume
                          )
                        }
                        style={{
                          marginRight:
                            "10px",
                          cursor:
                            "pointer",
                        }}
                      >
                        View
                      </button>

                      <button
                        onClick={() =>
                          downloadResume(
                            app.resume
                          )
                        }
                        style={{
                          cursor:
                            "pointer",
                        }}
                      >
                        Download
                      </button>
                    </td>

                    <td>
                      <span
                        style={{
                          padding:
                            "5px 10px",
                          borderRadius:
                            "5px",
                          background:
                            app.status ===
                            "approved"
                              ? "green"
                              : app.status ===
                                "rejected"
                              ? "red"
                              : "orange",
                        }}
                      >
                        {app.status ||
                          "pending"}
                      </span>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}