import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import "./Product.css";
import Filters from "./Filter";
import { CartState } from "../Context";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  const [isFilterOpen, setIsFilterOpen] = useState(false); // State to toggle filters in mobile

  return (
    <div className="homePage">
      {/* Filters in the header for mobile */}
      <header className="header mobile-filter bn ">
        <button
          className="btn open-filter-btn"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          {isFilterOpen ? "Close Filters" : "Open Filters"}
        </button>
        {isFilterOpen && <Filters />}
      </header>

      <div className="main-content">
        {/* Sidebar filters for larger screens */}
        <aside className="sidebar-filter">
          <Filters />
        </aside>

        {/* Product container */}
        <div className="productContainer">
          {products.map((prod) => (
            <SingleProduct key={prod.id} prod={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
