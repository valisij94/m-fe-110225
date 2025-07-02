import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

export default function ClicksCounter() {

  const count = useContext(CounterContext);

  return (
    <div className="clicksCounterContainer">
      <p>Clicked {count} times!</p>
      {/* <button onClick={() => setCount(old => old + 1)}>Click me!</button> */}
    </div>
  )
}