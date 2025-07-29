
import './App.css'
import Header from './components/header/Header.jsx';
import { Routes, Route, Link } from "react-router";
import Home from './pages/Home.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import AddTodo from './components/todos/AddTodo.jsx';
import TodoList from './components/todos/TodoList.jsx';
import Counter from './components/counter/Counter.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/products' element={<ProductsPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Counter />
      <AddTodo />
      <TodoList todoHeader='Simple Todos'/>
    </>
  );
}

export default App
