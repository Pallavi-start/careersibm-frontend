"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import Image from "next/image";
import Link from "next/link";
import { API } from "../lib/api";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  // STEP CONTROL
  const [showPassword, setShowPassword] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  const [loading, setLoading] = useState(false);

  // STEP 1 → EMAIL
  const handleEmailContinue = () => {

    if (!email) {
      alert("Enter email");
      return;
    }

    setShowPassword(true);
  };

  // STEP 2 → PASSWORD LOGIN
  const handleLogin = async () => {

    if (!password) {
      alert("Enter password");
      return;
    }

    try {

      setLoading(true);

      const res = await axios.post(
        API.loginUser,
        {
          email,
          password,
        }
      );

      // OTP REQUIRED
      if (res.data.requireOtp) {
        setShowOTP(true);
        return;
      }

      // LOGIN SUCCESS
      const token = res.data.token;

      localStorage.setItem("token", token);

      router.push("/dashboard/your-information");

    } catch (err: unknown) {

      console.error("Login Error:", err);

      if (axios.isAxiosError(err)) {

        const message =
          err.response?.data?.message ||
          err.message ||
          "Something went wrong";

        alert(message);

      } else {

        alert("Something went wrong");
      }

    } finally {
      setLoading(false);
    }
  };

  // OTP VERIFY
  const verifyOTP = async () => {

    try {

      setLoading(true);

      const res = await axios.post(
        API.verifyOtpUser,
        {
          email,
          otp,
        }
      );

      const token = res.data.token;

      localStorage.setItem("token", token);

      alert("Login Successful");

      router.push("/dashboard/your-information");

    } catch (err) {

      console.log(err);

      alert("Invalid OTP");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex overflow-hidden">

      {/* LEFT SIDE */}
      <div className="w-full md:w-[34%] px-8 py-4 flex flex-col border-r border-gray-200 overflow-y-auto bg-white">

        {/* LOGO */}
        <div className="w-[110px] h-[50px] flex items-center justify-center">

          <Image
            src="/IBM.png"
            alt="IBM"
            width={120}
            height={40}
            priority
            style={{
              width: "auto",
              height: "auto",
            }}
          />

        </div>

        {/* TITLE */}
        <div className="mt-10">

          <h1 className="text-[32px] font-[300] leading-tight text-black">
            Log in to IBM
          </h1>

          <p className="mt-3 text-[14px] text-gray-700">
            Don’t have an account?{" "}

            <Link
              href="/signup"
              className="text-[#0f62fe] hover:underline"
            >
              Create an IBMid
            </Link>

          </p>

        </div>

        {/* FORM */}
        <div className="mt-10">

          {/* EMAIL FIELD */}
          <label className="text-[13px] text-gray-700">
            IBMid
          </label>

          <input
            type="email"
            value={email}
            disabled={showPassword}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              h-[50px]
              mt-2
              px-4
              bg-[#f4f4f4]
              border-b
              border-gray-500
              outline-none
              text-[14px]
              focus:border-[#0f62fe]
              disabled:opacity-70
            "
          />

          {/* PASSWORD FIELD */}
          {showPassword && !showOTP && (

            <div className="mt-5">

              <label className="text-[13px] text-gray-700">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full
                  h-[50px]
                  mt-2
                  px-4
                  bg-[#f4f4f4]
                  border-b
                  border-gray-500
                  outline-none
                  text-[14px]
                  focus:border-[#0f62fe]
                "
              />

            </div>
          )}

          {/* OTP FIELD */}
          {showOTP && (

            <div className="mt-5">

              <label className="text-[13px] text-gray-700">
                Enter OTP
              </label>

              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="
                  w-full
                  h-[50px]
                  mt-2
                  px-4
                  bg-[#f4f4f4]
                  border-b
                  border-gray-500
                  outline-none
                  text-[14px]
                  focus:border-[#0f62fe]
                "
              />

            </div>
          )}

          {/* BUTTONS */}
          {!showPassword && (

            <button
              onClick={handleEmailContinue}
              className="
                mt-6
                w-full
                h-[48px]
                bg-[#0f62fe]
                hover:bg-[#0353e9]
                transition
                text-white
                text-[14px]
                flex
                items-center
                justify-between
                px-5
              "
            >
              Continue
              <span className="text-[18px]">→</span>
            </button>
          )}

          {showPassword && !showOTP && (

            <button
              onClick={handleLogin}
              disabled={loading}
              className="
                mt-6
                w-full
                h-[48px]
                bg-[#0f62fe]
                hover:bg-[#0353e9]
                transition
                text-white
                text-[14px]
                flex
                items-center
                justify-between
                px-5
              "
            >
              {loading ? "Signing in..." : "Sign in"}
              <span className="text-[18px]">→</span>
            </button>
          )}

          {showOTP && (

            <button
              onClick={verifyOTP}
              disabled={loading}
              className="
                mt-6
                w-full
                h-[48px]
                bg-[#0f62fe]
                hover:bg-[#0353e9]
                transition
                text-white
                text-[14px]
                flex
                items-center
                justify-between
                px-5
              "
            >
              {loading ? "Verifying..." : "Verify OTP"}
              <span className="text-[18px]">→</span>
            </button>
          )}

        </div>

        {/* REMEMBER */}
        <div className="flex items-center gap-3 mt-6">

          <input
            type="checkbox"
            className="w-4 h-4 accent-[#0f62fe]"
          />

          <span className="text-[14px] text-gray-700">
            Remember me
          </span>

        </div>

        {/* GOOGLE */}
       
       
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex w-[66%] relative items-center justify-center overflow-hidden">

        {/* GRID */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,#bdbdbd_1.2px,transparent_1.2px)] [background-size:65px_65px]"></div>

        {/* BIG CIRCLE */}
        <div className="absolute w-[420px] h-[420px] border-2 border-gray-300 rounded-full right-[18%] top-[20%]"></div>

        {/* VERTICAL LINES */}
        <div className="absolute left-[22%] top-0 h-full w-[2px] bg-gray-300"></div>
        <div className="absolute left-[58%] top-0 h-full w-[2px] bg-gray-300"></div>

        {/* PURPLE SHAPES */}
        <div className="absolute top-[36%] left-[38%] flex items-center gap-5">
          <div className="w-20 h-20 bg-purple-300 rotate-45"></div>
          <div className="w-12 h-12 bg-purple-500 rotate-45"></div>
          <div className="w-8 h-8 bg-purple-700 rotate-45"></div>
        </div>

        {/* DOTS */}
        <div className="absolute left-[21%] top-[44%] flex flex-col gap-3">
          <div className="w-4 h-4 rounded-full bg-purple-700"></div>
          <div className="w-4 h-4 rounded-full bg-purple-500"></div>
          <div className="w-4 h-4 rounded-full bg-purple-300"></div>
        </div>

        <div className="absolute top-[8%] left-[58%] flex flex-col gap-3">
          <div className="w-4 h-4 rounded-full bg-purple-700"></div>
          <div className="w-4 h-4 rounded-full bg-purple-500"></div>
          <div className="w-4 h-4 rounded-full bg-purple-300"></div>
        </div>

        {/* BLUE SHAPES */}
        <div className="absolute left-[20%] top-[28%] flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rotate-45"></div>
          <div className="w-28 h-8 bg-blue-100 rounded-r-full flex items-center gap-2 px-3">
            <div className="w-8 h-8 rounded-full bg-blue-400"></div>
            <div className="w-8 h-8 rounded-full bg-blue-500"></div>
          </div>
        </div>

        <div className="absolute left-[48%] bottom-[24%] flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rotate-45"></div>
          <div className="w-28 h-8 bg-blue-100 rounded-r-full flex items-center gap-2 px-3">
            <div className="w-8 h-8 rounded-full bg-blue-400"></div>
            <div className="w-8 h-8 rounded-full bg-blue-500"></div>
          </div>
        </div>

      </div>
    </div>
  );
}