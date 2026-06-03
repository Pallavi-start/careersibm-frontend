"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menus = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Applications", path: "/admin/applications" },
    { name: "Profiles", path: "/admin/profiles" },
    { name: "Jobs", path: "/admin/jobs" },
  ];
const logout = () => {
  localStorage.removeItem("token");

  window.location.href =
    "/admin-login";
};
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          IBM Careers
        </h1>
      </div>
          <button
  onClick={logout}
  className="w-full text-left p-3 rounded-lg bg-red-600 mt-6"
>
  Logout
</button>
      <nav className="p-4 space-y-2">
        {menus.map((menu) => (
          <Link
            key={menu.path}
            href={menu.path}
            className={`block p-3 rounded-lg ${
              pathname === menu.path
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            {menu.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}