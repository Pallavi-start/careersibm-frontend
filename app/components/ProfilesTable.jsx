"use client";

import { useState } from "react";
import ProfileModal from "./ProfileModal";

export default function ProfilesTable({
  profiles,
  openResume,
}) {
  const [search, setSearch] =
    useState("");

  const [
    selectedProfile,
    setSelectedProfile,
  ] = useState(null);

  const filteredProfiles =
    profiles.filter((profile) => {
      
      
      const fullName = `${profile.firstName || ""} ${
        profile.lastName || ""
      }`.toLowerCase();

      return (
        fullName.includes(
          search.toLowerCase()
        ) ||
        profile.email
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        profile.city
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
      );
    });

  return (
    <>
      <div className="bg-white rounded-xl shadow p-5">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-5 gap-4">
          <h2 className="text-2xl font-bold">
            User Profiles
          </h2>

          <input
            type="text"
            placeholder="Search candidate..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="border rounded-lg px-4 py-2 w-full md:w-80"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">
                  Name
                </th>
                <th className="p-3">
                  Email
                </th>
                <th className="p-3">
                  Phone
                </th>
                <th className="p-3">
                  Location
                </th>
                <th className="p-3">
                  Experience
                </th>
                <th className="p-3">
                  Resume
                </th>
                <th className="p-3">
                  Document
                  </th>
                <th className="p-3">
                   Cover Letter
                </th>
                <th className="p-3">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredProfiles.length ===
              0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center p-6"
                  >
                    No Profiles Found
                  </td>
                </tr>
              ) : (
                filteredProfiles.map(
                  (profile) => (
                    <tr
                      key={profile._id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-3">
                        {
                          profile.firstName
                        }{" "}
                        {
                          profile.lastName
                        }
                      </td>

                      <td className="p-3">
                        {profile.email}
                      </td>

                      <td className="p-3">
                        {
                          profile.phoneNumber
                        }
                      </td>

                      <td className="p-3">
                        {profile.city},{" "}
                        {
                          profile.state
 
 }
                      </td>

                      <td className="p-3">
                        {
                          profile.experience
                        }
                      </td>
                      

                      <td className="p-3">
                        <button
                          onClick={() =>
                            openResume(
                              profile.resume
                            )
                          }
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          Resume
                        </button>
                      </td>
                     <td className="p-3">
  {profile.documents?.map((doc) => (
    <button
      key={doc._id}
      onClick={() => openResume(doc.fileUrl)}
      className="bg-purple-500 text-white px-2 py-1 rounded mr-2"
    >
      {doc.name}
    </button>
  ))}
</td>

<td className="p-3">
  <button
    onClick={() =>
      openResume(profile.coverLetter)
    }
    className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
  >
    Cover Letter
  </button>
</td>

                      <td className="p-3">
                        <button
                          onClick={() =>
                            setSelectedProfile(
                              profile
                            )
                          }
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                          View Profile
                        </button>
                      </td>
                    </tr>
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <ProfileModal
        profile={selectedProfile}
        onClose={() =>
          setSelectedProfile(null)
        }
      />
    </>
  );
}