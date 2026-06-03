"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/admin-login");
    } else {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      Loading...
    </div>
  );
}