export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          About Our Job Portal
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90">
          Connecting talent with the right opportunities worldwide
        </p>
      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Story</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          We started this platform with a simple idea — make job searching
          easier, faster, and more transparent. Today, we help thousands of
          candidates connect with top companies and build better careers.
        </p>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to help job seekers find the right opportunities
            quickly and easily. We aim to bridge the gap between companies
            and talented individuals by providing a simple and efficient platform.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Easy job search and filtering</li>
            <li>Verified job listings</li>
            <li>Fast application process</li>
            <li>Trusted by recruiters</li>
            <li>Free access for job seekers</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Our Platform Stats</h2>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">500+</p>
              <p className="text-gray-600">Jobs Posted</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-3xl font-bold text-green-600">200+</p>
              <p className="text-gray-600">Companies</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-3xl font-bold text-purple-600">1000+</p>
              <p className="text-gray-600">Job Seekers</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">1. Search Jobs</h3>
            <p className="text-gray-600">Find jobs based on skills, location, and company.</p>
          </div>

          <div className="p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">2. Apply Easily</h3>
            <p className="text-gray-600">Submit your application in just a few clicks.</p>
          </div>

          <div className="p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">3. Get Hired</h3>
            <p className="text-gray-600">Connect with recruiters and start your career.</p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-100 rounded-xl">
            <h3 className="font-bold text-xl mb-2">Transparency</h3>
            <p className="text-gray-600">Clear and honest job listings for everyone.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl">
            <h3 className="font-bold text-xl mb-2">Trust</h3>
            <p className="text-gray-600">We verify companies and job posts.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl">
            <h3 className="font-bold text-xl mb-2">Growth</h3>
            <p className="text-gray-600">Helping candidates grow their careers.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career?</h2>
        <p className="mb-6 opacity-90">
          Explore jobs and apply today with just one click.
        </p>

        <a
          href="/jobs"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Browse Jobs
        </a>
      </section>

    </div>
  );
}