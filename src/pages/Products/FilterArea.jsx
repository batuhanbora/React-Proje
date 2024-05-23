import React, { useContext } from "react";
import { Filterbox } from "../Products/Filterbox.jsx";
import "./Products.css";
import Sortbox from "../Products/Sortbox.jsx";

const ProductList = () => {
  return (
    <div className="">
      <Filterbox/>
      <div>
        <div  className="">
          <Sortbox/>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
