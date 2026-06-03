"use client";

import { useState } from "react";
import { API } from "../lib/api";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ProfilePage() {

  const router = useRouter();

  // FILES
  const [resume, setResume] =
    useState<File | null>(null);

  const [coverLetterFile, setCoverLetterFile] =
    useState<File | null>(null);
   const [documents, setDocuments] =
  useState<FileList | null>(null); 

  // USER INFO
  const [firstName, setFirstName] =
    useState("");

  const [middleName, setMiddleName] =
    useState("");

  const [lastName, setLastName] =
    useState("");

  const [preferredName, setPreferredName] =
    useState("");

  const [phoneNumber, setPhoneNumber] =
    useState("");
const [email, setEmail] =
  useState("");
  const [skills, setSkills] =
    useState("");

  const [experience, setExperience] =
    useState("");

  // ADDRESS
  const [stateName, setStateName] =
    useState("");

  const [city, setCity] =
    useState("");

  const [addressLine1, setAddressLine1] =
    useState("");

  const [addressLine2, setAddressLine2] =
    useState("");

  const [zipCode, setZipCode] =
    useState("");

  const [website, setWebsite] =
    useState("");

  // WORK HISTORY
  const [workHistory, setWorkHistory] =
    useState([
      {
        company: "",
        positionTitle: "",
        currentPosition: "",
        startDate: "",
      },
    ]);

  // EDUCATION
  const [
    educationHistory,
    setEducationHistory,
  ] = useState([
    {
      degreeName: "",
      degreeType: "",
      university: "",
      startDate: "",
      endDate: "",
    },
  ]);

  // LANGUAGES
  const [languages, setLanguages] =
    useState([
      {
        language: "",
        writtenLevel: "",
        spokenLevel: "",
      },
    ]);

  const userId =
    typeof window !== "undefined"
      ? localStorage.getItem("userId")
      : null;

  const handleProfile = async () => {

    try {

      const formData = new FormData();

      // FILES
      if (resume) {
        formData.append(
          "resume",
          resume
        );
      }

      if (coverLetterFile) {
        formData.append(
          "coverLetter",
          coverLetterFile
        );
      }
if (documents) {

  for (
    let i = 0;
    i < documents.length;
    i++
  ) {
    formData.append(
      "documents",
      documents[i]
    );
  }
}
      // BASIC INFO
      formData.append(
        "firstName",
        firstName
      );

      formData.append(
        "middleName",
        middleName
      );

      formData.append(
        "lastName",
        lastName
      );

      formData.append(
        "preferredName",
        preferredName
      );

      formData.append(
        "phoneNumber",
        phoneNumber
      );

      formData.append(
        "skills",
        skills
      );

      formData.append(
        "experience",
        experience
      );
     formData.append(
        "email",
        email
     );
      // ADDRESS
      formData.append(
        "state",
        stateName
      );

      formData.append(
        "city",
        city
      );

      formData.append(
        "addressLine1",
        addressLine1
      );

      formData.append(
        "addressLine2",
        addressLine2
      );

      formData.append(
        "zipCode",
        zipCode
      );

      formData.append(
        "website",
        website
      );

      // ARRAY DATA
      formData.append(
        "workHistory",
        JSON.stringify(workHistory)
      );

      formData.append(
        "educationHistory",
        JSON.stringify(
          educationHistory
        )
      );

      formData.append(
        "languages",
        JSON.stringify(languages)
      );

      // USER ID
      if (userId) {
        formData.append(
          "userId",
          userId
        );
      }

      // API
      await axios.post(
        API.updateProfile,
        formData,
        {
         
        }
      );

      // SAVE LOCAL STORAGE
      localStorage.setItem(
        "user",
        JSON.stringify({
          firstName,
          middleName,
          lastName,
          preferredName,
          phoneNumber,
          email,
          skills,
          experience,

          state: stateName,
          city,
          addressLine1,
          addressLine2,
          zipCode,
          website,

          workHistory,
          educationHistory,
          languages,
        })
      );

      alert(
        "Profile Updated Successfully"
      );

      router.push(
        "/your-information"
      );

    } catch (err) {

      console.log(err);

      alert(
        "Failed to update profile"
      );
    }
  };

  return (
    <div className="min-h-screen py-10 ">

      <div className="max-w-6xl mx-auto bg-white">

        {/* HEADER */}
        <div className="bg-[#d9edf7] h-40 flex items-center px-10">

          <h1 className="text-5xl font-light">
            Edit information
          </h1>

        </div>

        {/* BODY */}
        <div className="p-10">

          <h2 className="text-3xl mb-10">
            General Information
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="First Name"
              className="h-12 border px-4 bg-gray-100"
              onChange={(e) =>
                setFirstName(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Middle Name"
              className="h-12 border px-4 bg-gray-100"
              onChange={(e) =>
                setMiddleName(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Last Name"
              className="h-12 border px-4 bg-gray-100"
              onChange={(e) =>
                setLastName(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Preferred Name"
              className="h-12 border px-4 bg-gray-100"
              onChange={(e) =>
                setPreferredName(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="h-12 border px-4 bg-gray-100"
              onChange={(e) =>
                setPhoneNumber(
                  e.target.value
                )
              }
            />
             <input
  type="email"
  placeholder="Email"
  className="h-12 border px-4 bg-gray-100"
  onChange={(e) =>
    setEmail(e.target.value)
  }
/>
            <input
              type="text"
              placeholder="Skills"
              className="h-12 border px-4 bg-gray-100"
              onChange={(e) =>
                setSkills(
                  e.target.value
                )
              }
            />

          </div>

          {/* ADDRESS */}
          <h2 className="text-3xl mt-14 mb-8">
            Address
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="State"
              className="h-12 border px-4 bg-gray-100"
              onChange={(e) =>
                setStateName(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="City"
              className="h-12 border px-4 bg-gray-100"
              onChange={(e) =>
                setCity(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Address Line 1"
              className="h-12 border px-4 bg-gray-100"
              onChange={(e) =>
                setAddressLine1(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Address Line 2"
              className="h-12 border px-4 bg-gray-100"
              onChange={(e) =>
                setAddressLine2(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Zip Code"
              className="h-12 border px-4 bg-gray-100"
              onChange={(e) =>
                setZipCode(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Website"
              className="h-12 border px-4 bg-gray-100"
              onChange={(e) =>
                setWebsite(
                  e.target.value
                )
              }
            />

          </div>

          {/* EXPERIENCE */}
          <div className="mt-10">

            <textarea
              rows={5}
              placeholder="Experience"
              className="w-full border p-4 bg-gray-100"
              onChange={(e) =>
                setExperience(
                  e.target.value
                )
              }
            />

          </div>

          {/* WORK HISTORY */}
          <div className="mt-14">

            <h2 className="text-3xl mb-6">
              Work History
            </h2>

            {workHistory.map(
              (work, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 mb-6"
                >

                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full h-12 border px-4 mb-4"
                    onChange={(e) => {

                      const updated =
                        [...workHistory];

                      updated[index].company =
                        e.target.value;

                      setWorkHistory(
                        updated
                      );
                    }}
                  />

                  <input
                    type="text"
                    placeholder="Position Title"
                    className="w-full h-12 border px-4 mb-4"
                    onChange={(e) => {

                      const updated =
                        [...workHistory];

                      updated[
                        index
                      ].positionTitle =
                        e.target.value;

                      setWorkHistory(
                        updated
                      );
                    }}
                  />

                  <select
                    className="w-full h-12 border px-4 mb-4"
                    onChange={(e) => {

                      const updated =
                        [...workHistory];

                      updated[
                        index
                      ].currentPosition =
                        e.target.value;

                      setWorkHistory(
                        updated
                      );
                    }}
                  >
                    <option>
                      Current Position?
                    </option>

                    <option>
                      Yes
                    </option>

                    <option>
                      No
                    </option>

                  </select>

                  <input
                    type="date"
                    className="w-full h-12 border px-4"
                    onChange={(e) => {

                      const updated =
                        [...workHistory];

                      updated[
                        index
                      ].startDate =
                        e.target.value;

                      setWorkHistory(
                        updated
                      );
                    }}
                  />

                </div>
              )
            )}

            <button
              type="button"
              className="text-blue-600"
              onClick={() =>
                setWorkHistory([
                  ...workHistory,
                  {
                    company: "",
                    positionTitle: "",
                    currentPosition:
                      "",
                    startDate: "",
                  },
                ])
              }
            >
              + Add Another
            </button>

          </div>

          {/* EDUCATION */}
          <div className="mt-14">

            <h2 className="text-3xl mb-6">
              Education History
            </h2>

            {educationHistory.map(
              (edu, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 mb-6"
                >
<input
  type="text"
  placeholder="Degree Name"
  className="w-full h-12 border px-4 mb-4"
  onChange={(e) => {

    const updated = [
      ...educationHistory,
    ];

    updated[index].degreeName =
      e.target.value;

    setEducationHistory(updated);
  }}
/>

<input
  type="text"
  placeholder="Degree Type"
  className="w-full h-12 border px-4 mb-4"
  onChange={(e) => {

    const updated = [
      ...educationHistory,
    ];

    updated[index].degreeType =
      e.target.value;

    setEducationHistory(updated);
  }}
/>

<input
  type="text"
  placeholder="University"
  className="w-full h-12 border px-4 mb-4"
  onChange={(e) => {

    const updated = [
      ...educationHistory,
    ];

    updated[index].university =
      e.target.value;

    setEducationHistory(updated);
  }}
/>

<input
  type="date"
  className="w-full h-12 border px-4 mb-4"
  onChange={(e) => {

    const updated = [
      ...educationHistory,
    ];

    updated[index].startDate =
      e.target.value;

    setEducationHistory(updated);
  }}
/>

<input
  type="date"
  className="w-full h-12 border px-4"
  onChange={(e) => {

    const updated = [
      ...educationHistory,
    ];

    updated[index].endDate =
      e.target.value;

    setEducationHistory(updated);
  }}
/>

                </div>
              )
            )}

          </div>

          {/* LANGUAGE */}
          <div className="mt-14">

            <h2 className="text-3xl mb-6">
              Languages
            </h2>

            {languages.map(
              (lang, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 mb-6"
                >
<input
  type="text"
  placeholder="Language"
  className="w-full h-12 border px-4 mb-4"
  onChange={(e) => {

    const updated = [...languages];

    updated[index].language =
      e.target.value;

    setLanguages(updated);
  }}
/>

<input
  type="text"
  placeholder="Written Level"
  className="w-full h-12 border px-4 mb-4"
  onChange={(e) => {

    const updated = [...languages];

    updated[index].writtenLevel =
      e.target.value;

    setLanguages(updated);
  }}
/>

<input
  type="text"
  placeholder="Spoken Level"
  className="w-full h-12 border px-4"
  onChange={(e) => {

    const updated = [...languages];

    updated[index].spokenLevel =
      e.target.value;

    setLanguages(updated);
  }}
/>
                </div>
              )
            )}

          </div>

          {/* FILES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <div>
              <label className="block mb-3 text-lg">
              Upload resume
             </label>
               <input
              type="file"
              className="border p-3 bg-gray-100"
              onChange={(e) =>
                setResume(
                  e.target.files?.[0] ||
                    null
                )
              }
            />
            {resume && (
  <p className="text-green-600 text-sm mt-2">
    Selected: {resume.name}
  </p>
)}
            </div>
           
            <div>
              <label className="block mb-3 text-lg">
              Upload CoverLetter
             </label>
                 <input
              type="file"
              className="border p-3 bg-gray-100"
              onChange={(e) =>
                setCoverLetterFile(
                  e.target.files?.[0] ||
                    null
                )
              }
            />
            </div>
         
            {coverLetterFile && (
       <p className="text-green-600 text-sm mt-2">
         Selected: {coverLetterFile.name}
       </p>
         )}
          </div>
<div className="mt-10">

  <label className="block mb-3 text-lg">
    Upload Documents
  </label>

  <input
    type="file"
    multiple
    className="border p-3 bg-gray-100 w-full"
    onChange={(e) =>
      setDocuments(e.target.files)
    }
  />
  {documents && (
  <p className="text-green-600 text-sm mt-2">
    {documents.length} files selected
  </p>
)}

</div>
          {/* BUTTON */}
          <div className="mt-12">

            <button
              onClick={handleProfile}
              className="bg-blue-700 text-white px-10 py-3"
            >
              Save Profile
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}