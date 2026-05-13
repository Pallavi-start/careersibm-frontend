export default function Hero() {

  return (

    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_right,_#2563eb,_transparent_40%)]"></div>


      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">


        {/* Left Content */}
        <div>

          <p className="uppercase tracking-[3px] text-blue-400 font-semibold mb-4 text-sm">
            IBM Career Portal
          </p>


          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">

            Find Your
            <span className="text-blue-500"> Dream Career</span>

          </h1>


          <p className="mt-6 text-gray-300 text-lg leading-8 max-w-xl">

            Discover opportunities across software engineering,
            AI, cloud computing, cybersecurity, design,
            and modern digital innovation.

          </p>


          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition shadow-lg">

              Explore Jobs

            </button>


            <button className="border border-gray-500 hover:border-white hover:bg-white hover:text-black px-6 py-3 rounded-xl font-semibold transition">

              Learn More

            </button>

          </div>



          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8">

            <div>

              <h2 className="text-3xl font-bold text-blue-500">
                500+
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Open Positions
              </p>

            </div>


            <div>

              <h2 className="text-3xl font-bold text-blue-500">
                120+
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Hiring Companies
              </p>

            </div>


            <div>

              <h2 className="text-3xl font-bold text-blue-500">
                10K+
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Applications
              </p>

            </div>

          </div>

        </div>



        {/* Right Search Card */}
        <div className="hidden md:flex justify-center">

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 w-full max-w-md shadow-2xl">

            <h3 className="text-2xl font-bold mb-6">
              Quick Job Search
            </h3>


            <input
              type="text"
              placeholder="Job title or keyword"
              className="w-full mb-4 px-4 py-3 rounded-xl bg-white text-black outline-none"
            />


            <input
              type="text"
              placeholder="Location"
              className="w-full mb-4 px-4 py-3 rounded-xl bg-white text-black outline-none"
            />


            <select
              className="w-full mb-5 px-4 py-3 rounded-xl bg-white text-black outline-none"
            >

              <option>Experience Level</option>
              <option>Fresher</option>
              <option>1 Year</option>
              <option>2 Years</option>
              <option>3+ Years</option>

            </select>


            <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-base font-semibold transition">

              Search Jobs

            </button>

          </div>

        </div>

      </div>

    </section>

  );

}