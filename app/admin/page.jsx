"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchApplications = async () => {

      try {

        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/applications",
          {
            headers: {
              token,
            },
          }
        );

        setApplications(res.data);

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();

  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>Admin Dashboard</h1>

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
              <td colSpan="7">No Applications Found</td>
            </tr>
          ) : (
            applications.map((app) => (
              <tr key={app._id}>

                <td>{app.fullName}</td>

                <td>{app.email}</td>

                <td>{app.phone}</td>

                <td>{app.skills}</td>

                <td>{app.experience}</td>

                <td>
                  <a
                    href={`http://localhost:5000/${app.resume}`}
                    target="_blank"
                  >
                    View Resume
                  </a>
                </td>

                <td>
                  {app.status || "pending"}
                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}