import { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct.js";
import { CartContext } from "../Context.js";

const Cart = () => {
  const [total, setTotal] = useState(0);

  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((prod) => prod.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="cart-container flex flex-col md:flex-row gap-4 p-4">
      {/* Table section */}
      <div className="flex-1 overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((prod, index) => (
              <tr key={prod.id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={prod.image} alt={prod.name} />
                    </div>
                  </div>
                </td>
                <td>{prod.name}</td>
                <td>Rs.{prod.price}</td>
                <td>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => removeFromCart(prod.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th>Total</th>
              <th>Rs.{total}</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Product list section */}
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4">My Cart</h2>
        <span>Total: Rs.{total}</span>
      </div>
    </div>
  );
};

export default Cart;
