import React from 'react'

function Products() {
  return (
    <main className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-satoshi font-bold mb-8 text-[var(--primary-dark)]">
        Local Tea Products
      </h1>
      <p className="text-lg mb-12">
        Explore our curated collection of authentic tea products from the tea gardens of Darjeeling and beyond.
      </p>
      
      {/* Products content would go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-satoshi font-bold mb-2">Product Coming Soon</h2>
          <p>Our product catalog is being updated. Please check back later.</p>
        </div>
      </div>
    </main>
  )
}

export default Products 