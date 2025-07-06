
import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/todos/TodoList.jsx';
import Header from './components/header/Header.jsx';


function App() {
  const [todos, setTodos] = useState([]);

  const dropTodo = (todoId) => {
    setTodos( old => old.filter(todo => todo.id !== todoId) );
  }

  useEffect( () => {
    fetch('https://dummyjson.com/todos')
      .then( resp => resp.json())
      .then( data => {
        setTodos(data.todos);
      });
  }, [] );

  return (
    <>
        <Header />
        <TodoList todos={todos} dropTodo={dropTodo} />
    </>
  )

}

export default App
