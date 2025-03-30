import React from 'react'
import Hero from '../sections/Hero'
import MarketPlace from '../sections/MarketPlace'
import Courses from '../sections/Courses'
import CTA from '../sections/CTA'
import ForEnterprise from '../sections/ForEnterprise'
import Banner from '../sections/Banner'
import Stay from '../sections/Stay'
import Transport from '../sections/Transport'

function Home() {
  return (
    <main>
      <Hero />
      <MarketPlace />
      <Stay/>
      <Transport/>
      <Courses />
      <Banner />
      <ForEnterprise />
      <CTA />
    </main>
  )
}

export default Home 