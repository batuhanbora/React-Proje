import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../context/ApiContext"
import { v4 as uuidv4 } from "uuid";

export const Filterbox = () => {
  const { setFilter, categories, products,setFilterValue } = useContext(ApiContext);

  const [isBrandButtonActive, setBrandButtonActive] = useState(false);
  const [isCategoryButtonActive, setCategoryButtonActive] = useState(false);
  const [fields, setFields] = useState([]);
  const [selectedFilterValue, setSelectedFilterValue] = useState("all");

  const handleBrandButtonClick = () => {
    setBrandButtonActive(true);
    setCategoryButtonActive(false);
    setFilter("brand");
  };

  const handleFilterChange = (event) => {
    setSelectedFilterValue(event.target.value);
    setFilterValue(event.target.value);
  }

  const handleCategoryButtonClick = () => {
    setBrandButtonActive(false);
    setCategoryButtonActive(true);
    setFilter("category");
  };

  useEffect(() => {
    if (isBrandButtonActive) {
      setFields(products.map((product) => product.brand));
    } else if (isCategoryButtonActive) {
      setFields(categories);
    }
  }, [isBrandButtonActive, isCategoryButtonActive, products, categories]);

  return (
    <div className="">
      <div>
        <h2>Filter Box</h2>
        <div>
          <button
            
            onClick={handleBrandButtonClick}
          >
            Brand
          </button>
          <button
            // className={`${isCategoryButtonActive ? styles.active : ""}`}
            onClick={handleCategoryButtonClick}
          >
            Category
          </button>
          <select value={selectedFilterValue} onChange={handleFilterChange}>
            <option value="all">All</option>
            {fields.map((field) => (
              <option key={uuidv4()} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filterbox;
