"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const [showOTP, setShowOTP] = useState(false);

  // SEND OTP
  const handleLogin = async () => {
      if (!email) {
    alert("Enter email");
    return;
  }


    try {

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/user/send-otp`,
        { email }
      );

      alert(res.data.message);

      setShowOTP(true);

    } catch (err) {

      console.error("Login Error:", err);

      const message =
        err.response?.data?.message ||
        err.message ||
        "Something went wrong";

      alert(message);
    }
  };

  // VERIFY OTP
  const verifyOTP = async () => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/user/verify-otp`,
      {
        email,
        otp,
      }
    );

    const token = res.data.token;

    localStorage.setItem("token", token);

    // check profile
    const profileRes = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/profile/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Login Successful");

    if (profileRes.data.exists) {
      router.push("/"); // home page
    } else {
      router.push("/profile"); // create profile
    }

  } catch (err) {
    console.log(err);
    alert("Invalid OTP");
  }
};

  return (
    <div className="w-full min-h-screen flex overflow-hidden">

      {/* LEFT SIDE */}
      <div className="w-full md:w-[34%] px-8 py-4 flex flex-col border-r border-gray-200 overflow-y-auto">

        {/* IBM LOGO */}
        <div className="w-[110px] h-[50px]  flex items-center justify-center">
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
        <div className="mt-8">
          <h4 className="text-[30px] font-[300] text-black leading-tight tracking-[-0.5px]">
            Log in to IBM
          </h4>

          <p className="mt-2 text-[14px] text-gray-700">
            Don’t have an account?{" "}
            <span className="text-[#0f62fe] hover:underline cursor-pointer">
              Create an IBMid
            </span>
          </p>
        </div>

        {/* EMAIL INPUT */}
        {!showOTP && (
          <div className="mt-8">

            <label className="text-[13px] text-gray-700">
              IBMid
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                h-[48px]
                mt-2
                px-4
                bg-[#f2f2f2]
                border-b
                border-gray-500
                outline-none
                text-[14px]
                focus:border-[#0f62fe]
              "
            />

            <button
              onClick={handleLogin}
              className="
                mt-5
                w-full
                h-[46px]
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

          </div>
        )}

        {/* OTP INPUT */}
        {showOTP && (
          <div className="mt-8">

            <label className="text-[13px] text-gray-700">
              Enter OTP
            </label>

            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="
                w-full
                h-[48px]
                mt-2
                px-4
                bg-[#f2f2f2]
                border-b
                border-gray-500
                outline-none
                text-[14px]
                focus:border-[#0f62fe]
              "
            />

            <button
              onClick={verifyOTP}
              className="
                mt-5
                w-full
                h-[46px]
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
              Verify OTP
              <span className="text-[18px]">→</span>
            </button>

          </div>
        )}

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

        {/* GOOGLE LOGIN */}
        <div className="mt-8">

          <p className="text-[13px] text-gray-600 mb-3">
            Alternative login
          </p>

          <button
            className="
              w-full
              h-[48px]
              border
              border-[#0f62fe]
              hover:bg-blue-50
              transition
              flex
              items-center
              justify-between
              px-5
              text-[14px]
              text-[#0f62fe]
            "
          >
            Continue with Google
            <FcGoogle size={20} />
          </button>

        </div>

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