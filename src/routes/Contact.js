import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Contact1 from "../assets/contact_us.jpg"
import Contacttop from '../components/Contacttop'
import Reach from '../components/Reach'
import Footer from "../components/Footers"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="Contact Us" text="Our Contacts & How to reach us" trc={Contact1} link1="Products" link2="About" link1a="/project" link2a="/about" />
      <Reach />
      <Contacttop />
      <Footer />
    </div>
  )
}

export default Contact
