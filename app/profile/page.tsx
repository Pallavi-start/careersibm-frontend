"use client";

import { useState } from "react";
import { API } from "../lib/api";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ProfilePage() {

  const router = useRouter();

  // FILES
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);

  // USER INFO
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [preferredName, setPreferredName] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");

  const userId =
    typeof window !== "undefined"
      ? localStorage.getItem("userId")
      : null;

  const handleProfile = async () => {

    try {

      const formData = new FormData();

      // ✅ FILES
      if (resume) {
        formData.append("resume", resume);
      }

      if (coverLetterFile) {
        formData.append(
          "coverLetter",
          coverLetterFile
        );
      }

      // ✅ USER DETAILS
      formData.append("firstName", firstName);
      formData.append("middleName", middleName);
      formData.append("lastName", lastName);
      formData.append("preferredName", preferredName);

      formData.append("phoneNumber", phoneNumber);

      // ✅ SKILLS ARRAY
      formData.append(
        "skills",
        JSON.stringify(
          skills
            .split(",")
            .map((skill) => skill.trim())
        )
      );

      formData.append("experience", experience);

      // ✅ USER ID
      if (userId) {
        formData.append("userId", userId);
      }

      // ✅ API CALL
      await axios.post(
        API.updateProfile,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Profile Updated Successfully");

      router.push("/dashboard");

    } catch (err) {

      console.error(
        "Profile Update Error:",
        err
      );

      alert("Failed to update profile");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">

      <h1 className="text-2xl font-semibold mb-6">
        Complete Your Profile
      </h1>

      <div className="space-y-4">

        {/* FIRST NAME */}
        <input
          className="w-full border p-2 rounded"
          placeholder="First Name"
          onChange={(e) =>
            setFirstName(e.target.value)
          }
        />

        {/* MIDDLE NAME */}
        <input
          className="w-full border p-2 rounded"
          placeholder="Middle Name"
          onChange={(e) =>
            setMiddleName(e.target.value)
          }
        />

        {/* LAST NAME */}
        <input
          className="w-full border p-2 rounded"
          placeholder="Last Name"
          onChange={(e) =>
            setLastName(e.target.value)
          }
        />

        {/* PREFERRED NAME */}
        <input
          className="w-full border p-2 rounded"
          placeholder="Preferred Name"
          onChange={(e) =>
            setPreferredName(e.target.value)
          }
        />

        {/* PHONE NUMBER */}
        <input
          className="w-full border p-2 rounded"
          placeholder="Phone Number"
          onChange={(e) =>
            setPhoneNumber(e.target.value)
          }
        />

        {/* RESUME */}
        <div>
          <label className="block mb-1 text-sm">
            Upload Resume
          </label>

          <input
            type="file"
            onChange={(e) =>
              setResume(
                e.target.files?.[0] || null
              )
            }
          />
        </div>

        {/* COVER LETTER */}
        <div>
          <label className="block mb-1 text-sm">
            Upload Cover Letter
          </label>

          <input
            type="file"
            onChange={(e) =>
              setCoverLetterFile(
                e.target.files?.[0] || null
              )
            }
          />
        </div>

        {/* SKILLS */}
        <input
          className="w-full border p-2 rounded"
          placeholder="Skills (comma separated)"
          onChange={(e) =>
            setSkills(e.target.value)
          }
        />

        {/* EXPERIENCE */}
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Experience"
          onChange={(e) =>
            setExperience(e.target.value)
          }
        />

        {/* BUTTON */}
        <button
          onClick={handleProfile}
          className="
            w-full
            bg-blue-600
            text-white
            py-2
            rounded
            hover:bg-blue-700
          "
        >
          Save Profile
        </button>

      </div>
    </div>
  );
}