import Image from "next/image";
export default function HeroVideoSlider() {
  return (
    <div className="w-full overflow-hidden">
      
      {/* Video Section */}
      <video
        className="w-full h-[550px] object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls
      >
        <source src="/IBM vedio.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>

      {/* Main Section */}
      <section className="w-full  px-8 py-16">

        {/* Top Search Jobs Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 border-b border-gray-400 pb-16">

          {/* Left Content */}
          <div className="flex items-center gap-8">

            {/* Image */}
            <Image
  src="/image/2-honepage.webp"
  alt="Search Jobs"
  width={500}
  height={350}
  className="w-full max-w-[320px] h-auto"
/>

            {/* Text */}
            <div>
              <h5 className="text-xl font-semibold mb-2">
                Search jobs
              </h5>

              <p className="text-[16px] leading-relaxed max-w-xl text-gray-700">
                Join us and create incredible things that alter the future
                for us, for each other, for our clients and for the world.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="border border-blue-600 text-blue-600 px-8 py-3 text-lg hover:bg-blue-600 hover:text-white transition flex items-center gap-4">
            Search Jobs
            <span>→</span>
          </button>
        </div>

        {/* Bottom Career Areas */}
       <div className="flex flex-col lg:flex-row w-full h-[500px] gap-10 items-center">

  {/* LEFT IMAGE */}
  <div className="relative w-full lg:w-1/2 h-[500px]">
       <Image
      src="/image/3-homepage.avif"
      alt="Career"
      width={600}
      height={350}
      className="rounded-md object-cover w-full max-w-[500px] h-[320px]"
    />

  </div>

  {/* RIGHT TEXT */}
  <div className="w-full lg:w-1/2">

    <h5 className="text-3xl font-medium mb-5">
      Career Areas
    </h5>

    <p className="text-[16px] leading-8 text-gray-700 mb-8">
      From Research and Consulting to Software Engineering,
      bring your skills to any of our career areas and grow
      beyond limits. Careers here don’t follow a script.
      IBMers create real impact for clients, communities and
      each other, from innovation in quantum to Hybrid Cloud,
      mainframe to AI and beyond.
    </p>

    <button className="border border-blue-600 text-blue-600 px-6 py-3 text-lg hover:bg-blue-600 hover:text-white transition flex items-center gap-4">
      Explore our Career Areas
      <span>→</span>
    </button>

  </div>
</div>
      </section>
    <section className="w-full px-8 py-16 border-t border-gray-400">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* Left Content */}
    <div>
      <h5 className="text-3xl font-medium mb-6 text-black">
        Entry Level
      </h5>

      <p className="text-[15px] leading-7 text-gray-800 max-w-xl mb-8">
        Learn about our entry-level programs, including internships,
        and how you can shape your career and contribute to impactful
        projects.
      </p>

      <button className="bg-[#0f62fe] hover:bg-blue-700 text-white px-6 py-3 text-base transition flex items-center gap-4 rounded-sm">
        Explore Entry Level Opportunities
        <span className="text-2xl">→</span>
      </button>
    </div>

    {/* Right Image */}
    
     <div className="relative w-full h-[500px]">
 <Image
  src="/image/4_homepage.avif"
  alt="Homepage"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
/>

    </div>

  </div>
</section>

<section className="w-full px-8 py-16">

  {/* Top Application Tips Section */}
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 bg-[#ececec] p-6 mb-20">

    {/* Left Text */}
    <div>
      <h5 className="text-xl font-semibold mb-2">
        Application Steps and Tips
      </h5>

      <p className="text-[15px] text-gray-800 max-w-3xl leading-7">
        Find out what to expect every step of the way, and get helpful
        career guidance directly from recruiters and expert IBMers.
      </p>
    </div>

    {/* Button */}
    <button className="border border-blue-600 text-blue-600 px-6 py-3 text-base hover:bg-blue-600 hover:text-white transition flex items-center gap-4 whitespace-nowrap">
      Explore our Application Steps and Tips
      <span className="text-2xl">→</span>
    </button>
  </div>

  {/* Life @ IBM Title */}
  <p className="text-5xl font-light mb-14 text-black">
    Life@IBM
  </p>

  {/* Tabs */}
  <div className="flex flex-wrap gap-4 mb-14">

    <button className="bg-[#0f62fe] text-white px-6 py-3 text-base rounded-sm">
      Culture
    </button>

    <button className="border border-gray-300 bg-white px-6 py-3 text-base rounded-sm hover:bg-gray-100">
      Careers Blog
    </button>

    <button className="border border-gray-300 bg-white px-6 py-3 text-base rounded-sm hover:bg-gray-100">
      Locations
    </button>
  </div>

  {/* Bottom Content */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

    {/* Left Content */}
    <div>
      <h5 className="text-3xl font-medium mb-6">
        Culture
      </h5>

      <p className="text-[15px] leading-7 text-gray-800 max-w-xl mb-10">
        Get to know life at IBM, including all the ways we celebrate
        innovation, make an impact through technology and empower IBMers.
      </p>

      <button className="border border-blue-600 text-blue-600 px-6 py-3 text-base hover:bg-blue-600 hover:text-white transition flex items-center gap-4 rounded-sm">
        Explore our Culture
        <span className="text-2xl">→</span>
      </button>
    </div>

    {/* Right Video/Image */}
    <div className="relative">

       <video
    className="w-full h-[320px] object-cover rounded-sm"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/IBM vedio.mp4" type="video/mp4" />
    Your browser does not support video.
  </video>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-black/40 rounded-full flex items-center justify-center">
          <span className="text-white text-4xl ml-1">
            ▶
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="w-full bg-[#f4f4f4] py-6 space-y-6 px-6">

  {/* Card 1 */}
  <div className="grid grid-cols-1 lg:grid-cols-4 items-center bg-[#dff1fb] max-w-[1400px] mx-auto">

    {/* Left Icon */}
   

    {/* Person Image */}
    <div>
      <Image
  src="/image/5-homepage.avif"
  alt="homepage"
  width={500}
  height={300}
  className="w-full h-auto"
/>
    </div>

    {/* Text */}
    <div className="px-6 py-6">
      <p className="text-[15px] font-semibold leading-7 text-black mb-6">
        “I started at IBM as an intern. Today, I have 13 patents and lead
        an entire team of hardware engineers.”
      </p>

      <p className="text-[14px] text-black">
        -Akil, Infrastructure, United States
      </p>
    </div>

    {/* Button */}
    <div className="flex justify-center lg:justify-end px-6">
      <button className="border border-blue-600 text-blue-600 px-6 py-3 text-base hover:bg-blue-600 hover:text-white transition flex items-center gap-3 whitespace-nowrap">
        Discover more stories
        <span className="text-2xl">→</span>
      </button>
    </div>
  </div>

  {/* Card 2 */}
  <div className="grid grid-cols-1 lg:grid-cols-4 items-center bg-[#eadcf8] max-w-[1400px] mx-auto">

    {/* Left Icon */}
    

    {/* Person Image */}
    <div>
       <Image
  src="/image/6-homepage.webp"
   alt="homepage"
  width={500}
  height={300}
  className="w-full h-auto"
/>

    </div>

    {/* Text */}
    <div className="px-6 py-6">
      <p className="text-[15px] font-semibold leading-7 text-black mb-6">
        “From software testing to cybersecurity, my IBM journey has
        been about reinvention.”
      </p>

      <p className="text-[14px] text-black">
        -Guncha, Infrastructure, India
      </p>
    </div>

    {/* Button */}
    <div className="flex justify-center lg:justify-end px-6">
      <button className="border border-blue-600 text-blue-600 px-6 py-3 text-base hover:bg-blue-600 hover:text-white transition flex items-center gap-3 whitespace-nowrap">
        Discover more stories
        <span className="text-2xl">→</span>
      </button>
    </div>
  </div>

  {/* Card 3 */}
  <div className="grid grid-cols-1 lg:grid-cols-4 items-center bg-[#f4f4f4] max-w-[1400px] mx-auto">

    {/* Left Icon */}
   

    {/* Person Image */}
    <div>
    <Image
  src="/image/7-homepage.webp"
    alt="homepage"
  width={500}
  height={300}
  className="w-full h-auto"
/>
    </div>

    {/* Text */}
    <div className="px-6 py-6">
      <p className="text-[15px] font-semibold leading-7 text-black mb-6">
        “I’m blending my love for coding with my passion for Japanese
        culture.”
      </p>

      <p className="text-[14px] text-black">
        -Gabriel, Consulting, Philippines
      </p>
    </div>

    {/* Button */}
    <div className="flex justify-center lg:justify-end px-6">
      <button className="border border-blue-600 text-blue-600 px-6 py-3 text-base hover:bg-blue-600 hover:text-white transition flex items-center gap-3 whitespace-nowrap">
        Discover more stories
        <span className="text-2xl">→</span>
      </button>
    </div>
  </div>

</section>
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