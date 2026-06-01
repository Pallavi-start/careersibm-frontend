"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

  workHistory?: {
    company?: string;
    positionTitle?: string;
    currentPosition?: string;
    startDate?: string;
  }[];

  educationHistory?: {
    degreeName?: string;
    degreeType?: string;
    university?: string;
    startDate?: string;
    endDate?: string;
  }[];

  languages?: {
    language?: string;
    writtenLevel?: string;
    spokenLevel?: string;
  }[];
};

export default function YourInformation() {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser({});
      }
    };

    setTimeout(loadUser, 0);
  }, []);

  if (user === null) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        <div className="flex flex-col lg:flex-row gap-16">

          {/* LEFT */}
          <div className="flex-1">

            {/* GENERAL INFO */}
            <h2 className="text-3xl font-light mb-10 text-gray-900">
              General information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-14">

              <div>
                <h3 className="text-gray-500 text-sm uppercase font-semibold">
                  First Name
                </h3>
                <p className="mt-2">{user.firstName || "-"}</p>
              </div>

              <div>
                <h3 className="text-gray-500 text-sm uppercase font-semibold">
                  Middle Name
                </h3>
                <p className="mt-2">{user.middleName || "-"}</p>
              </div>

              <div>
                <h3 className="text-gray-500 text-sm uppercase font-semibold">
                  Last Name
                </h3>
                <p className="mt-2">{user.lastName || "-"}</p>
              </div>

              <div>
                <h3 className="text-gray-500 text-sm uppercase font-semibold">
                  Preferred Name
                </h3>
                <p className="mt-2">{user.preferredName || "-"}</p>
              </div>

              <div>
                <h3 className="text-gray-500 text-sm uppercase font-semibold">
                  Email
                </h3>
                <p className="mt-2">{user.email || "-"}</p>
              </div>

              <div>
                <h3 className="text-gray-500 text-sm uppercase font-semibold">
                  Phone
                </h3>
                <p className="mt-2">{user.phoneNumber || "-"}</p>
              </div>

              <div>
                <h3 className="text-gray-500 text-sm uppercase font-semibold">
                  State
                </h3>
                <p className="mt-2">{user.state || "-"}</p>
              </div>

              <div>
                <h3 className="text-gray-500 text-sm uppercase font-semibold">
                  City
                </h3>
                <p className="mt-2">{user.city || "-"}</p>
              </div>

              <div>
                <h3 className="text-gray-500 text-sm uppercase font-semibold">
                  Website
                </h3>
                {user.website ? (
                  <a
                    href={user.website}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    {user.website}
                  </a>
                ) : (
                  "-"
                )}
              </div>

              <div>
                <h3 className="text-gray-500 text-sm uppercase font-semibold">
                  Skills
                </h3>
                <p className="mt-2">{user.skills || "-"}</p>
              </div>

              <div>
                <h3 className="text-gray-500 text-sm uppercase font-semibold">
                  Experience
                </h3>
                <p className="mt-2 whitespace-pre-wrap">
                  {user.experience || "-"}
                </p>
              </div>

            </div>

            {/* WORK */}
            <h2 className="text-3xl mt-20 mb-6">Work History</h2>

            {user?.workHistory?.map((work, i) => (
              <div key={i} className="border p-5 mb-4">
                <p className="font-semibold">{work.company}</p>
                <p>{work.positionTitle}</p>
                <p>{work.currentPosition}</p>
                <p>{work.startDate}</p>
              </div>
            ))}

            {/* EDUCATION */}
            <h2 className="text-3xl mt-20 mb-6">Education</h2>

            {user?.educationHistory?.map((edu, i) => (
              <div key={i} className="border p-5 mb-4">
                <p className="font-semibold">{edu.degreeName}</p>
                <p>{edu.degreeType}</p>
                <p>{edu.university}</p>
                <p>
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))}

            {/* LANGUAGES */}
            <h2 className="text-3xl mt-20 mb-6">Languages</h2>

            {user?.languages?.map((lang, i) => (
              <div key={i} className="border p-5 mb-4">
                <p className="font-semibold">{lang.language}</p>
                <p>Written: {lang.writtenLevel}</p>
                <p>Spoken: {lang.spokenLevel}</p>
              </div>
            ))}

            {/* DOCUMENTS */}
            <h2 className="text-3xl mt-20 mb-6">Documents</h2>

            {/* Resume */}
            <div className="mb-6">
              <h3 className="text-gray-500 text-sm uppercase font-semibold">
                Resume
              </h3>

              {user?.resume ? (
                <a
                  href={user.resume}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  View Resume
                </a>
              ) : (
                "-"
              )}
            </div>

            {/* Cover Letter */}
            <div className="mb-6">
              <h3 className="text-gray-500 text-sm uppercase font-semibold">
                Cover Letter
              </h3>

              {user?.coverLetter ? (
                <a
                  href={user.coverLetter}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  View Cover Letter
                </a>
              ) : (
                "-"
              )}
            </div>

            {/* Other Documents */}
            <div>
              <h3 className="text-gray-500 text-sm uppercase font-semibold">
                Other Documents
              </h3>

              {user?.documents?.length ? (
                <div className="mt-2 space-y-2">
                  {user.documents.map((doc, i) => (
                    <a
                      key={i}
                      href={doc.fileUrl}
                      target="_blank"
                      className="text-blue-600 underline block"
                    >
                      {doc.name}
                    </a>
                  ))}
                </div>
              ) : (
                "-"
              )}
            </div>

          </div>

          {/* RIGHT */}
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