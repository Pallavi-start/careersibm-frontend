"use client";

import { useState } from "react";
import axios from "axios";

export default function AdminLogin() {
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

      localStorage.setItem("token", res.data.token);

      alert("Login Success");

      window.location.href = "/admin";

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
        padding: "50px",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <h1>Admin Login</h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}