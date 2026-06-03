"use client";

export default function ProfileModal({
  profile,
  onClose,
}) {
  if (!profile) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Candidate Profile
          </h2>

          <button
            onClick={onClose}
            className="text-red-500 text-xl"
          >
            ✕
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <strong>Name:</strong>{" "}
            {profile.firstName}{" "}
            {profile.middleName}{" "}
            {profile.lastName}
          </div>

          <div>
            <strong>Email:</strong>{" "}
            {profile.email}
          </div>

          <div>
            <strong>Phone:</strong>{" "}
            {profile.phoneNumber}
          </div>

          <div>
            <strong>Preferred Name:</strong>{" "}
            {profile.preferredName}
          </div>

          <div>
            <strong>Experience:</strong>{" "}
            {profile.experience}
          </div>

          <div>
            <strong>Website:</strong>{" "}
            {profile.website}
          </div>
        </div>

        <hr className="my-5" />

        <h3 className="text-lg font-semibold mb-2">
          Address
        </h3>

        <p>
          {profile.addressLine1}
        </p>

        <p>
          {profile.addressLine2}
        </p>

        <p>
          {profile.city},{" "}
          {profile.state} -{" "}
          {profile.zipCode}
        </p>

        <hr className="my-5" />

        <h3 className="text-lg font-semibold mb-2">
          Skills
        </h3>

        <div className="flex flex-wrap gap-2">
          {profile.skills?.map(
            (skill, index) => (
              <span
                key={index}
                className="bg-blue-100 px-3 py-1 rounded"
              >
                {skill}
              </span>
            )
          )}
        </div>

        <hr className="my-5" />

        <h3 className="text-lg font-semibold mb-2">
          Work History
        </h3>

        {profile.workHistory?.map(
          (job, index) => (
            <div
              key={index}
              className="border p-3 rounded mb-3"
            >
              <p>
                <strong>
                  Company:
                </strong>{" "}
                {job.company}
              </p>

              <p>
                <strong>
                  Position:
                </strong>{" "}
                {
                  job.positionTitle
                }
              </p>

              <p>
                <strong>
                  Start Date:
                </strong>{" "}
                {job.startDate}
              </p>
            </div>
          )
        )}

        <hr className="my-5" />

        <h3 className="text-lg font-semibold mb-2">
          Education
        </h3>

        {profile.educationHistory?.map(
          (edu, index) => (
            <div
              key={index}
              className="border p-3 rounded mb-3"
            >
              <p>
                <strong>
                  Degree:
                </strong>{" "}
                {
                  edu.degreeName
                }
              </p>

              <p>
                <strong>
                  University:
                </strong>{" "}
                {
                  edu.university
                }
              </p>
            </div>
          )
        )}

        <button
          onClick={onClose}
          className="mt-5 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}