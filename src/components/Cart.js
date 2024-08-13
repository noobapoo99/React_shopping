import { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct.js";
import { CartContext } from "../Context.js";

const Cart = () => {
  const [total, setTotal] = useState();
  const { cart } = useContext(CartContext);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <span>My Cart</span>
      <br />
      <span>Total : Rs.{total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
