"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import api from "../../lib/axios";

type WorkHistory = {
  company?: string;
  positionTitle?: string;
  currentPosition?: string;
  startDate?: string;
};

type EducationHistory = {
  degreeName?: string;
  degreeType?: string;
  university?: string;
  startDate?: string;
  endDate?: string;
};

type Language = {
  language?: string;
  writtenLevel?: string;
  spokenLevel?: string;
};
type UserType = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  preferredName?: string;
  email?: string;
  phoneNumber?: string;
  skills?: string;
  experience?: string;

  state?: string;
  city?: string;
  addressLine1?: string;
  addressLine2?: string;
  zipCode?: string;
  website?: string;

  resume?: string;
  coverLetter?: string;

  documents?: {
    name: string;
    fileUrl: string;
  }[];

 workHistory?: WorkHistory[];
  educationHistory?: EducationHistory[];
  languages?: Language[];
};

export default function YourInformation() {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ FETCH FROM BACKEND (NO LOCALSTORAGE)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        
const res = await api.get("/api/get-profile");
      

        setUser(res.data.user);
      } catch (err) {
        console.log("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        No user found
      </div>
    );
  }

  return (
   <div className="min-h-screen bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

    <div className="flex flex-col lg:flex-row gap-16">

      {/* LEFT SIDE */}
      <div className="flex-1">

        <h2 className="text-3xl font-light mb-10">
          General information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <p>First Name: {user?.firstName ?? "-"}</p>
          <p>Middle Name: {user?.middleName ?? "-"}</p>
          <p>Last Name: {user?.lastName ?? "-"}</p>
          <p>Email: {user?.email ?? "-"}</p>
          <p>Phone: {user?.phoneNumber ?? "-"}</p>

          <p>City: {user?.city ?? "-"}</p>
          <p>State: {user?.state ?? "-"}</p>

          <p>
            Skills:{" "}
            {Array.isArray(user?.skills)
              ? user?.skills.join(", ")
              : user?.skills || "-"}
          </p>

          <p>Experience: {user?.experience ?? "-"}</p>

          <p>Website: {user?.website ?? "-"}</p>
        </div>

        {/* WORK HISTORY */}
        <h2 className="text-3xl mt-20 mb-6">Work History</h2>

        {user?.workHistory?.length ? (
          user.workHistory.map((work, i) => (
            <div key={i} className="border p-5 mb-4">
              <p><b>Company:</b> {work.company ?? "-"}</p>
              <p><b>Position:</b> {work.positionTitle ?? "-"}</p>
              <p><b>Start:</b> {work.startDate ?? "-"}</p>
            </div>
          ))
        ) : (
          <p>-</p>
        )}

        {/* EDUCATION */}
        <h2 className="text-3xl mt-20 mb-6">Education</h2>

        {user?.educationHistory?.length ? (
          user.educationHistory.map((edu, i) => (
            <div key={i} className="border p-5 mb-4">
              <p><b>Degree:</b> {edu.degreeName ?? "-"}</p>
              <p><b>University:</b> {edu.university ?? "-"}</p>
              <p><b>Type:</b> {edu.degreeType ?? "-"}</p>
            </div>
          ))
        ) : (
          <p>-</p>
        )}

        {/* LANGUAGES */}
        <h2 className="text-3xl mt-20 mb-6">Languages</h2>

        {user?.languages?.length ? (
          user.languages.map((lang, i) => (
            <div key={i} className="border p-5 mb-4">
              <p>{lang.language ?? "-"}</p>
              <p>Written: {lang.writtenLevel ?? "-"}</p>
              <p>Spoken: {lang.spokenLevel ?? "-"}</p>
            </div>
          ))
        ) : (
          <p>-</p>
        )}

        {/* DOCUMENTS */}
        <h2 className="text-3xl mt-20 mb-6">Documents</h2>

        <p>
  Resume:{" "}
  {user?.resume ? (
    <a
      href={`https://docs.google.com/gview?url=${encodeURIComponent(user.resume)}&embedded=true`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      View
    </a>
  ) : "-"}
</p>

        <p>
          Cover Letter:{" "}
          {user?.coverLetter ? (
            <a
  href={`https://docs.google.com/gview?url=${encodeURIComponent(user.coverLetter)}&embedded=true`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 underline"
>
  View
</a>
          ) : "-"}
        </p>
         documents:{""}
        {user?.documents?.length ? (
          user.documents.map((doc, i) => (
            <a
              key={i}
             href={`https://docs.google.com/gview?url=${encodeURIComponent(doc.fileUrl)}&embedded=true`}
      target="_blank"
      rel="noopener noreferrer"

              className="text-blue-600 underline block"
            >
              {doc.name}
            </a>
          ))
        ) : (
          <p>-</p>
        )}

      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-[280px]">
        <Link href="/profile">
          <button className="bg-blue-600 text-white px-6 py-3 w-full">
            Edit Profile
          </button>
        </Link>
      </div>

    </div>
  </div>
</div>
  );
}