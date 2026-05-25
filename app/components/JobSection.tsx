"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
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

export default function JobSection({ setShowForm }: JobSectionProps){
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE}/api/jobs`)
      .then((res) => setJobs(res.data))
      .catch(console.log);
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    
      
    <div className="min-h-screen flex">
     
      {/* LEFT FILTER */}
      <div className="w-[300px] bg-white border-r p-6 hidden md:block">
        <h2 className="font-semibold text-xl mb-6">
          Filters
        </h2>

        <label className="block mb-4">
          <input type="checkbox" /> Hybrid
        </label>

        <label>
          <input type="checkbox" /> Remote only
        </label>
      </div>

      {/* RIGHT */}
      <div className="flex-1 p-8">

        {/* Search */}
        <div className="bg-white border p-4 flex items-center gap-4 mb-8">
          <Search />
          <input
            className="w-full outline-none text-xl"
            placeholder="Search jobs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <p className="mb-8">
          {filteredJobs.length} jobs found
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
             setShowForm={setShowForm}
            />
          ))}
        </div>
      </div>
    </div>
   
  );
}