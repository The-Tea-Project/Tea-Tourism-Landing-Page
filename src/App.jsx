import Benefits from "./sections/Benefits";
import CTA from "./sections/CTA";
import Email from "./sections/Email";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Reviews from "./sections/Reviews";
import ForEnterprise from "./sections/ForEnterprise";
import './index.css'
import LocomotiveScroll from "locomotive-scroll";

export default function App() {
  const scroll = new LocomotiveScroll()

  return (
    <>
      <Hero/>
      <Benefits/>
      <Features/>
      <Reviews/>
      <ForEnterprise/>
      <CTA/>
      <Footer/>
    </>
  )
}