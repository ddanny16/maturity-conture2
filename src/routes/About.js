import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Handshake from "../assets/handshake.jpg"
import Aboutus from "../components/Aboutus"
import AboutUs2 from "../components/AboutUs2"

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="About US" text="Our Core Values" trc={Handshake} link1="FAQs" link2="Contact" link1a="/faqs" link2a="/contact" />
      <Aboutus />
      <AboutUs2 />
    </div>
  )
}

export default About
