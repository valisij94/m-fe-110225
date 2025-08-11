import { useState } from 'react';

export default function Counter() {

  const [inputValue, setInputValue] = useState('');
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Now counter is: {counter}</p>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text"/>
      <button onClick={() => setCounter( old => old + 1 )}>Increment</button>
      <button onClick={() => setCounter( old => old - 1 )}>Decrement</button>
      <button onClick={() => setCounter( old => old + Number.parseInt(inputValue) )}>Add something</button>
    </div>
  )
}