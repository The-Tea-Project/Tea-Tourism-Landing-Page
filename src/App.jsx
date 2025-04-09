import { Routes, Route } from 'react-router-dom'
import Footer from './sections/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Blogs from './pages/Blogs'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './index.css'
import BlogPost from './blogs/BlogPost'
import Product from './products/Product'
import Stay from './pages/Stay'
import Room from './stay/Room'
import Transport from './pages/Transport'
import TransportPage from './transport/TransportPage'
import CourseDetail from './courses/CourseDetail'
export default function App() {

  return (
    <div className="app">
      {/* <ScrollToTop /> */}
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/stays" element={<Stay />} />
        <Route path="/stays/:id" element={<Room />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/transport/:id" element={<TransportPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:level/:courseName" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}