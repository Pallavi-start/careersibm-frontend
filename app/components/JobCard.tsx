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
  return (
    <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{job.title}</h2>

      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>₹ {job.salary}</p>

      <button
        onClick={() => setShowForm(true)}
        className="mt-3 bg-black text-white px-4 py-2 rounded"
      >
        Apply Now
      </button>
    </div>
  );
}