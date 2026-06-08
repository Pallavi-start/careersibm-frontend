"use client";

import { API } from "../lib/api";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";
import api from "../lib/axios";

export default function ProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // FORM STATES
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [preferredName, setPreferredName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState("");
  const [stateName, setStateName] = useState("");
  const [city, setCity] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [website, setWebsite] = useState("");

 type WorkHistory = {
  company?: string;
  positionTitle?: string;
  currentPosition?: string;
  startDate?: string;
};

const [workHistory, setWorkHistory] = useState<WorkHistory[]>([]);
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

const [educationHistory, setEducationHistory] = useState<EducationHistory[]>([]);
const [languages, setLanguages] = useState<Language[]>([]);

  const [resume, setResume] = useState(null);
  const [coverLetterFile, setCoverLetterFile] = useState(null);
  const [documents, setDocuments] = useState(null);

  // FETCH USER
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/api/get-profile",
        );

        const data = res.data.user;
        
        setUser(data);

        setFirstName(data.firstName || "");
        setMiddleName(data.middleName || "");
        setLastName(data.lastName || "");
        setPreferredName(data.preferredName || "");
        setPhoneNumber(data.phoneNumber || "");
        setEmail(data.email || "");
       setSkills(Array.isArray(data.skills) ? data.skills : []);
        setExperience(data.experience || "");
        setStateName(data.state || "");
        setCity(data.city || "");
        setAddressLine1(data.addressLine1 || "");
        setAddressLine2(data.addressLine2 || "");
        setZipCode(data.zipCode || "");
        setWebsite(data.website || "");
        setWorkHistory(data.workHistory || []);
        setEducationHistory(data.educationHistory || []);
        setLanguages(data.languages || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

 
    const isDifferent = (a, b) =>
    JSON.stringify(a ?? "") !== JSON.stringify(b ?? "");
   
  const isDifferentArray = (a, b) =>
  JSON.stringify(a || []) !== JSON.stringify(b || []);
 
  const handleProfile = async () => {
    try {
      if (!user) return;

      const formData = new FormData();

      // BASIC INFO
      if (isDifferent(firstName, user.firstName))
        formData.append("firstName", firstName);

      if (isDifferent(middleName, user.middleName))
        formData.append("middleName", middleName);

      if (isDifferent(lastName, user.lastName))
        formData.append("lastName", lastName);

      if (isDifferent(preferredName, user.preferredName))
        formData.append("preferredName", preferredName);

      if (isDifferent(phoneNumber, user.phoneNumber))
        formData.append("phoneNumber", phoneNumber);

      if (isDifferent(email, user.email))
        formData.append("email", email);

     if (isDifferent(skills, user.skills))
  formData.append("skills", JSON.stringify(skills));

      if (isDifferent(experience, user.experience))
        formData.append("experience", experience);

      // ADDRESS
      if (isDifferent(stateName, user.state))
        formData.append("state", stateName);

      if (isDifferent(city, user.city))
        formData.append("city", city);

      if (isDifferent(addressLine1, user.addressLine1))
        formData.append("addressLine1", addressLine1);

      if (isDifferent(addressLine2, user.addressLine2))
        formData.append("addressLine2", addressLine2);

      if (isDifferent(zipCode, user.zipCode))
        formData.append("zipCode", zipCode);

      if (isDifferent(website, user.website))
        formData.append("website", website);

    
       if (isDifferentArray(workHistory, user.workHistory)) {
         formData.append("workHistory", JSON.stringify(workHistory));
        }

      if (isDifferentArray(educationHistory, user.educationHistory)) {
       formData.append("educationHistory", JSON.stringify(educationHistory));
        }

      if (isDifferentArray(languages, user.languages)) {
  formData.append("languages", JSON.stringify(languages));
}

      // FILES
      if (resume) formData.append("resume", resume);
      if (coverLetterFile) formData.append("coverLetter", coverLetterFile);

      if (documents) {
        for (let i = 0; i < documents.length; i++) {
          formData.append("documents", documents[i]);
        }
      }

      // API CALL
     await api.post(API.updateProfile, formData);

      alert("Profile Updated Successfully");

      router.refresh();
      router.push("/dashboard/your-information");
    } catch (err) {
      console.log(err);
      alert("Failed to update profile");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user found</div>;
 
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
  value={firstName}
  placeholder="First Name"
 className="h-12 border px-4 bg-gray-100"
  onChange={(e) =>
    setFirstName(e.target.value)
  }
/>

            <input
              type="text"
              value={middleName}
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
              value={lastName}
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
              value={preferredName}
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
              value={phoneNumber}
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
             value={email}
             placeholder="Email"
            className="h-12 border px-4 bg-gray-100"
             onChange={(e) =>
    setEmail(e.target.value)
  }
/>
            <input
              type="text"
             value={skills.join(", ")}
onChange={(e) =>
  setSkills(
    e.target.value.split(",").map(s => s.trim())
  )

}
              placeholder="Skills"
              className="h-12 border px-4 bg-gray-100"
            
              
            />

          </div>

          {/* ADDRESS */}
          <h2 className="text-3xl mt-14 mb-8">
            Address
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="text"
              value={stateName}
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
              value={city}
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
              value={addressLine1}
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
              value={addressLine2}
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
              value={zipCode}
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
              value={website}
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
              value={experience}
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
                    value={work.company || ""}
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
                    value={work.positionTitle ||""}
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
                    value={work.startDate || ""}
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
  value={edu.degreeName || ""}
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
  value={edu.degreeType ||""}
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
  value={edu.university}
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
  value={edu.startDate || ""}
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
  value={edu.endDate || ""}
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
           <button
  type="button"
  className="text-blue-600"
  onClick={() =>
    setEducationHistory([
      ...educationHistory,
      {
        degreeName: "",
        degreeType: "",
        university: "",
        startDate: "",
        endDate: "",
      },
    ])
  }
>
  + Add Education
</button>
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
  value={lang.language}
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
  value={lang.writtenLevel}
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
  value={lang.spokenLevel}
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
            <button
  type="button"
  className="text-blue-600"
  onClick={() =>
    setLanguages([
      ...languages,
      {
        language: "",
        writtenLevel: "",
        spokenLevel: "",
      },
    ])
  }
>
  + Add Language
</button>
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