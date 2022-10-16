import React from 'react'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import SectionSlide from '../components/SectionSlide'
import IntroImj from "../assets/diego.jpg"
import Aboutus from "../components/Aboutus"
import Footer from '../components/Footers'


const Home = () => {
  return (
    <div>

      <Navbar />
      <HeroImg heading="Variety Of Collections" text="2022 New Stocks" trc={IntroImj} link1="Products" link2="Contact" link1a="/project" link2a="contact" />
      <SectionSlide />

      <Aboutus />
      <Footer />

    </div>
  )
}

export default Home
