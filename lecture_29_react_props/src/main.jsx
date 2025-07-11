import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import SimpleHeader from  './components/SimpleHeader.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleHeader/>
    <SimpleHeader headerText="Something here"/>
  </StrictMode>
)