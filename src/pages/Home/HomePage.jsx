import React from 'react'
import "./HomePage.css"
import Slider from './Slider'
import PopularProducts from './PopularProducts'

const HomePage = () => {
  return (
    <div className="homepage">
        <div className='fill'>
        <Slider/>        
        <PopularProducts/>
    </div>
    </div>
  )
}

export default HomePage