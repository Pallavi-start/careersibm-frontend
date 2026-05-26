import Image from "next/image";
import { ArrowRight } from "lucide-react";

const areas = [
  "Software Engineering",
  "Consulting",
  "Data & AI",
  "Design & UX",
  "Infrastructure",
  "Sales",
  "Security",
  "Project Management",
];

export default function CareerAreas() {
  return (
    <div className="min-h-screen ">

      {/* Hero */}
      <div className="relative h-[550px]">
        <Image
          src="/image/career-areas.avif"
          alt="Career Areas"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="px-16 max-w-2xl ">
            <h1 className="text-6xl font-light leading-tight mb-6">
              Come build your future <br /> like an IBMer.
            </h1>

            <p className="text-xl leading-8">
              Explore career areas where your skills can make
              a real impact.
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="px-10 py-16 text-center">
        <h2 className="text-4xl font-light mb-4">
          Explore Career Areas
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From software engineering to consulting and AI,
          discover opportunities built for your ambitions.
        </p>
      </div>

      {/* Cards */}
      <div className="px-10 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-2xl font-medium mb-4">
                {item}
              </h3>

              <button className="text-blue-600 flex items-center gap-2">
                Explore
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

     <div className="px-10 py-20 bg-white">
  <h2 className="text-5xl font-light mb-6">
    Join us leading like an IBMer
  </h2>

  <p className="text-lg text-gray-700 leading-8 max-w-5xl mb-16">
    Careers here don’t follow a script. IBMers create real impact for
    clients, communities and each other, from innovation in quantum to
    Hybrid Cloud, mainframe to AI and beyond.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* AI */}
    <div className="bg-sky-50 p-8 rounded-lg hover:shadow-lg transition">
      <h3 className="text-3xl font-semibold mb-4">AI</h3>
      <p className="text-gray-700 leading-7 mb-6">
        From predictive insights to intelligent automation, our AI
        technologies help clients innovate, scale and accelerate
        business growth with confidence.
      </p>
      <button className="text-blue-600 font-medium hover:underline">
        Learn More →
      </button>
    </div>

    {/* Cloud */}
    <div className="bg-sky-50 p-8 rounded-lg hover:shadow-lg transition">
      <h3 className="text-3xl font-semibold mb-4">Cloud</h3>
      <p className="text-gray-700 leading-7 mb-6">
        IBM Cloud helps build scalable infrastructure, deploy apps
        instantly, and scale workloads securely on demand.
      </p>
      <button className="text-blue-600 font-medium hover:underline">
        Learn More →
      </button>
    </div>

    {/* Security */}
    <div className="bg-sky-50 p-8 rounded-lg hover:shadow-lg transition">
      <h3 className="text-3xl font-semibold mb-4">Security</h3>
      <p className="text-gray-700 leading-7 mb-6">
        IBM security products protect businesses with advanced threat
        detection, zero-trust frameworks and AI-driven insights.
      </p>
      <button className="text-blue-600 font-medium hover:underline">
        Learn More →
      </button>
    </div>

    {/* Consulting */}
    <div className="bg-sky-50 p-8 rounded-lg hover:shadow-lg transition">
      <h3 className="text-3xl font-semibold mb-4">Consulting</h3>
      <p className="text-gray-700 leading-7 mb-6">
        IBM Consulting combines trusted expertise with powerful
        technology to solve clients’ most critical challenges.
      </p>
      <button className="text-blue-600 font-medium hover:underline">
        Learn More →
      </button>
    </div>

  </div>
</div>
<div className="px-10 py-20 ">
  <div className="grid lg:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div>
      <p className="text-blue-600 text-sm font-medium mb-3">
        Why Choose IBM
      </p>

      <h2 className="text-4xl font-light mb-8">
        Growing and leading <br /> like an IBMer
      </h2>

      {/* buttons in one line */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button className="px-6 py-3 bg-blue-600 text-white rounded">
          Advance your career
        </button>

        <button className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-100">
          Make a difference
        </button>

        <button className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-100">
          Learn new skills
        </button>
      </div>

      <p className="text-base text-gray-700 leading-7 mb-6">
        At IBM you don not have to change companies to completely
        re-invent yourself.
      </p>

      <h3 className="text-2xl font-semibold mb-3">
        A journey of reinvention and impact at IBM
      </h3>

      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
        Learn More
      </button>
    </div>

    {/* Right Image */}
    <div>
      <Image
        src="/image/career-area2.webp"
        alt="Employee smiling"
        width={600}
        height={400}
        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
      />
    </div>

  </div>
</div>
<section className="w-full px-6 py-12">

  {/* Heading */}
  <h6 className="text-5xl font-light text-black mb-14">
    Keep exploring.
  </h6>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

    {/* Card 1 */}
    <div>

      {/* Icon */}
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          strokeWidth="2"
          stroke="#0f62fe"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 18h30v20H18l-8 8V18z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M40 10h14v14"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M40 24l14-14"
          />
          <circle cx="18" cy="28" r="1.5" fill="#0f62fe" />
          <circle cx="26" cy="28" r="1.5" fill="#0f62fe" />
          <circle cx="34" cy="28" r="1.5" fill="#0f62fe" />
        </svg>
      </div>

      <h6 className="text-xl font-semibold mb-3">
        Talent Network
      </h6>

      <p className="text-[15px] leading-7 text-gray-800 mb-8 max-w-sm">
        Stay up to date on career related news and events.
      </p>

      <button className="text-blue-600 text-lg flex items-center gap-3 hover:gap-5 transition-all">
        Join our Talent Network
        <span className="text-2xl">→</span>
      </button>
    </div>

    {/* Card 2 */}
    <div>

      {/* Icon */}
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          strokeWidth="2"
          stroke="#0f62fe"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M32 10v10"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M32 44v10"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 32h10"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M44 32h10"
          />
          <circle
            cx="32"
            cy="32"
            r="12"
          />
        </svg>
      </div>

      <h6 className="text-xl font-semibold mb-3">
        Job Alerts
      </h6>

      <p className="text-[15px] leading-7 text-gray-800 mb-8 max-w-sm">
        Get notified on job openings that match your skills.
      </p>

      <button className="text-blue-600 text-lg flex items-center gap-3 hover:gap-5 transition-all">
        Turn on Job Alerts
        <span className="text-2xl">→</span>
      </button>
    </div>

    {/* Card 3 */}
    <div>

      {/* Icon */}
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          strokeWidth="2"
          stroke="#0f62fe"
          className="w-16 h-16"
        >
          <circle cx="28" cy="28" r="12" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M38 38l12 12"
          />
        </svg>
      </div>

      <h6 className="text-xl font-semibold mb-3">
        Search Jobs
      </h6>

      <p className="text-[15px] leading-7 text-gray-800 mb-8 max-w-sm">
        Come empower, invent and advance like an IBMer.
      </p>

      <button className="text-blue-600 text-lg flex items-center gap-3 hover:gap-5 transition-all">
        Search jobs
        <span className="text-2xl">→</span>
      </button>
    </div>

  </div>
</section>
    </div>
  );
}