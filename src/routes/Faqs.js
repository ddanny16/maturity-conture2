import React from 'react'
import Navbar from '../components/Navbar'
import Faqs1 from '../pages/Faqs1'
import HeroImg from '../components/HeroImg'
import Que from "../assets/fadqimg.jpg"

const Faqs = () => {
  return (
    <div>
      <Navbar />     
       <HeroImg heading="The answers to your questions" text="We Offer The most Convinient Answers" trc={Que} link1="Products" link2="Contact" link1a="/project" link2a="contact" />


      <Faqs1 />
    </div>

  )
}

export default Faqs
