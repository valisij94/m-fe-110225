
import './App.css'
import { Routes, Route, Link } from "react-router";
import Home from './pages/Home.jsx';
import ProductsPage from './pages/ProductsPage.jsx';

function App() {

  return (
    <>
      <div style={{display: 'flex', gap: '10px'}}>
        <Link to='/products'>Products Page</Link>
        <Link to='/'>Home</Link>
      </div>
      <Routes>
        <Route path='/products' element={<ProductsPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App