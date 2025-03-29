import React from 'react'

function Contact() {
  return (
    <main className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-satoshi font-bold mb-8 text-[var(--primary-dark)]">
        Contact Us
      </h1>
      <p className="text-lg mb-12">
        Have questions about tea tourism or need help planning your journey? Reach out to our team.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact form */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-satoshi font-bold mb-6">Send us a message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" 
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" 
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" 
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-[var(--primary)] text-white font-satoshi font-bold py-3 px-6 rounded-lg hover:bg-[var(--primary-dark)] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact info */}
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-xl font-satoshi font-bold mb-3">Email</h3>
            <p className="text-lg">info@teatourism.com</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-satoshi font-bold mb-3">Phone</h3>
            <p className="text-lg">+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-xl font-satoshi font-bold mb-3">Address</h3>
            <p className="text-lg">Tea Gardens, Darjeeling<br />India</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact 