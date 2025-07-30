import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createIncAction, decrement, incrementByAmount } from '../../redux/slices/counterSlice';

export default function Counter() {

  const { value } = useSelector( state => state.counter );
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const addSomethingToCounter = () => {
    if (inputValue) {
      dispatch( incrementByAmount( +inputValue ) );
    }
  }

  return (
    <div>
      <p>Now counter is: {value}</p>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text"/>
      <button onClick={() => dispatch(createIncAction())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={addSomethingToCounter}>Add something</button>
    </div>
  )
}