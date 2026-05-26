import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function RecruitmentScams() {
  return (
    <div className="min-h-screen">

      <div className="relative h-[650px] rounded-lg overflow-hidden shadow-lg">
  <Image
    src="/image/navbar be aware.avif"
    alt="IBM"
    fill
    className="object-cover"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 "></div>

  {/* Left content on image */}
  <div className="absolute inset-0 flex items-center px-16">
    <div className="max-w-xl  backdrop-blur-sm p-8 rounded-lg">
      <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
        Come prepared like <br /> an IBMer.
      </h1>

      <p className="text-lg  leading-8 mb-8">
        As you explore life at IBM, it’s important to stay alert to
        potential scams. Use this information to identify fraudulent
        communications and confidently focus on becoming an IBMer.
      </p>

      

       

      <button className="bg-blue-600 text-white px-7 py-3 flex items-center gap-3 hover:bg-blue-700 rounded">
        Search jobs
        <ArrowRight size={20} />
      </button>
    </div>
  </div>
</div>

      {/* Alert Section */}
      <div className="bg-white mt-20 p-12 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold  mb-6">
          Alert: Protect Yourself from Fake IBM Job Offers
        </h2>

        <p className="text-base text-gray-700 leading-8 mb-6">
          There are recruitment scams where fraudulent entities claim to
          represent IBM in their hiring processes. These scams often involve
          requests for money, banking information, or personal identifiers
          under the pretense of securing employment.
        </p>

        <p className="text-base text-gray-700 leading-8 mb-6">
          These scams are becoming more elaborate through third-party websites,
          emails, phone calls, and social media messages.
        </p>

        <h3 className="text-xl font-semibold mb-5">
          To help identify fraudulent offers:
        </h3>

        <ul className="list-disc pl-8 space-y-4 text-gray-700">
          <li>
            IBM Talent Acquisition only uses official
            <span className="font-semibold"> ibm.com </span> email addresses.
          </li>

          <li>
            IBM never asks for money or banking details during hiring.
          </li>

          <li>
            Always verify recruiters claiming to represent IBM.
          </li>

          <li>
            Never share personal or financial details with unknown recruiters.
          </li>
        </ul>

        <button className="mt-8 bg-blue-600 text-white px-7 py-3 hover:bg-blue-700 rounded">
          Report a Scam
        </button>
      </div>
    </div>
  );
}