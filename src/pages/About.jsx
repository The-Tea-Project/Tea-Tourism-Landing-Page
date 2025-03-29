import React from 'react'

function About() {
  return (
    <main className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-satoshi font-bold mb-8 text-[var(--primary-dark)]">
        About Tea Tourism
      </h1>
      <p className="text-lg mb-12">
        Learn about our mission to connect tea enthusiasts with authentic tea experiences around the world.
      </p>
      
      {/* About content would go here */}
      <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-satoshi font-bold mb-4">Our Story</h2>
        <p className="mb-6">
          Tea Tourism was founded by a group of tea enthusiasts who wanted to share the beauty and culture of tea-growing regions with the world. 
          What started as a passion project has evolved into a platform that connects travelers with authentic tea experiences.
        </p>
        <h2 className="text-2xl font-satoshi font-bold mb-4">Our Mission</h2>
        <p>
          We aim to promote sustainable tourism that benefits local tea communities while providing visitors with unforgettable experiences. 
          Through education, cultural exchange, and responsible travel, we're building bridges between tea lovers and the places where their favorite beverage is grown.
        </p>
      </div>
    </main>
  )
}

export default About 