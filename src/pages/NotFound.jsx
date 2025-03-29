import React from 'react'
import { Link } from 'react-router-dom'
import CTABtn from '../components/CTABtn'

function NotFound() {
  return (
    <main className="container mx-auto py-40 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-6xl font-satoshi font-bold mb-6 text-[var(--primary-dark)]">404</h1>
        <h2 className="text-3xl font-satoshi font-bold mb-6 text-gray-800">Page Not Found</h2>
        <p className="text-lg mb-12 text-gray-600">
          Oops! The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <div className="inline-block">
          <Link to="/">
            <CTABtn text="Back to Home" />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound 