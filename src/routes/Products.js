import React from 'react'
import Navbar from '../components/Navbar'
import IntroImj5 from "../assets/aman.jpg"
import HeroImg from '../components/HeroImg'



const Products = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="Our Products" text="BE SURE TO CONTACT US FOR MORE" trc={IntroImj5} link1="Home" link2="Contact" link1a="/" link2a="contact" />
    </div>
  )
}

export default Products
