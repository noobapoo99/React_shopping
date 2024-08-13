import React from "react";

function SingleProduct({ prod }) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl product">
      <figure>
        <img src={prod.image} alt={prod.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{prod.name}</h2>
        <span>Rs.{prod.price.substring(0, 3)}</span>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
