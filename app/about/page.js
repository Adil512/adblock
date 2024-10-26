// app/about/page.js
export default function About() {
    return (
      <div className="space-y-12">
        {/* About Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn about our story and mission to create amazing experiences for our users.
          </p>
        </section>
  
        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">Mike Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </section>
  
        {/* Mission Section */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Detailed description of your company's mission and values...
          </p>
        </section>
      </div>
    )
  }