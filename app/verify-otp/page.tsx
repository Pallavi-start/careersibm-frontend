"use client";

import { useState } from "react";
import { API } from "../lib/api";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function OTP() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const verify = async () => {

    try {

      setLoading(true);
      setError("");

  const res = await axios.post(
        API.verifyOtpUser,
        {
          email,
          otp,
        }
      );

      const token = res.data.token;

      localStorage.setItem("token", token);

      router.push("/dashboard/your-information");

    } catch (err: unknown) {

      if (axios.isAxiosError(err)) {

        setError(
          err.response?.data?.message ||
          "OTP verification failed"
        );

      } else {

        setError("OTP verification failed");
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
            Verify your IBMid.
          </h1>

          <p className="mt-10 text-[18px] leading-[32px] text-black max-w-[680px]">
            We sent a verification code to your
            registered email address. Enter the
            OTP below to activate your IBM account
            and continue your application process.
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
          Verify OTP
        </h1>

        <p className="mt-2 text-[15px] text-black">
          Enter the OTP sent to your email
        </p>

        {/* GOOGLE */}
        <div className="flex justify-end mt-10">

       

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 mt-8"></div>

        {/* VERIFY SECTION */}
        <div className="mt-6 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-5 h-5 rounded-full border-[5px] border-[#0f62fe]"></div>

            <h2 className="text-[22px] font-[400]">
              Email verification
            </h2>

          </div>

          <span className="text-2xl">
            ˄
          </span>

        </div>

        {/* FORM */}
        <div className="mt-14">

          {/* EMAIL */}
          <div>

            <label className="text-[14px] text-gray-700">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            />

          </div>

          {/* OTP */}
          <div className="mt-10">

            <label className="text-[14px] text-gray-700">
              OTP Code
            </label>

            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
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
            onClick={verify}
            disabled={loading}
            className="
              mt-10
              w-full
              h-[58px]
              border
              border-[#0f62fe]
              text-[#0f62fe]
              hover:bg-blue-50
              transition
              text-[18px]
            "
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          {/* RESEND */}
          <p className="mt-8 text-[15px] text-gray-600">

            Didn’t receive OTP?{" "}

            <span className="text-[#0f62fe] cursor-pointer hover:underline">
              Resend
            </span>

          </p>

          {/* NEXT STEP */}
          <div className="border-t border-gray-300 mt-16 pt-5 flex items-center justify-between opacity-40">

            <div className="flex items-center gap-3">

              <div className="w-5 h-5 rounded-full border border-gray-400 border-dashed"></div>

              <span className="text-[20px]">
                Account verified
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