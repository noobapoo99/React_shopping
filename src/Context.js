import React, { createContext, useReducer, useState, useContext } from "react";
import { cartReducer } from "./Reducer";
import { faker } from "@faker-js/faker";

export const CartContext = createContext();

// Generate products data
const generateProducts = () => {
  faker.seed(100);
  return [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url({ category: "business" }),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
};

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, {
    products: generateProducts(),
    cart: [],
  });

  return (
    <CartContext.Provider value={{ cart, setCart, state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContext);
};

export default Context;
