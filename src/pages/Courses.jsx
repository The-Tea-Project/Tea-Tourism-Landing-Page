import React from 'react'
import ForEnterprise from '../sections/ForEnterprise'

function Courses() {
  return (
    <main className="py-10">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-satoshi font-bold mb-8 text-[var(--primary-dark)]">
          Tea Education Courses
        </h1>
        <p className="text-lg mb-12">
          Learn the art and science of tea cultivation, processing, and appreciation through our expert-led courses.
        </p>
      </div>
      
      <ForEnterprise />
    </main>
  )
}

export default Courses 