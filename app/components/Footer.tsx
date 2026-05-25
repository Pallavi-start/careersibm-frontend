import Image from "next/image";
export default function Footer() {
  return (

     <footer className="w-full bg-black text-white px-8 py-14">

  {/* Top Section */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-14 border-b border-gray-700 pb-12">

    {/* IBM Logo */}
    <div>
     <Image
  src="/ibm-logo-white.png"
  alt="IBM Logo"
  width={140}
  height={60}
  priority
  className="w-32 h-auto mb-6"
/>
    </div>

    {/* Discover + Follow */}
    <div>

      <div className="mb-12">
        <h6 className="text-lg font-semibold mb-5">
          Discover
        </h6>

        <ul className="space-y-3 text-[15px] text-gray-300">
          <li>Products</li>
          <li>Consulting services</li>
          <li>Industries</li>
          <li>Case studies</li>
          <li>Financing</li>
          <li>Research</li>
        </ul>
      </div>

      <div>
        <h6 className="text-lg font-semibold mb-5">
          Follow
        </h6>

        <ul className="space-y-3 text-[15px] text-gray-300">
          <li>LinkedIn</li>
          <li>X</li>
          <li>Instagram</li>
          <li>YouTube</li>
          <li>Podcasts</li>
        </ul>
      </div>

    </div>

    {/* Connect */}
    <div>
      <h6 className="text-lg font-semibold mb-5">
        Connect
      </h6>

      <ul className="space-y-3 text-[15px] text-gray-300">
        <li>Business partners</li>
        <li>Documentation</li>
        <li>Newsletters</li>
        <li>Support</li>
        <li>TechXchange community</li>
      </ul>
    </div>

    {/* About */}
    <div>
      <h6 className="text-lg font-semibold mb-5">
        About
      </h6>

      <ul className="space-y-3 text-[15px] text-gray-300">
        <li>Overview</li>
        <li>Careers</li>
        <li>Investor relations</li>
        <li>Leadership (U.S.)</li>
        <li>Newsroom</li>
        <li>Security, privacy and trust</li>
        <li>2024-2025 IBM India CSR Report</li>
        <li>IBM India CSR Policy</li>
      </ul>
    </div>

  </div>

  {/* Bottom Section */}
 

</footer>

  );
}