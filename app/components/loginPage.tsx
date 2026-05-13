// "use client";

// import { useState } from "react";
// import axios from "axios";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });

//       alert(res.data.message);

//       localStorage.setItem("user", JSON.stringify(res.data.user));
//       localStorage.setItem("token", res.data.token);

//       window.location.href = "/dashboard";
//     } catch (error: unknown) {
//       // safer handling instead of "any"
//       if (axios.isAxiosError(error)) {
//         console.log("LOGIN ERROR:", error.response?.data || error.message);
//         alert(error.response?.data?.message || "Login failed");
//       } else {
//         console.log("UNKNOWN ERROR:", error);
//         alert("Something went wrong");
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleLogin} className="space-y-4">
//       <h1 className="text-xl font-bold text-center">Login</h1>

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="w-full border p-3 rounded"
//         required
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="w-full border p-3 rounded"
//         required
//       />

//       <button className="w-full bg-blue-600 text-white py-3 rounded">
//         Login
//       </button>
//     </form>
//   );
// }