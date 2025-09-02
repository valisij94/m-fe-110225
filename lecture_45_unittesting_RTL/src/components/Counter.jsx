import { memo } from 'react';
import { useState } from 'react';

function Counter( {handler} ) {

  const [inputValue, setInputValue] = useState('');
  const [counter, setCounter] = useState(0);

  console.log('Render Counter component')
  return (
    <div>
      <p>Now counter is: {counter}</p>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text"/>
      <button onClick={() => setCounter( old => old + 1 )}>Increment</button>
      <button onClick={() => setCounter( old => old - 1 )}>Decrement</button>
      <button onClick={() => {
        setCounter( old => old + Number.parseInt(inputValue) );
        handler();
      }}>Add something</button>
    </div>
  )
}

export default memo(Counter);