
import { ArrowRight } from "lucide-react";



export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[500px]">
        

        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="px-16 max-w-3xl text-white">
            <p className="text-lg mb-4">IBM Consulting</p>

            <h1 className="text-6xl font-light leading-tight mb-6">
              Accelerate business <br /> transformation with AI
            </h1>

            <p className="text-xl leading-8 mb-8">
              Turn strategy into action with IBM Consulting —
              combining deep industry expertise with AI-powered innovation.
            </p>

            <button className="bg-blue-600 px-8 py-4 rounded hover:bg-blue-700 flex items-center gap-3">
              Get started
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      

<div className="px-10 py-20 bg-white">
  {/* Heading */}
  <h2 className="text-5xl font-light mb-6">
    Orchestrate AI at scale
  </h2>

  <p className="text-lg text-gray-700 leading-8 max-w-5xl mb-6">
    IBM Consulting® is where trusted expertise meets powerful technology.
    As the only global consultancy within a major tech leader, we drive
    high-impact outcomes using advanced AI and a science-based approach
    to tackle your most critical challenges.
  </p>

  <p className="text-lg text-gray-700 leading-8 max-w-5xl mb-16">
    Partnering directly with clients, we advise, design, build and
    operate business innovation that matters and results that last.
  </p>

  {/* Service Cards */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* Card 1 */}
    <div className="bg-[#f4f4f4] rounded-lg overflow-hidden hover:shadow-lg transition">
    
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3">
          Data & AI services
        </h3>
        <p className="text-gray-700">
          Successfully scale AI with the right strategy,
          data, security and governance in place.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-[#f4f4f4] rounded-lg overflow-hidden hover:shadow-lg transition">
     
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3">
          Business transformation consulting
        </h3>
        <p className="text-gray-700">
          Structured approach to help clients through
          every step of their AI transformation.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-[#f4f4f4] rounded-lg overflow-hidden hover:shadow-lg transition">
    
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3">
          Cloud consulting services
        </h3>
        <p className="text-gray-700">
          Maximize the value of hybrid cloud
          in the generative AI era.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-[#f4f4f4] rounded-lg overflow-hidden hover:shadow-lg transition">
     
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3">
          Business Operations Services
        </h3>
        <p className="text-gray-700">
          Delivering a new model for transforming
          core functions—powered by AI.
        </p>
      </div>
    </div>

  </div>
</div>
<div className="px-10 py-20 bg-white">
  <h2 className="text-5xl font-light mb-12">
    Next steps
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* LinkedIn */}
    <div className="bg-[#f4f4f4] p-8 rounded-lg hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-4">
        Follow IBM Consulting on LinkedIn
      </h3>
      <p className="text-gray-700 leading-7 mb-6">
        Curious about how IBM Consulting can help your business?
        Follow us on LinkedIn for insights, expert perspectives,
        and the latest updates.
      </p>
      <button className="text-blue-600 font-medium hover:underline">
        Follow IBM Consulting →
      </button>
    </div>

    {/* Newsletter */}
    <div className="bg-[#f4f4f4] p-8 rounded-lg hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-4">
        Monthly IdeaWatch newsletter
      </h3>
      <p className="text-gray-700 leading-7 mb-6">
        Thought leadership research curated specifically
        for business leaders by IBM Institute for Business Value.
      </p>
      <button className="text-blue-600 font-medium hover:underline">
        Subscribe →
      </button>
    </div>

    {/* Careers */}
    <div className="bg-[#f4f4f4] p-8 rounded-lg hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-4">
        IBM Consulting careers
      </h3>
      <p className="text-gray-700 leading-7 mb-6">
        Become a consultant with purpose. Join our team
        driving innovation and change.
      </p>
      <button className="text-blue-600 font-medium hover:underline">
        See career opportunities →
      </button>
    </div>

    {/* Partner */}
    <div className="bg-[#f4f4f4] p-8 rounded-lg hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-4">
        Partner with IBM
      </h3>
      <p className="text-gray-700 leading-7 mb-6">
        Grow your business with IBM. Amplify your growth
        using innovative technology solutions.
      </p>
      <button className="text-blue-600 font-medium hover:underline">
        Join IBM Partner Plus →
      </button>
    </div>

    {/* Resources */}
    <div className="bg-[#f4f4f4] p-8 rounded-lg hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-4">
        Visit IBM Consultings resources page
      </h3>
      <p className="text-gray-700 leading-7 mb-6">
        Explore reports, guidebooks and thought leadership
        papers to help grow your business.
      </p>
      <button className="text-blue-600 font-medium hover:underline">
        Learn more →
      </button>
    </div>

  </div>
</div>
    </div>
  );
}