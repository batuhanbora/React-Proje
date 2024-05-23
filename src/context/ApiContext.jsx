import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("all");
  const [filterValue, setFilterValue] = useState("all");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/smartphones/"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  return (
    <ApiContext.Provider
      value={{ products, categories, filter, setFilter, sort, setSort, filterValue, setFilterValue }}
    >
      {children}
    </ApiContext.Provider>
  );
};
