import React, { useContext } from "react";
import { CartContext, CartState } from "../Context";
import SingleProduct from "./SingleProduct";
import "./Product.css";
import Filters from "./Filter";

const Home = () => {
  // const { products } = useContext(CartContext);
  const {
    state: { products },
  } = CartState();
  console.log(products);

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
