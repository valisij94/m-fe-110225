
import { useState, useEffect } from 'react'
import './App.css'
import ClicksCounter from './components/clicksCounter/ClicksCounter.jsx';
import TodoList from './components/todos/TodoList.jsx';
import {todoList} from './data/todos.js';
import UserInteractionCounter from './components/userInteractionCounter/UserInteractionCounter.jsx';


function App() {

  const [counterVisible, setCounterVisible] = useState(true);

  const [todoListVisible, setTodoListVisible] = useState(true);

  const manageTodoListVisibility = () => {
    setTodoListVisible(old => !old);
  }
  const manageCounterVisibility = () => {
    setCounterVisible( old => !old );
  }

  const [todos, setTodos] = useState(todoList);
  const dropTodo = (todoId) => {
    setTodos( old => old.filter(todo => todo.id !== todoId) );
  }

  useEffect( () => { console.log('App component is mounted!') }, [] );
  useEffect( () => { console.log('App component updated!') } );

  return (
    <>
      <h3>Demonstration of useEffect</h3>
      <p>The button here manages the visibility of the ClicksCounter component to demonstrate different phases of the component's lifecycle.</p>
      <button onClick={manageCounterVisibility}>Show/hide counter</button>

      {/* {counterVisible && <ClicksCounter />} */}

      { counterVisible && <UserInteractionCounter /> }

      <button onClick={manageTodoListVisibility}>Show/hide TodoList</button>

      { todoListVisible && <TodoList todoHeader='My Todos' todos={todos} dropTodo={dropTodo} /> }
    </>
  )

}

export default App
