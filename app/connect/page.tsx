import Image from "next/image";
import { Users, Bell, Search, Headphones, } from "lucide-react";


export default function ConnectPage() {
  const cards = [
    {
      title: "Talent Network",
      desc: "Stay up-to-date on career-related news and events.",
      btn: "Join our Talent Network",
      icon: <Users size={34} />,
      bg: "bg-blue-100",
    },
    {
      title: "Job Alerts",
      desc: "Get notified on job openings matching your skills.",
      btn: "Turn on Job Alerts",
      icon: <Bell size={34} />,
      bg: "bg-purple-100",
    },
    {
      title: "Search Jobs",
      desc: "Come empower, invent and advance like an IBMer.",
      btn: "Search Jobs",
      icon: <Search size={34} />,
      bg: "bg-yellow-100",
    },
    {
      title: "Technical Support",
      desc: "Need help applying or reporting a scam?",
      btn: "Contact Support",
      icon: <Headphones size={34} />,
      bg: "bg-green-100",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f4]">

     <div className="relative h-[600px] w-full">
  <Image
    src="/image/connectpage.avif"
    alt="IBM Connect"
    fill
    className="object-cover"
  />

  {/* Text overlay */}
<div className="absolute inset-0 flex items-center justify-left">
  <div className="max-w-xl bg-blue-100/50 backdrop-blur-sm p-8 rounded-lg ">
    <h1 className="text-5xl md:text-5xl font-light  leading-tight mb-6">
      Come build connections <br /> like an IBMer.
    </h1>

    <p className="text-lg  leading-8">
      Whether you were ready to apply, still exploring,
      or need support — connect with us here.
    </p>
  </div>
</div>
</div>

      {/* Cards */}
      <div className="px-10 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`${card.bg} p-10 rounded-lg shadow-sm`}
            >
              <div className="mb-5">{card.icon}</div>

              <h2 className="text-2xl font-semibold mb-3">
                {card.title}
              </h2>

              <p className="text-gray-700 mb-6 text-base">
                {card.desc}
              </p>

              <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                {card.btn}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Social */}


      {/* Bottom */}
     <section className="w-full  px-6 py-12 border-t border-gray-400">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

    {/* Left Content */}
    <div>

      <h6 className="text-5xl font-light text-black mb-8">
        Lets find your next steps
      </h6>

      <p className="text-[15px] leading-7 text-gray-800 max-w-xl mb-12">
        Further discover our careers page or get a personalized list
        of jobs based on your interests, then filter by country,
        experience, or skills.
      </p>

      <button className="text-blue-600 text-lg flex items-center gap-3 hover:gap-5 transition-all">
        Explore all roles
        <span className="text-2xl">☷</span>
      </button>

    </div>

    {/* Right Form */}
    <div className="pt-6 max-w-xl">

      {/* Region */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-[15px] text-gray-700">
          Region:
        </span>

        <button className="flex items-center gap-2 text-[15px] text-black">
          India in English
          <span className="text-lg">⌄</span>
        </button>
      </div>

      {/* Step 1 */}
      <div className="mb-8">
        <label className="block text-[14px] text-gray-700 mb-3">
          Step 1: Select opportunity
        </label>

        <div className="bg-[#ececec] border-b border-gray-500 px-5 py-4 flex items-center justify-between">
          <span className="text-[15px] text-black">
            Select
          </span>

          <span className="text-xl">
            ⌄
          </span>
        </div>
      </div>

      {/* Step 2 */}
      <div className="mb-10 opacity-50">
        <label className="block text-[14px] text-gray-500 mb-3">
          Step 2: Choose an option
        </label>

        <div className="bg-[#ececec] border-b border-gray-400 px-5 py-4 flex items-center justify-between">
          <span className="text-[15px] text-gray-500">
            Select
          </span>

          <span className="text-xl">
            ⌄
          </span>
        </div>
      </div>

      {/* Result Button */}
      <button className="bg-[#cfcfcf] text-gray-600 px-6 py-4 text-lg flex items-center gap-4 rounded-sm cursor-not-allowed">
        See your results
        <span className="text-2xl">↓</span>
      </button>

    </div>

  </div>
</section>
    </div>
  );
}