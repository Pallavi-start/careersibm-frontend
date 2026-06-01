"use client";

import { useMemo } from "react";

type Application = {
  _id?: string;
  jobTitle?: string;
  company?: string;
  location?: string;
  status?: string;
  createdAt?: string;
};

export default function ApplicationsPage() {

  // NO useEffect + NO setState
  // prevents cascading render warning

  const applications: Application[] =
    useMemo(() => {

      if (
        typeof window ===
        "undefined"
      ) {
        return [];
      }

      const saved =
        localStorage.getItem(
          "applications"
        );

      return saved
        ? JSON.parse(saved)
        : [];

    }, []);

  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="mb-12">

        <h1 className="text-4xl font-light text-gray-900">

          Your applications

        </h1>

        <p className="text-gray-500 mt-3">

          View jobs you applied for

        </p>

      </div>

      {/* EMPTY */}
      {applications.length === 0 && (

        <div className="border border-dashed border-gray-300 p-14 text-center">

          <h2 className="text-2xl font-light">

            No applications yet

          </h2>

          <p className="text-gray-500 mt-3">

            Applied jobs will appear here

          </p>

        </div>

      )}

      {/* APPLICATIONS */}
      <div className="space-y-6">

        {applications.map(
          (app, index) => (

            <div
              key={index}
              className="border border-gray-200 p-8"
            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                {/* LEFT */}
                <div>

                  <h2 className="text-2xl font-medium text-gray-900">

                    {app.jobTitle ||
                      "-"}

                  </h2>

                  <p className="text-gray-600 mt-2">

                    {app.company ||
                      "IBM"}

                  </p>

                  <p className="text-sm text-gray-500 mt-1">

                    {app.location ||
                      "India"}

                  </p>

                </div>

                {/* RIGHT */}
                <div className="lg:text-right">

                  <p className="text-sm text-gray-500">

                    Applied On

                  </p>

                  <p className="mt-1">

                    {app.createdAt
                      ? new Date(
                          app.createdAt
                        ).toLocaleDateString()
                      : "-"}

                  </p>

                  <div className="mt-4 inline-block border border-blue-600 text-blue-700 px-4 py-2 text-sm">

                    {app.status ||
                      "Submitted"}

                  </div>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
}