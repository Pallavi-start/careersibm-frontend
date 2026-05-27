"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API } from "../lib/api";
import { FcGoogle } from "react-icons/fc";

type SignupData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
};

export default function SignupPage() {

  const router = useRouter();

  const [form, setForm] =
    useState<Partial<SignupData>>({
      country: "India",
    });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSignup = async () => {

    try {

      setLoading(true);
      setError("");

      await axios.post(
        API.signup,
        form
      );

      router.push("/verify-otp");

    } catch (err: unknown) {

      if (axios.isAxiosError(err)) {

        setError(
          err.response?.data?.message ||
          "Signup failed"
        );

      } else {

        setError("Signup failed");
      }

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 bg-[#e8f4ff] flex-col justify-between px-10 py-6">

        <div>

          <h1 className="text-[28px] font-[400] text-black leading-tight">
            Come apply like an IBMer.
          </h1>

          <p className="mt-10 text-[18px] leading-[32px] text-black max-w-[680px]">
            Here you can view your application
            status, set up job alerts and
            update your information as you
            move through our hiring process.
          </p>

        </div>

        {/* IBM STYLE IMAGE */}
        <div className="w-full flex items-center justify-center pb-10">

          <div className="w-[88%] h-[520px] bg-[#acd4ef] relative overflow-hidden">

            {/* TOP BAR */}
            <div className="absolute top-10 left-8 flex items-center gap-5">
              <div className="w-14 h-7 bg-[#71b5ea]"></div>
              <div className="w-44 h-7 bg-[#71b5ea]"></div>
            </div>

            {/* PURPLE BLOCK */}
            <div className="absolute top-52 left-0 w-[75%] h-[160px] bg-[#c9b0f2]"></div>

            {/* SECOND PURPLE */}
            <div className="absolute top-[330px] left-0 w-[64%] h-[150px] bg-[#b18aed]"></div>

            {/* BLUE CARD */}
            <div className="absolute bottom-0 left-0 w-[52%] h-[170px] bg-[#4b80e7]">

              <div className="absolute left-20 top-16 w-14 h-14 border-4 border-white"></div>

              <div className="absolute left-32 top-24 w-12 h-1 bg-white"></div>

              <div className="absolute left-44 top-16 w-0 h-0 border-t-[28px] border-t-transparent border-b-[28px] border-b-transparent border-l-[42px] border-l-white"></div>

              <div className="absolute left-64 top-14 w-16 h-16 rounded-full border-4 border-white"></div>

              <div className="absolute left-[290px] top-28 w-1 h-20 bg-white"></div>

              <div className="absolute left-[270px] bottom-6 w-12 h-12 rounded-full border-4 border-white"></div>

            </div>

            {/* SMALL PURPLE PIXELS */}
            <div className="absolute top-[190px] right-32 flex flex-col">
              <div className="w-6 h-6 bg-[#9a55f3]"></div>
              <div className="w-6 h-6 bg-[#b278ff] ml-6"></div>
              <div className="w-3 h-3 bg-[#c695ff] ml-12"></div>
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 bg-[#f4f4f4] px-14 py-6 overflow-y-auto">

        {/* HEADER */}
        <h1 className="text-[34px] font-[400] text-black">
          Create an IBMid
        </h1>

        <p className="mt-2 text-[15px] text-black">

          Already have an IBM account?{" "}

          <span
            onClick={() => router.push("/login")}
            className="text-[#0f62fe] cursor-pointer hover:underline"
          >
            Log in
          </span>

        </p>

        {/* GOOGLE */}
        <div className="flex justify-end mt-10">

          <button
            className="
              border
              border-[#0f62fe]
              h-[58px]
              px-6
              flex
              items-center
              gap-5
              text-[#0f62fe]
              hover:bg-blue-50
            "
          >
            <span className="text-[18px]">
              Sign up with Google
            </span>

            <FcGoogle size={28} />
          </button>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 mt-8"></div>

        {/* ACCOUNT INFO */}
        <div className="mt-6 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-5 h-5 rounded-full border-[5px] border-[#0f62fe]"></div>

            <h2 className="text-[22px] font-[400]">
              Account information
            </h2>

          </div>

          <span className="text-2xl">
            ˄
          </span>

        </div>

        {/* FORM */}
        <div className="mt-14">

          {/* EMAIL + PASSWORD */}
          <div className="grid grid-cols-2 gap-10">

            <div>

              <label className="text-[14px] text-gray-700">
                Email
              </label>

              <input
                type="email"
                className="
                  w-full
                  h-[56px]
                  mt-2
                  px-4
                  bg-[#ececec]
                  border-b
                  border-gray-500
                  outline-none
                  focus:border-[#0f62fe]
                "
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />

            </div>

            <div>

              <label className="text-[14px] text-gray-700">
                Password
              </label>

              <input
                type="password"
                className="
                  w-full
                  h-[56px]
                  mt-2
                  px-4
                  bg-[#ececec]
                  border-b
                  border-gray-500
                  outline-none
                  focus:border-[#0f62fe]
                "
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
              />

            </div>

          </div>

          {/* FIRST + LAST */}
          <div className="grid grid-cols-2 gap-10 mt-12">

            <div>

              <label className="text-[14px] text-gray-700">
                First name
              </label>

              <input
                className="
                  w-full
                  h-[56px]
                  mt-2
                  px-4
                  bg-[#ececec]
                  border-b
                  border-gray-500
                  outline-none
                  focus:border-[#0f62fe]
                "
                onChange={(e) =>
                  setForm({
                    ...form,
                    firstName: e.target.value,
                  })
                }
              />

            </div>

            <div>

              <label className="text-[14px] text-gray-700">
                Last name
              </label>

              <input
                className="
                  w-full
                  h-[56px]
                  mt-2
                  px-4
                  bg-[#ececec]
                  border-b
                  border-gray-500
                  outline-none
                  focus:border-[#0f62fe]
                "
                onChange={(e) =>
                  setForm({
                    ...form,
                    lastName: e.target.value,
                  })
                }
              />

            </div>

          </div>

          {/* COUNTRY */}
          <div className="mt-12 max-w-[50%]">

  <label className="text-[14px] text-gray-700">
    Country or region of residence
  </label>

  <input
    type="text"
    placeholder="Enter country"
    className="
      w-full
      h-[58px]
      mt-2
      px-4
      bg-[#ececec]
      border-b
      border-gray-500
      outline-none
      focus:border-[#0f62fe]
    "
    onChange={(e) =>
      setForm({
        ...form,
        country: e.target.value,
      })
    }
  />

</div>

          {/* ERROR */}
          {error && (
            <p className="text-red-500 mt-6">
              {error}
            </p>
          )}

          {/* BUTTON */}
          <button
            onClick={handleSignup}
            disabled={loading}
            className="
              mt-10
              w-[50%]
              h-[58px]
              border
              border-[#0f62fe]
              text-[#0f62fe]
              hover:bg-blue-50
              transition
              text-[18px]
            "
          >
            {loading ? "Creating..." : "Next"}
          </button>

          {/* VERIFY */}
          <div className="border-t border-gray-300 mt-16 pt-5 flex items-center justify-between opacity-40">

            <div className="flex items-center gap-3">

              <div className="w-5 h-5 rounded-full border border-gray-400 border-dashed"></div>

              <span className="text-[20px]">
                Verify email
              </span>

            </div>

            <span className="text-xl">
              ˅
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}