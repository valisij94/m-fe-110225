import { useRef } from "react";

export default function Button( {text, clickHandler} ) {

  const counterRef = useRef(0);

  // это понадобится чуть позже
  const btnClickHandler = (e) => {
    clickHandler(e);
    counterRef.current += 1;
    console.log('Now clicks count is:', counterRef.current);
  }

  console.log('Button component rendered');

  return (
    <button onClick={btnClickHandler} >{text}</button>
  );
}