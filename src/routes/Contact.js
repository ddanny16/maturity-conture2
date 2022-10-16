import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Contact1 from "../assets/contact_us.jpg"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="Contact Us" text="Our Contacts & How to reach us" trc={Contact1} link1="Products" link2="Contact" link1a="/project" link2a="contact" />
     
    </div>
  )
}

export default Contact
