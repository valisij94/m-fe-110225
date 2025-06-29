
import { useState } from 'react'
import './App.css'
import ClicksCounter from './components/clicksCounter/ClicksCounter';
import TodoList from './components/todos/TodoList';
import {todoList} from './data/todos.js';


function App() {

  const [counterVisible, setCounterVisible] = useState(true);

  const manageCounterVisibility = () => {
    setCounterVisible( old => !old );
  }

  const [todos, setTodos] = useState(todoList);
  const dropTodo = (todoId) => {
    setTodos( old => old.filter(todo => todo.id !== todoId) );
  }

  return (
    <>
      <h3>Demonstration of useEffect</h3>
      <p>The button here manages the visibility of the ClicksCounter component to demonstrate different phases of the component's lifecycle.</p>
      <button onClick={manageCounterVisibility}>Show/hide counter</button>

      {counterVisible && <ClicksCounter />}

      <TodoList todoHeader='My Todos' todos={todos} dropTodo={dropTodo} />
    </>
  )

}

export default App
