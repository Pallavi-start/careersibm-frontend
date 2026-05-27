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
   <div className="min-h-screen flex bg-white overflow-hidden  origin-top m-0 p-0 w-full">

  {/* LEFT SIDE */}
  <div className="hidden md:flex w-[55%] bg-[#e8f4ff] flex-col justify-between px-8 py-5">

    <div>

      <h1 className="text-[22px] font-[400] text-black leading-tight">
        Come apply like an IBMer.
      </h1>

      <p className="mt-8 text-[15px] leading-[26px] text-black max-w-[580px]">
        Here you can view your application
        status, set up job alerts and
        update your information as you
        move through our hiring process.
      </p>

    </div>

    {/* IBM STYLE IMAGE */}
    <div className="w-full flex items-center justify-center pb-6">

      <div className="w-[80%] h-[430px] bg-[#acd4ef] relative overflow-hidden">

        {/* TOP BAR */}
        <div className="absolute top-8 left-6 flex items-center gap-4">
          <div className="w-12 h-6 bg-[#71b5ea]"></div>
          <div className="w-36 h-6 bg-[#71b5ea]"></div>
        </div>

        {/* PURPLE BLOCK */}
        <div className="absolute top-44 left-0 w-[75%] h-[130px] bg-[#c9b0f2]"></div>

        {/* SECOND PURPLE */}
        <div className="absolute top-[280px] left-0 w-[64%] h-[120px] bg-[#b18aed]"></div>

        {/* BLUE CARD */}
        <div className="absolute bottom-0 left-0 w-[52%] h-[140px] bg-[#4b80e7]">

          <div className="absolute left-16 top-12 w-12 h-12 border-4 border-white"></div>

          <div className="absolute left-28 top-20 w-10 h-1 bg-white"></div>

          <div className="absolute left-40 top-12 w-0 h-0 border-t-[22px] border-t-transparent border-b-[22px] border-b-transparent border-l-[34px] border-l-white"></div>

          <div className="absolute left-56 top-10 w-14 h-14 rounded-full border-4 border-white"></div>

          <div className="absolute left-[255px] top-24 w-1 h-16 bg-white"></div>

          <div className="absolute left-[235px] bottom-5 w-10 h-10 rounded-full border-4 border-white"></div>

        </div>

        {/* SMALL PURPLE PIXELS */}
        <div className="absolute top-[160px] right-24 flex flex-col">
          <div className="w-5 h-5 bg-[#9a55f3]"></div>
          <div className="w-5 h-5 bg-[#b278ff] ml-5"></div>
          <div className="w-3 h-3 bg-[#c695ff] ml-10"></div>
        </div>

      </div>

    </div>

  </div>

  {/* RIGHT SIDE */}
  <div className="w-full md:w-[45%] bg-[#f4f4f4] px-10 py-5 overflow-y-auto">

    {/* HEADER */}
    <h1 className="text-[28px] font-[400] text-black">
      Create an IBMid
    </h1>

    <p className="mt-2 text-[13px] text-black">

      Already have an IBM account?{" "}

      <span
        onClick={() => router.push("/login")}
        className="text-[#0f62fe] cursor-pointer hover:underline"
      >
        Log in
      </span>

    </p>

    {/* GOOGLE */}
    <div className="flex justify-end mt-8">

      <button
        className="
          border
          border-[#0f62fe]
          h-[48px]
          px-5
          flex
          items-center
          gap-4
          text-[#0f62fe]
          hover:bg-blue-50
        "
      >
        <span className="text-[15px]">
          Sign up with Google
        </span>

        <FcGoogle size={24} />
      </button>

    </div>

    {/* DIVIDER */}
    <div className="border-t border-gray-300 mt-6"></div>

    {/* ACCOUNT INFO */}
    <div className="mt-5 flex items-center justify-between">

      <div className="flex items-center gap-3">

        <div className="w-4 h-4 rounded-full border-[4px] border-[#0f62fe]"></div>

        <h2 className="text-[18px] font-[400]">
          Account information
        </h2>

      </div>

      <span className="text-xl">
        ˄
      </span>

    </div>

    {/* FORM */}
    <div className="mt-10">

      {/* EMAIL + PASSWORD */}
      <div className="grid grid-cols-2 gap-8">

        <div>

          <label className="text-[12px] text-gray-700">
            Email
          </label>

          <input
            type="email"
            className="
              w-full
              h-[46px]
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

          <label className="text-[12px] text-gray-700">
            Password
          </label>

          <input
            type="password"
            className="
              w-full
              h-[46px]
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
      <div className="grid grid-cols-2 gap-8 mt-10">

        <div>

          <label className="text-[12px] text-gray-700">
            First name
          </label>

          <input
            className="
              w-full
              h-[46px]
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

          <label className="text-[12px] text-gray-700">
            Last name
          </label>

          <input
            className="
              w-full
              h-[46px]
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
      <div className="mt-10 max-w-[50%]">

        <label className="text-[12px] text-gray-700">
          Country or region of residence
        </label>

        <input
          type="text"
          placeholder="Enter country"
          className="
            w-full
            h-[46px]
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
        <p className="text-red-500 mt-5 text-sm">
          {error}
        </p>
      )}

      {/* BUTTON */}
      <button
        onClick={handleSignup}
        disabled={loading}
        className="
          mt-8
          w-[50%]
          h-[48px]
          border
          border-[#0f62fe]
          text-[#0f62fe]
          hover:bg-blue-50
          transition
          text-[15px]
        "
      >
        {loading ? "Creating..." : "Next"}
      </button>

      {/* VERIFY */}
      <div className="border-t border-gray-300 mt-12 pt-4 flex items-center justify-between opacity-40">

        <div className="flex items-center gap-3">

          <div className="w-4 h-4 rounded-full border border-gray-400 border-dashed"></div>

          <span className="text-[16px]">
            Verify email
          </span>

        </div>

        <span className="text-lg">
          ˅
        </span>

      </div>

    </div>

  </div>

</div>
  );
}