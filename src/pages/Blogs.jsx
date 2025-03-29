import React from 'react'

function Blogs() {
  return (
    <main className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-satoshi font-bold mb-8 text-[var(--primary-dark)]">
        Tea Tourism Blogs
      </h1>
      <p className="text-lg mb-12">
        Discover stories, insights and guides from tea estates around the world.
      </p>
      
      {/* Blog content would go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-satoshi font-bold mb-2">Blog Coming Soon</h2>
          <p>Our blog articles are being prepared. Please check back later.</p>
        </div>
      </div>
    </main>
  )
}

export default Blogs 