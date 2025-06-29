
import { useState } from 'react'
import './App.css'
import TodoStats from './components/todos/TodoStats'
import LoginForm from './components/loginForm/LoginForm'


function App() {

  console.log('Render whole App')

  const [loginValue, setLoginValue] = useState('');
  return (
    <>
      { loginValue && <h2>Hello, {loginValue}!</h2>}
      <LoginForm setLoginValue={setLoginValue}/>
    </>
  )

}

export default App
