import { useState } from "react";

export default function ClicksCounter() {

  const [count, setCount] = useState(0);
  return (
    <div className="clicksCounterContainer">
      <p>Clicked {count} times!</p>
      <button onClick={() => setCount(old => old + 1)}>Click me!</button>
    </div>
  )
}