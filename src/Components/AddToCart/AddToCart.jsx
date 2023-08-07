import { useContext } from "react";
import CartContext from "./../../contexts/CartContext";

function AddToCart({ product }) {
  const [cart, increaseQuantity, decreaseQuantity] = useContext(CartContext);

  function increment() {
    increaseQuantity(product);
  }

  function decrement() {
    decreaseQuantity(product);
  }

  const quantity = cart[product.id] ? cart[product.id].quantity : 0;

  if (quantity === 0) {
    return (
      <div>
        <button onClick={increment}>Add To Cart</button>
      </div>
    );
  } else {
    return (
      <>
        <button onClick={decrement}>-</button>
        <span> {quantity}</span>
        <button onClick={increment}>+</button>
      </>
    );
  }
}
export default AddToCart;
