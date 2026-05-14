"use client";

import { useState } from "react";
import axios from "axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://careersibm-backend-3.onrender.com/api/login",
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
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Admin Login</h1>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}