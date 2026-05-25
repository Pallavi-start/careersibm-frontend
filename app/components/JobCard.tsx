"use client";

import { useRouter } from "next/navigation";

type JobProps = {
  job: {
    _id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
  };
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function JobCard({ job, setShowForm }: JobProps) {
  const router = useRouter();

  const handleApply = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      router.push("/login");
      return;
    }

    setShowForm(true);   // popup opens
  };

  return (
    <div className="border bg-white p-6 min-h-[320px]">
      <p>{job.company}</p>

      <h2 className="text-3xl font-light mt-3 mb-20">
        {job.title}
      </h2>

      <p>{job.location}</p>
      <p>₹ {job.salary}</p>

      <button
        onClick={handleApply}
        className="text-blue-600 text-4xl mt-6"
      >
        →
      </button>
    </div>
  );
}