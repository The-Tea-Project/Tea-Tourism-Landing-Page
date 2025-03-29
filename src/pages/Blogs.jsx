import React from 'react'
import BlogsHome from '../blogs/Home'
import NavBar from '../components/NavBar'
function Blogs() {
  return (
    <>
      <div className="flex bg-[var(--cream)] flex-col items-center justify-center w-full p-10">

        <NavBar />
        <BlogsHome />
      </div>
    </>
  )
}

export default Blogs 