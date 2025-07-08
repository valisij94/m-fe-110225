
import './App.css'
import Header from './components/header/Header.jsx';
import { Routes, Route, Link } from "react-router";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';


function App() {
  return (
    <>
      <Header />
      <h2>Will be rendered all times!</h2>
      <div style={{display: 'flex', gap: '15px'}}>
        <Link to='/page1'>Page 1</Link>
        <Link to='/page2'>Page 2</Link>
        <Link to='/page3'>Page 3</Link>
        <Link to='/page2/home'>Home on Page 2</Link>
      </div>
      <Routes>
        <Route path='/page1' element={<Page1 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path='/page2' element={<Page2 />}>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path="/" element={<Page1 />} />
      </Routes>
    </>
  )

}

export default App
