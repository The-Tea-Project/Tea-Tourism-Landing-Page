import Hero from '../sections/Hero'
import MarketPlace from '../sections/MarketPlace'
import Courses from '../sections/Courses'
import CTA from '../sections/CTA'
import ForEnterprise from '../sections/ForEnterprise'
import Stay from '../sections/Stay'
import Transport from '../sections/Transport'
import FoundationalCourses from '../sections/FoundationalCourses'

function Home() {
  return (
    <main>
      <Hero />
      <MarketPlace />
      <Stay/>
      <Transport/>
      <Courses />
      {/* <Banner /> */}
      <FoundationalCourses />
      <ForEnterprise />
      <CTA />
    </main>
  )
}

export default Home 