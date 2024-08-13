import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import "./Product.css";
faker.seed(100);
const Home = ({ cart, setCart }) => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url({ category: "business" }),
  }));
  //console.log(productsArray);

  const [products] = useState(productsArray);
  console.log(cart);
  return (
    <div className="homePage">
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct
            key={prod.id}
            prod={prod}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
