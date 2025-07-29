
import './App.css'
import Header from './components/header/Header.jsx';
import { Routes, Route, Link } from "react-router";
import Home from './pages/Home.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ColorPicker from './components/colorPicker/ColorPicker.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/products' element={<ProductsPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <ColorPicker />
    </>
  );
}

export default App
