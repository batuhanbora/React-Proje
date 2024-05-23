import React, { useContext, useEffect, useState } from 'react'
import "./Products.css"
import FilterArea from './FilterArea';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions';
import { ApiContext } from '../../context/ApiContext';

const Products = () => {

  const cart = useSelector((state)=>state.products)
  const dispatch = useDispatch()

  const { products, filter, filterValue, sort } = useContext(ApiContext);
  
  const sortProducts = (products, sortType) => {
    let sortedProducts = [...products];
    switch (sortType) {
      case "new":
        sortedProducts.sort((a, b) => b.id - a.id);
        break;
        case "price":
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
          case "name":
            sortedProducts.sort((a, b) => {
              const nameA = a.name || "";
              const nameB = b.name || "";
              return nameA.localeCompare(nameB);
            });
            break;
            default:
              break;
            }
            const sortedAndFilteredProducts = sortProducts(
              filterProducts(products, filter, filterValue),
              sort
            );
            
    return sortedProducts;
  };

  const filterProducts = (productList, filterType, filterValue) => {
    let filteredProducts = [...productList];
    switch (filterType) {
      case "brand":
        if (filterValue !== "all") {
          console.log(`Filtering by brand: ${filterValue}`);
          filteredProducts = filteredProducts.filter(
            (product) => product.brand === filterValue
          );
        }
        break;
      case "category":
        console.log("Filtering by category");
        if (filterValue !== "all") {
          console.log("asd");
          filteredProducts = filteredProducts.filter(
            (product) => product.category === filterValue
          );
        }
        break;
      case "all":
        console.log("No filtering");
        break;
      default:
        break;
    }

    return filteredProducts;
  };

  const handleAddToCart = (product) =>{
    dispatch(
      addToCart({
        thumbnail: product.thumbnail,
        title: product.title,
        price: product.price,
        amount: 1,
      })
    );
  }

  return (
    <div className='products-area'>
      <div className="filter-area">
        <FilterArea />
      </div>
    <div className='fill'>
        {products.map((product)=>(
        <div key={product.id} className="product-card">
        <img src={product.thumbnail} alt={product.title} />
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <p className="price">{product.price}</p>
        <p className="rate">{product.rate}</p>
        <button onClick={()=>handleAddToCart(product)}>+</button>
      </div>
      ))}
    </div>
    </div>
  )
}

export default Products