"use client";

import { ArrowRight } from "lucide-react";

export default function InfrastructureDropdown() {
  const categories = ["Cloud", "Compute", "IBM Z", "Storage"];

  const cloudItems = [
    {
      title: "Cloud Bare Metal Servers",
      desc: "100% dedicated, secure, bare metal servers",
    },
    {
      title: "Cloud Kubernetes Service",
      desc: "Enable orchestration and self-healing",
    },
    {
      title: "Cloud Virtual Servers for VPC",
      desc: "Configurable virtual machines",
    },
    {
      title: "Cloud Code Engine",
      desc: "Fully managed serverless platform",
    },
    {
      title: "Cloud Object Storage",
      desc: "Store data securely at scale",
    },
    {
      title: "GPUs and AI Accelerators",
      desc: "Scale AI workloads securely",
    },
    {
      title: "Cloud Container Registry",
      desc: "Store Docker images",
    },
    {
      title: "Cloud Pak for Business Automation",
      desc: "Integrated software operations",
    },
    {
      title: "Power Virtual Server",
      desc: "Virtual IBM Power servers",
    },
  ];

  return (
    <div className="w-[1100px] h-[480px] bg-white shadow-xl border border-gray-200 flex">

      {/* Left */}
      <div className="w-[250px]  border-r flex flex-col">
        {categories.map((cat) => (
          <div
            key={cat}
            className="px-6 py-4 text-base font-normal hover:bg-gray-200 cursor-pointer"
          >
            {cat}
          </div>
        ))}

        <div className="mt-auto bg-blue-600 text-white px-6 py-4 flex items-center justify-between text-sm cursor-pointer">
          Explore all products
          <ArrowRight size={16} />
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 px-10 py-8">
        <h2 className="text-3xl text-blue-600 font-light mb-8">
          Cloud →
        </h2>

        <div className="grid grid-cols-3 gap-x-10 gap-y-8">
          {cloudItems.map((item, i) => (
            <div key={i}>
              <h6 className="text-base font-semibold mb-1">
                {item.title}
              </h6>
              <p className="text-sm text-gray-500 leading-5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}