import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context";
import "./Header.css";

const Home = () => {
  const { cart, setCart } = useContext(CartContext);
  // const { cart, setCart } = useContext(CartContext);
  const handleCheckout = () => {
    setCart([]); // Clears the cart
    alert("Thank you for your purchase!");
  };

  return (
    <div className="navbar 	bg text-primary nav">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          <span className="txt">Shopping</span>
        </Link>
      </div>

      <div className="flex-none gap-2">
        <div className="flex-1 dropdown dropdown-end">
          <Link className="btn btn-ghost text-xl">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 txt"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cart.length}
              </span>
            </div>
          </Link>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow mn_col">
            <li>
              <Link to="/cart" className="btn btn-ghost text-xl txt_1">
                View Cart
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="btn btn-ghost text-xl txt_1"
                onClick={handleCheckout}
                disabled={cart.length === 0}
              >
                Checkout
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div> */}
        {/* <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
