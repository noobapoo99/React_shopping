import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context.js";
import "./cart.css";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + Number(curr.price) * (curr.quantity || 1),
        0
      )
    );
  }, [cart]);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((prod) => prod.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cart.map((prod) =>
      prod.id === productId ? { ...prod, quantity: Number(quantity) } : prod
    );
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    setCart([]); // Clears the cart
    alert("Thank you for your purchase!");
  };

  return (
    <div className="cart-container flex flex-col md:flex-row gap-4 w-full min-h-screen p-4 main_bg">
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
              <th>Quantity</th>
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
                  <select
                    value={prod.quantity || 1}
                    onChange={(e) => updateQuantity(prod.id, e.target.value)}
                    className="select select-bordered w-full max-w-xs"
                  >
                    {[...Array(10).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </td>
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
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Summary section */}
      <div className="summary-section w-full md:w-1/4 md:ml-auto check_pd">
        <h2 className="text-xl font-bold mb-4">My Cart</h2>
        <span>Total: Rs.{total}</span>
        <div className="mt-4">
          <button
            className="btn checkout"
            onClick={handleCheckout}
            disabled={cart.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
