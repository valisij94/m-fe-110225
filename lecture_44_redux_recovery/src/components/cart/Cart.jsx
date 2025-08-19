import { useSelector } from "react-redux";

export default function Cart() {

  const cartState = useSelector(state => state.cart);

  return (
    <div>
      {
        Object.entries(cartState.cartProducts).map( entry => {
          return <p key={entry[0]}>{entry[1].name}: {entry[1].count}; {entry[1].price}</p>
        } )
      }
      <p>Total price is: {cartState.totalPrice}</p>
      <p>Total count is: {cartState.totalCount}</p>
    </div>
  );
}