"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function AdminLogin() {
   const router = useRouter()
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

const handleLogin = async () => {
  try {
    setLoading(true);

    const res = await axios.post(
      `${API_BASE}/api/auth/login`,
      {
        email,
        password,
      }
    );

    localStorage.setItem(
      "token",
      res.data.token
    );

    alert("Login Success");

    router.push("/admin/dashboard");

  } catch (err) {
    console.log(err);

    alert(
      err?.response?.data?.message ||
      "Invalid Credentials"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #000000, #0f172a)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#111827",
          padding: "40px",
          borderRadius: "20px",
          boxShadow:
            "0 0 25px rgba(59,130,246,0.2)",
          border: "1px solid #1f2937",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Admin Login
        </h1>

        <p
          style={{
            color: "#9ca3af",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          IBM Careers Dashboard Access
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #374151",
            background: "#000",
            color: "white",
            outline: "none",
            fontSize: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "25px",
            borderRadius: "10px",
            border: "1px solid #374151",
            background: "#000",
            color: "white",
            outline: "none",
            fontSize: "15px",
          }}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>
      </div>
    </div>
  );
}