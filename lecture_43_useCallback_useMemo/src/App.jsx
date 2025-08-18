
import './App.css'
import { Routes, Route, Link } from "react-router";
import DemoCallback from './pages/DemoCallback.jsx';
import CallbackPage from './pages/CallbacksPage.jsx';
import ProductsPage from './pages/Products.jsx';

function App() {

  return (
    <>
      <Link to='/attempts'>Go to AttemptsList</Link>
      <br/>
      <Link to='/'>Go to Callback demo</Link>
      <br/>
      <Link to='/products'>Products</Link>
      <Routes>
        <Route path='/' element={<DemoCallback />} />
        <Route path="/attempts" element={<CallbackPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App