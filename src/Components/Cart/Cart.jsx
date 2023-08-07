import { useContext } from "react";
import CartContext from "./../../contexts/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const [cart] = useContext(CartContext);
  const cartList = cart ? Object.values(cart) : [];
  if (cartList.length === 0) {
    return <> No items </>;
  } else {
    return (
      <>
        <Link to="/">back</Link>
        <ol>
          {cartList.map((item) => (
            <li key={item.id}>
              <div>{item.title}</div>
              <div>Quantity: {item.quantity}</div>
            </li>
          ))}
        </ol>
      </>
    );
  }
}
export default Cart;
