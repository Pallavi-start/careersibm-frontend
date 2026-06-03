export default function ApplicationsTable({
  applications,
  openResume,
}) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">
              Name
            </th>
            <th>Email</th>
            <th>Experience</th>
            <th>Status</th>
            <th>Resume</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr
              key={app._id}
              className="border-t"
            >
              <td className="p-3">
                {app.fullName}
              </td>

              <td>{app.email}</td>

              <td>
                {app.experience}
              </td>

              <td>
                <span className="px-2 py-1 rounded bg-yellow-100">
                  {app.status}
                </span>
              </td>

              <td>
                <button
                  className="text-blue-600"
                  onClick={() =>
                    openResume(
                      app.resume
                    )
                  }
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}