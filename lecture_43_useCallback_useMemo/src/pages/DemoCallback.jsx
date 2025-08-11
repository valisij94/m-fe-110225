import { useEffect } from "react";
import Counter from "../components/Counter";
import { useState } from "react";

export default function DemoCallback() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect( () => {
    setInterval( () => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);


  return (
    <div className='page'>
      <h2>Demo Page for useCallback</h2>
      <p>This page simply renders Counter component, and current time.</p>
      <p>Now is {time}</p>
      <Counter />
    </div>
  )
}