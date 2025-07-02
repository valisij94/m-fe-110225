
import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/todos/TodoList.jsx';
import ProductCard from './components/productCard/ProductCard.jsx';


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
      <h3>Demonstration of useEffect</h3>

      <ProductCard productId={1}/>
      <p>The button here manages the visibility of the ClicksCounter component to demonstrate different phases of the component's lifecycle.</p>

      <button onClick={manageTodoListVisibility}>Show/hide TodoList</button>

      { error && <p>Something went wrong!</p>}
      { loading ? <p>Please wait!</p> : (todoListVisible && <TodoList todoHeader='My Todos' todos={todos} dropTodo={dropTodo} />) }
    </>
  )

}

export default App
