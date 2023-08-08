import { useContext, useMemo } from "react";
import CartContext from "../../contexts/CartContext";

const CartTotal = () => {
  const {cart} = useContext(CartContext)
  const cartList = Object.values(cart);
  function getCartTotal(){
    console.log("memo")
    return cartList.reduce((acc, item) => {return acc+(item.quantity * item.price.value)}, 0)
  }
  const total = useMemo(getCartTotal, [cart])
  return (
    <div>Total : {total}</div>
  )
}
export default CartTotal;