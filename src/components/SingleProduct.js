import React, { useContext } from "react";
import { CartContext } from "../Context";

function SingleProduct({ prod }) {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="card bg-base-100 w-96 shadow-xl product">
      <figure>
        <img src={prod.image} alt={prod.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{prod.name}</h2>
        <span>Rs.{prod.price.substring(0, 3)}</span>
        <div className="card-actions justify-end">
          {cart.includes(prod) ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                setCart(cart.filter((c) => c.id !== prod.id));
              }}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => {
                setCart([...cart, prod]);
              }}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
