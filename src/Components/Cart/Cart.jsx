import { useContext } from "react";
import CartContext from "./../../contexts/CartContext";
import { Link } from "react-router-dom";
import CartTotal from "../CartTotal/CartTotal";

function Cart() {
  const {cart} = useContext(CartContext);
  const cartList = cart ? Object.values(cart) : [];
  if (cartList.length === 0) {
    return (
    <> 
    <Link to="/">back</Link>
    <span>No items</span></>
    );
  } else {
    return (
      <>
        <Link to="/">back</Link>
        <ol>
          {cartList.map((item) => (
            <li key={item.id}>
              <div>{item.title}</div>
              <div>Quantity: {item.quantity}</div>
              <div> Item Total: {item.quantity * item.price.value}</div>
            </li>
          ))}
        </ol>
        <CartTotal />
      </>
    );
  }
}
export default Cart;
