export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-5">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Job Application Form
        </h1>

        <form className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="block mb-2 font-semibold">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-semibold">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 font-semibold">
              Address
            </label>

            <textarea
              placeholder="Enter your address"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            ></textarea>
          </div>

          {/* Skills */}
          <div>
            <label className="block mb-2 font-semibold">
              Skills
            </label>

            <input
              type="text"
              placeholder="React.js, Node.js, MongoDB"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-2 font-semibold">
              Experience
            </label>

            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500">

              <option>Fresher</option>
              <option>1 Year</option>
              <option>2 Years</option>
              <option>3+ Years</option>

            </select>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block mb-2 font-semibold">
              Upload Resume
            </label>

            <input
              type="file"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          {/* Documents Upload */}
          <div>
            <label className="block mb-2 font-semibold">
              Upload Documents
            </label>

            <input
              type="file"
              multiple
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg"
          >
            Submit Application
          </button>

        </form>

      </div>

    </main>
  );
}