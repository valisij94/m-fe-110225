import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function SimpleParagraph() {

  const func = () => {
    return 'Result!';
  }

  return (
    <p className='simpleParagraph'>{func()}</p>
  );
}

function SimpleListItem() {
  return (
    <li className="simpleListItem">
      <SimpleParagraph />
      <button className="listItemButton">Кнопка элемента</button>
    </li>
  );
}

function SimpleList() {
  return (
    <>
      <h2>Simple List!</h2>
      <ul className='simpleUnorderedList'>
        <SimpleListItem />
        <SimpleListItem />
        <SimpleListItem />
        <SimpleListItem />
      </ul>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleList />
  </StrictMode>
)
