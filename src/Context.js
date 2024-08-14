import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useState,
} from "react";
import { cartReducer } from "./Reducer";
import { faker } from "@faker-js/faker";
import Cart from "./components/Cart";

export const CartContext = createContext();

// Generate products data
const generateProducts = () => {
  faker.seed(100);
  return [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url({ category: "business" }),
  }));
};

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, {
    products: generateProducts(), // Move product generation here
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
