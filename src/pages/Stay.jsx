import React from 'react'
import NavBar from '../components/NavBar'
import StayHome from '../stay/Home'

function Stay() {
  return (
    <div className="flex bg-[var(--cream)] flex-col items-center justify-center w-full p-10">
      <NavBar />
      <StayHome />
    </div>
  )
}

export default Stay 