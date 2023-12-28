import React from 'react'
import "./HomePage.css"
import Slider from './Slider'

const HomePage = () => {
  return (
    <div className="homepage">
        <div className='fill'></div>
        <Slider/>        
        <div className="random-products">
            <div className="product-card">
                <img src="" alt="" />
                <h4>Test-1</h4>
                <p>Test-1 Aciklama</p>
            </div>
            <div className="product-card">
                <img src="" alt="" />
                <h4>Test-1</h4>
                <p>Test-1 Aciklama</p>
            </div>
            <div className="product-card">
                <img src="" alt="" />
                <h4>Test-1</h4>
                <p>Test-1 Aciklama</p>
            </div>
            <div className="product-card">
                <img src="" alt="" />
                <h4>Test-1</h4>
                <p>Test-1 Aciklama</p>
            </div>
            <div className="product-card">
                <img src="" alt="" />
                <h4>Test-1</h4>
                <p>Test-1 Aciklama</p>
            </div>
            <div className="product-card">
                <img src="" alt="" />
                <h4>Test-1</h4>
                <p>Test-1 Aciklama</p>
            </div>
        </div>
    </div>
  )
}

export default HomePage