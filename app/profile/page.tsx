"use client";

import { useState } from "react";
import { API } from "../lib/api";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ProfilePage() {
  const router = useRouter();

  // FILES
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] =
    useState<File | null>(null);

  // USER INFO
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [preferredName, setPreferredName] =
    useState("");

  const [phoneNumber, setPhoneNumber] =
    useState("");

  const [skills, setSkills] = useState("");
  const [experience, setExperience] =
    useState("");

  const userId =
    typeof window !== "undefined"
      ? localStorage.getItem("userId")
      : null;

  const handleProfile = async () => {
    try {
      const formData = new FormData();

      // FILES
      if (resume) {
        formData.append("resume", resume);
      }

      if (coverLetterFile) {
        formData.append(
          "coverLetter",
          coverLetterFile
        );
      }

      // USER DETAILS
      formData.append("firstName", firstName);
      formData.append("middleName", middleName);
      formData.append("lastName", lastName);
      formData.append(
        "preferredName",
        preferredName
      );

      formData.append(
        "phoneNumber",
        phoneNumber
      );

      // SKILLS ARRAY
      formData.append(
        "skills",
        JSON.stringify(
          skills
            .split(",")
            .map((skill) => skill.trim())
        )
      );

      formData.append(
        "experience",
        experience
      );

      // USER ID
      if (userId) {
        formData.append("userId", userId);
      }

      // API CALL
      await axios.post(
        API.updateProfile,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      alert(
        "Profile Updated Successfully"
      );

      router.push("/");
    } catch (err) {
      console.error(
        "Profile Update Error:",
        err
      );

      alert("Failed to update profile");
    }
  };

  return (
    <div className="min-h-screen  py-10 px">
      {/* MAIN CARD */}
      <div className="max-w-5xl mx-auto bg-white  rounded-md overflow-hidden">
        
        {/* TOP HEADER */}
        <div className="bg-[#d9edf7] h-40 flex items-center px-10">
          <h1 className="text-5xl font-light text-gray-800">
            Edit information
          </h1>
        </div>

        {/* FORM */}
        <div className="p-10">
          
          {/* TITLE */}
          <h2 className="text-2xl font-medium text-gray-700 mb-8">
            General information
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* FIRST NAME */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Legal first name *
              </label>

              <input
                type="text"
                className="w-full h-12 px-4 border border-gray-300 bg-gray-100 focus:bg-white focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  setFirstName(
                    e.target.value
                  )
                }
              />
            </div>

            {/* MIDDLE NAME */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Legal middle name
              </label>

              <input
                type="text"
                className="w-full h-12 px-4 border border-gray-300 bg-gray-100 focus:bg-white focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  setMiddleName(
                    e.target.value
                  )
                }
              />
            </div>

            {/* LAST NAME */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Legal last name *
              </label>

              <input
                type="text"
                className="w-full h-12 px-4 border border-gray-300 bg-gray-100 focus:bg-white focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  setLastName(
                    e.target.value
                  )
                }
              />
            </div>

            {/* PREFERRED NAME */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred name
              </label>

              <input
                type="text"
                className="w-full h-12 px-4 border border-gray-300 bg-gray-100 focus:bg-white focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  setPreferredName(
                    e.target.value
                  )
                }
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>

              <input
                type="text"
                className="w-full h-12 px-4 border border-gray-300 bg-gray-100 focus:bg-white focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  setPhoneNumber(
                    e.target.value
                  )
                }
              />
            </div>

            {/* SKILLS */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Skills
              </label>

              <input
                type="text"
                placeholder=""
                className="w-full h-12 px-4 border border-gray-300 bg-gray-100 focus:bg-white focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  setSkills(
                    e.target.value
                  )
                }
              />
            </div>

            {/* RESUME */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Resume
              </label>

              <input
                type="file"
                className="w-full border border-gray-300 p-3 bg-gray-100"
                onChange={(e) =>
                  setResume(
                    e.target.files?.[0] ||
                      null
                  )
                }
              />
            </div>

            {/* COVER LETTER */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Cover Letter
              </label>

              <input
                type="file"
                className="w-full border border-gray-300 p-3 bg-gray-100"
                onChange={(e) =>
                  setCoverLetterFile(
                    e.target.files?.[0] ||
                      null
                  )
                }
              />
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="mt-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Experience
            </label>

            <textarea
              rows={5}
              placeholder="Write your experience..."
              className="w-full p-4 border border-gray-300 bg-gray-100 focus:bg-white focus:outline-none focus:border-blue-500"
              onChange={(e) =>
                setExperience(
                  e.target.value
                )
              }
            />
          </div>

          {/* BUTTON */}
          <div className="mt-10">
            <button
              onClick={handleProfile}
              className="
                bg-blue-700
                hover:bg-blue-800
                text-white
                text-lg
                font-medium
                px-10
                py-3
                rounded
                transition
              "
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}