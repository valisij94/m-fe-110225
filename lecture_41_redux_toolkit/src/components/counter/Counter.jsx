import { useSelector, useDispatch } from 'react-redux';
import { decrementAction, incrementAction } from '../../redux/actions/counterActions';

export default function Counter() {

  const counter = useSelector( state => state.counter );
  const dispatch = useDispatch();

  return (
    <div>
      <p>Now counter is: {counter}</p>
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
    </div>
  )
}