import React, { useContext, useState } from "react";
import { CartContext } from "../Context";
import Rating from "./Rating";
import "./filter.css";

function Filters() {
  const { state, dispatch } = useContext(CartContext);
  const [rate, setRate] = useState(1);
  const [includeOutOfStock, setIncludeOutOfStock] = useState(true);
  const [fastDelivery, setFastDelivery] = useState(true);
  const [sortOrder, setSortOrder] = useState("ascending");

  const applyFilters = () => {
    let filteredProducts = [...state.products];

    // Filter by stock
    if (!includeOutOfStock) {
      filteredProducts = filteredProducts.filter((prod) => prod.inStock > 0);
    }

    // Filter by fast delivery
    if (fastDelivery) {
      filteredProducts = filteredProducts.filter((prod) => prod.fastDelivery);
    }

    // Filter by rating
    filteredProducts = filteredProducts.filter((prod) => prod.ratings >= rate);

    // Sort products
    filteredProducts.sort((a, b) => {
      if (sortOrder === "ascending") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    // Update the products in context
    dispatch({ type: "SET_PRODUCTS", payload: filteredProducts });
  };

  // Function to handle clearing filters
  const clearFilters = () => {
    // Reset state to default values
    setRate(1);
    setIncludeOutOfStock(true);
    setFastDelivery(true);
    setSortOrder("ascending");

    // Reapply filters to reset the product list
    applyFilters();
  };

  return (
    <div className="">
      <ul className="menu bg-base-200 rounded-box w-56 fil">
        <li className="menu-title ">
          <span className="sec_1">Filter</span>
        </li>
        <li>
          <span>
            <input
              type="radio"
              name="sort-order"
              className="radio sec"
              checked={sortOrder === "ascending"}
              onChange={() => setSortOrder("ascending")}
            />
            Ascending
          </span>
        </li>
        <li>
          <span>
            <input
              type="radio"
              name="sort-order"
              className="radio sec"
              checked={sortOrder === "descending"}
              onChange={() => setSortOrder("descending")}
            />
            Descending
          </span>
        </li>
        <li>
          <span>
            <input
              type="checkbox"
              className="checkbox sec"
              checked={includeOutOfStock}
              onChange={() => setIncludeOutOfStock(!includeOutOfStock)}
            />
            Include Out of Stock
          </span>
        </li>
        <li>
          <span>
            <input
              type="checkbox"
              className="checkbox sec"
              checked={fastDelivery}
              onChange={() => setFastDelivery(!fastDelivery)}
            />
            Fast Delivery
          </span>
        </li>
        <li>
          <span>
            <label>Rating</label>
            <Rating rating={rate} onClick={(i) => setRate(i + 1)} />
          </span>
        </li>
        <li>
          <button className="btn sec" onClick={applyFilters}>
            Apply Filters
          </button>
        </li>
        <li>
          <button className="btn sec" onClick={clearFilters}>
            Clear Filters
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Filters;
