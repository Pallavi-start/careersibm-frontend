"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import api from "../lib/axios";

type UserType = {
  firstName?: string;
  lastName?: string;
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/api/get-profile");
        setUser(res.data.user);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <div className="border-b border-gray-200 bg-[#dcecf7]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex justify-between items-center">

    {/* LEFT HERO TEXT */}
    <div>

      <h1 className="text-4xl lg:text-5xl font-light leading-tight text-gray-900">

        Lets find you the right
        <br />
        job

      </h1>

      <p className="text-base text-gray-600 mt-4 max-w-xl leading-7">

        Join our Talent Network and get notified
        about opportunities.

      </p>

      <button className="text-blue-700 text-base mt-4 font-medium hover:underline">

        Join Talent Network


      </button>

    </div>

    {/* RIGHT HEADER PROFILE */}
    <div className="flex items-center gap-4">

      <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm capitalize text-gray-700 font-medium mt-1">
                {user?.firstName} {user?.lastName}
              </p>
            </div>

            <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center">
              {user?.firstName?.charAt(0)?.toUpperCase()}
            </div>
          </div>

      {/* PROFILE IMAGE */}
     

    </div>

  </div>

</div>

      {/* NAVIGATION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10">

        <div className="flex gap-8 border-b border-gray-200 pb-4 text-base overflow-x-auto whitespace-nowrap text-gray-700">

          <Link
            href="/search-jobs"
            className="hover:text-blue-600 transition"
          >
            Job search
          </Link>

          <Link
            href="/your-information"
            className="hover:text-blue-600 transition"
          >
            Your information
          </Link>

          <Link
            href="/your-job"
            className="hover:text-blue-600 transition"
          >
            Your jobs
          </Link>

          <Link
            href="/your-application"
            className="hover:text-blue-600 transition"
          >
            Your applications
          </Link>

          <Link
            href="/dashboard/alerts"
            className="hover:text-blue-600 transition"
          >
            My offer
          </Link>

        </div>

      </div>

      {/* PAGE CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        {children}

      </div>

    </div>
  );
}