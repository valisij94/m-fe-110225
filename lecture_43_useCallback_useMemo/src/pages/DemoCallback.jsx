import { useEffect } from "react";
import Counter from "../components/Counter";
import { useState } from "react";
import { useCallback } from "react";

export default function DemoCallback() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect( () => {
    const intervalId = setInterval( () => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const simpleHandler = useCallback( () => {
    console.log('Hello from simple handler!');
  }, []);


  return (
    <div className='page'>
      <h2>Demo Page for useCallback</h2>
      <p>This page simply renders Counter component, and current time.</p>
      <p>Now is {time}</p>
      <Counter handler={simpleHandler}/>
    </div>
  )
}