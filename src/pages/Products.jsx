import React from 'react'
import ProductsHome from '../products/Home'
import NavBar from '../components/NavBar'

function Products() {
  return (
    <div className="flex bg-[var(--cream)] flex-col items-center justify-center w-full p-10">
      <NavBar />
      <ProductsHome />
    </div>
  )
}

export default Products 