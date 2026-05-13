export default function Footer() {
  return (

    <footer className="bg-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-10 py-14 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>

          <h2 className="text-2xl font-bold text-blue-500 mb-4">
            IBM
          </h2>

          <p className="text-gray-400 leading-7">
           Human Resources Department
IBM India Pvt. Ltd.
No. 12, Subramanya Arcade
Bannerghatta Main Road
Bengaluru – 560029, India
          </p>

        </div>



        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-white cursor-pointer">
              Home
            </li>

            <li className="hover:text-white cursor-pointer">
              Jobs
            </li>

            <li className="hover:text-white cursor-pointer">
              About
            </li>

            <li className="hover:text-white cursor-pointer">
              Contact
            </li>

          </ul>

        </div>


        {/* Services */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Services
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-white cursor-pointer">
              Job Search
            </li>

            <li className="hover:text-white cursor-pointer">
              Resume Upload
            </li>

            <li className="hover:text-white cursor-pointer">
              Career Guidance
            </li>

            <li className="hover:text-white cursor-pointer">
              Hiring Solutions
            </li>

          </ul>

        </div>


        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
             Bengaluru, India
            </li>

            <li>
            rccindia.ibm@ibm.com
            </li>

           

          </ul>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-5 text-center text-gray-500 text-sm">

        © 2026 IBM. All rights reserved.

      </div>

    </footer>

  );
}