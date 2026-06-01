"use client";



import { useEffect, useState } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";



export default function Admin() {

  const router = useRouter();

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;



  const [applications, setApplications] = useState([]);

  const [profiles, setProfiles] = useState([]);

  const [loading, setLoading] = useState(true);



  // Open Resume

  const openResume = (url) => {

    const viewer = `https://docs.google.com/gview?url=${url}&embedded=true`;
    window.open(
     viewer,
   "_blank",
    "noopener,noreferrer"
    );
  };



  // Download Resume

  const downloadResume = async (url) => {

    try {

      const response = await fetch(url);

      const blob = await response.blob();



      const blobUrl =

        window.URL.createObjectURL(blob);



      const a =

        document.createElement("a");



      a.href = blobUrl;

      a.download = "resume.pdf";



      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);



      window.URL.revokeObjectURL(blobUrl);

    } catch (error) {

      console.log(

        "Download Error:",

        error

      );

    }

  };



  useEffect(() => {

    const token =

      localStorage.getItem("token");



    if (!token) {

      router.replace("/admin/login");

      return;

    }



    const fetchData = async () => {

      try {

        // Applications

        const appRes = await axios.get(

          `${API_BASE}/api/applications`,

          {

            headers: {

              Authorization: `Bearer ${token}`,

            },

          }

        );



        setApplications(

          appRes.data || []

        );



        // Profiles

        const profileRes =

          await axios.get(

            `${API_BASE}/api/profiles`,

            {

              headers: {

                Authorization: `Bearer ${token}`,

              },

            }

          );



        setProfiles(

          profileRes.data || []

        );

      } catch (err) {

        console.log(err);



        if (

          err.response?.status === 401

        ) {

          localStorage.removeItem(

            "token"

          );



          router.replace(

            "/admin/login"

          );

        }

      } finally {

        setLoading(false);

      }

    };



    fetchData();

  }, [API_BASE, router]);



  if (loading) {

    return (

      <div style={{ padding: "20px" }}>

        <h2>

          Loading Admin Dashboard...

        </h2>

      </div>

    );

  }



  return (

    <div style={{ padding: "20px" }}>

      <h1>🚀 Admin Dashboard</h1>



      {/* Applications */}

      <h2>Job Applications</h2>



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

                style={{

                  textAlign: "center",

                }}

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



                <td>

                  <button

                    onClick={() =>

                      openResume(

                        app.resume

                      )

                    }

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

                      marginLeft: "10px",

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

                      color: "white",

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

            ))

          )}

        </tbody>

      </table>



      {/* Profiles */}

      <h2

        style={{

          marginTop: "50px",

        }}

      >

        👤 User Profiles

      </h2>



      <table

        border="1"

        cellPadding="10"

        width="100%"

      >

        <thead>

          <tr>

            <th>Name</th>

            <th>Email</th>

            <th>Phone</th>

            <th>Location</th>

            <th>Experience</th>

            <th>Resume</th>

          </tr>

        </thead>



        <tbody>

          {profiles.length === 0 ? (

            <tr>

              <td

                colSpan="6"

                style={{

                  textAlign: "center",

                }}

              >

                No Profiles Found

              </td>

            </tr>

          ) : (

            profiles.map((profile) => (

              <tr key={profile._id}>

                <td>

                  {profile.firstName}{" "}

                  {profile.lastName}

                </td>



                <td>

                  {profile.email}

                </td>



                <td>

                  {

                    profile.phoneNumber

                  }

                </td>



                <td>

                  {profile.city},{" "}

                  {profile.state}

                </td>



                <td>

                  {

                    profile.experience

                  }

                </td>



                <td>

                  <button

                    onClick={() =>

                      openResume(

                        profile.resume

                      )

                    }

                  >

                    View Resume

                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}