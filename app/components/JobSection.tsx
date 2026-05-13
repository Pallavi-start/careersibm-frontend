"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";

type JobType = {
  _id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
};

type JobSectionProps = {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function JobSection({ setShowForm }: JobSectionProps) {
  const [jobs, setJobs] = useState<JobType[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs");
        setJobs(res.data);
      } catch (err) {
        console.log("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-6">Jobs</h1>

      <div className="grid grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
            setShowForm={setShowForm}
          />
        ))}
      </div>
    </section>
  );
}