import React from 'react'
import NavBar from '../components/NavBar'
import TransportHome from '../transport/Home'

function Transport() {
  return (
    <div className="flex bg-[var(--cream)] flex-col items-center justify-center w-full p-10">
      <NavBar />
      <TransportHome />
    </div>
  )
}

export default Transport 