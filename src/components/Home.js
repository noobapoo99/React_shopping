import React from "react";
import SingleProduct from "./SingleProduct";
import "./Product.css";
import Filters from "./Filter";
import { CartState } from "../Context"; // Only keep necessary imports

const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="homePage">
      <Filters />
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Home;
