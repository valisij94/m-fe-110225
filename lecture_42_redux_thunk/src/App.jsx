
import './App.css'
import Header from './components/header/Header.jsx';
import { Routes, Route, Link } from "react-router";
import Home from './pages/Home.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import TodoList from './components/todos/TodoList.jsx';
import AddTodo from './components/todos/AddTodo.jsx';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/products' element={<ProductsPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App