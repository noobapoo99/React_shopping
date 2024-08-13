import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct.js";

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState();

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
          <SingleProduct
            prod={prod}
            key={prod.id}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
