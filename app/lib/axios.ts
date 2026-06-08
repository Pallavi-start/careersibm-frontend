import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE,
});

// 🔥 ATTACH TOKEN AUTOMATICALLY
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
    console.log("🔥 INTERCEPTOR TOKEN:", token);
  console.log("🔥 BEFORE HEADERS:", config.headers);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log("🔥 AFTER HEADERS:", config.headers);
  return config;
});

export default api;