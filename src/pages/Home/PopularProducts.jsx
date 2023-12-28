import React, { useEffect, useState } from "react";

const PopularProducts = () => {
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
    <div className="random-products">
      {/* <div className="product-card">
        <img src="" alt="" />
        <h4>Test-1</h4>
        <p>Test-1 Aciklama</p>
      </div> */}
      {products.map((product)=>(
        product.rating > 3.50 && (
        <div key={product.id} className="product-card">
        <img src={product.thumbnail} alt={product.title} />
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <p className="price">{product.price}</p>
        <p className="rating">Rating: {product.rating}*</p>
      </div>
      )))}
    </div>
  );
};

export default PopularProducts;
