import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './sections/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Blogs from './pages/Blogs'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './index.css'
import LocomotiveScroll from "locomotive-scroll";
// import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const scroll = new LocomotiveScroll()

  return (
    <div className="app">
      {/* <ScrollToTop /> */}
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}