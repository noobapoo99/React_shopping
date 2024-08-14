import React, { useContext } from "react";
import { CartContext } from "../Context";
import "./singleProduct.css";
import Rating from "./Rating";
function SingleProduct({ prod }) {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="card bg-base-100 w-96 shadow-xl product crd">
      <figure>
        <img src={prod.image} alt={prod.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{prod.name}</h2>
        <span>Rs.{prod.price.split(".")[0]}</span>
        {prod.fastDelivery ? (
          <div>fast Delivery</div>
        ) : (
          <div>4 Days Delivery</div>
        )}
        <Rating rating={prod.ratings} />
        <div className="card-actions justify-end ">
          {cart.includes(prod) ? (
            <button
              className="btn btn sec"
              onClick={() => {
                setCart(cart.filter((c) => c.id !== prod.id));
              }}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="btn btn sec"
              onClick={() => {
                setCart([...cart, prod]);
              }}
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add To Cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
