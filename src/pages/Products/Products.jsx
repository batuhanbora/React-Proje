import React, { useEffect, useState } from 'react'
import "./Products.css"

const Products = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data)=>{
          console.log(data);
          setProducts(data.products)
      });
  },[]);

  return (
    <div>
    <div className='fill'>
        {products.map((product)=>(
        <div className="product-card">
        <img src={product.thumbnail} alt={product.title} />
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <p className="price">{product.price}</p>
      </div>
      ))}
    </div>
    </div>
  )
}

export default Products