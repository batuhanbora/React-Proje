import React from 'react'
import "./HomePage.css"
import Slider from './Slider'
import PopularProducts from './PopularProducts'

const HomePage = () => {
  return (
    <div className="homepage">
        <Slider/>
        <div className='container'>
        <div className="popular-products">
          <h2>En Begenilen Urunlerimiz</h2>
          </div>        
        <PopularProducts/>
    </div>
    </div>
  )
}

export default HomePage