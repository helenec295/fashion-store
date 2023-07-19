import React from 'react'
import Slider from '../components/Slider'
import './Home.scss'
import FeaturedProducts from '../components/FeaturedProducts'
import Categories from '../components/Categories'
import Contact from '../components/Contact'



function Home() {
  return (
    <div className='home'>
        <Slider />
        <FeaturedProducts type='featured' />
        <Categories />
        <FeaturedProducts type='trending' />
        <Contact />
    </div>
  )
}

export default Home