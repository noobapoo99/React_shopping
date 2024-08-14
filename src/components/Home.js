import React, { useContext } from "react";
import { CartContext } from "../Context";
import SingleProduct from "./SingleProduct";
import "./Product.css";

const Home = () => {
  const { products } = useContext(CartContext); // Access products from context

  return (
    <div className="homePage">
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Home;
