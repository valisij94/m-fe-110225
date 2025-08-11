
import './App.css'
import { Routes, Route, Link } from "react-router";
import DemoCallback from './pages/DemoCallback.jsx';
import CallbackPage from './pages/CallbacksPage.jsx';

function App() {

  return (
    <>
      <Link to='/attempts'>Go to AttemptsList</Link>
      <br/>
      <Link to='/'>Go to Callback demo</Link>
      <Routes>
        <Route path='/' element={<DemoCallback />} />
        <Route path="/attempts" element={<CallbackPage />} />
      </Routes>
    </>
  );
}

export default App