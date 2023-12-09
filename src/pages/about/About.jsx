import React from 'react'
import Feature from '../home/components/Feature'
import CommonHero from '../shared/CommonHero'
import AboutIntro from './components/AboutIntro'
import AboutService from './components/AboutService'
import AboutTeam from './components/AboutTeam'
import AboutTestimonials from './components/AboutTestimonials'
import BrandArea from './components/BrandArea'

function About() {
  return (
    <>
      <CommonHero PageName={"About us"} />
      <AboutIntro />
      <AboutService />
      <AboutTeam />
      <Feature />
      <AboutTestimonials />
      <BrandArea />
    </>
  )
}

export default About