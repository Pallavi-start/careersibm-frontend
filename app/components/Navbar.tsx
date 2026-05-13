export default function Navbar() {

  return (

    <nav className="sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

       <h1 className="text-3xl font-bold text-blue-600">
          IBM Careers
        </h1>

        <ul className="flex gap-8 font-medium text-gray-700">
          <li>Home</li>
          <li>Jobs</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

      </div>

    </nav>

  );

} 