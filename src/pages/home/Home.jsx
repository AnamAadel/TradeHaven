import React from 'react'
import BestCollection from './components/BestCollection'
import DealOfTheDay from './components/DealOfTheDay'
import Feature from './components/Feature'
import HomeBlog from './components/HomeBlog'
import HomeHero from './components/HomeHero'
import ProductGallery from './components/ProductGallery'

function Home() {
  return (
    <>
      <HomeHero />
      <Feature />
      <ProductGallery />
      <BestCollection />
      <DealOfTheDay />
      <HomeBlog />
    </>
  )
}

export default Home