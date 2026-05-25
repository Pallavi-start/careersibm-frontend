"use client";

export default function SupportDropdown() {
  const items = [
    { title: "Overview", desc: "Resolve product issues with self-service tools" },
    { title: "Community", desc: "Share knowledge in a collaborative environment to unlock innovation" },
    { title: "Developer", desc: "Access digital resources, code samples and code trials" },
    { title: "Documentation", desc: "Understand, develop and deploy our products with comprehensive technical resources" },
    { title: "IBM Cloud platform", desc: "Access subject matter experts and content to address questions and issues about IBM Cloud" },
    { title: "Implementation", desc: "Drive better business outcomes with an experienced team of IBM product experts" },
    {tille: " Training",desc:"Develop your skills with premiere educational offerings and credentials"},
    {tille: " Technology Lifecycle Services",desc:"Elevate your support experience with a holistic approach to data center management across your IT environment"},
   
  ];

  return (
    <div className="w-screen min-h-[420px] bg-[#f4f4f4] shadow-lg border flex flex-col lg:flex-row">

      {/* Left */}
      <div className="w-full lg:w-[300px] border-b lg:border-b-0 lg:border-r px-6 py-6">
        <h1 className="text-3xl lg:text-5xl font-light mb-4">
          Support
        </h1>

        <button className="text-blue-600 text-base lg:text-xl hover:underline">
          Whats new →
        </button>
      </div>

      {/* Right */}
      <div className="flex-1 p-6 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i}>
              <h6 className="text-base font-semibold mb-2">
                {item.title}
              </h6>
              <p className="text-sm text-gray-600 leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}