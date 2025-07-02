
import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/todos/TodoList.jsx';
import ProductCard from './components/productCard/ProductCard.jsx';
import Button from './components/button/Button.jsx';
import { ThemeContext, ThemeContextWrapper } from './context/ThemeContext.jsx';
import { useContext } from 'react';
import { CounterContext } from './context/CounterContext.jsx';
import ClicksCounter from './components/clicksCounter/ClicksCounter.jsx';
import Header from './components/header/Header.jsx';


function App() {

  const [todoListVisible, setTodoListVisible] = useState(true);

  const manageTodoListVisibility = () => {
    setTodoListVisible(old => !old);
  }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState([]);

  const dropTodo = (todoId) => {
    setTodos( old => old.filter(todo => todo.id !== todoId) );
  }

  useEffect( () => {
    setLoading(true);
    setError(false);
    fetch('https://dummyjson.com/todos')
      .then( resp => resp.json())
      .then( data => {
        setTodos(data.todos);
      })
      .catch( () => {
        setError(true);
      })
      .finally( () => {
        setLoading(false);
      });
  }, [] );

  return (
    <>
      <ThemeContextWrapper>
        <Header />

        <TodoList todos={todos} dropTodo={dropTodo} />
      </ThemeContextWrapper>
    </>
  )

}

export default App
