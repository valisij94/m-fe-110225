import {useState} from 'react';
import { addTodo } from '../../redux/slices/todosSlice.js';
import { useDispatch } from 'react-redux';

export default function AddTodo() {

  const [todo, setTodo] = useState('');

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  }

  const dispatch = useDispatch();

  const btnClickHandler = () => {
    if (todo) dispatch(addTodo( {id: Date.now(), todo: todo} ));
    setTodo('');
  }

  return (
    <div>
      <input type='text' placeholder='Todo name' value={todo} onChange={handleTodoChange}/>
      <button onClick={btnClickHandler}>Add Todo</button>
    </div>
  )
}