import SingleProduct from "./SingleProduct.js";

const Cart = ({ cart, setCart }) => {
  return (
    <div>
      <span>My Cart</span>
      <br />
      <span>Total : Rs.200</span>
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
