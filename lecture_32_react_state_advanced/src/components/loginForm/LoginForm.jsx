import { useState } from "react";

export default function LoginForm( {setLoginValue,}) {

  console.log('Render login form')
  const [login, setLogin] = useState('');
  const [passwd, setPasswd] = useState('');

  const [error, setError] = useState(false);

  const checkForm = () => {
    if (login && passwd) {
      setError(false);
      console.log('Auth success', login, passwd);
      setLoginValue(login);
    } else {
      setError(true);
    }
  }

  return (
    <div>
      <input value={login} onChange={e => setLogin(e.target.value)}/>
      <input value={passwd} onChange={e => setPasswd(e.target.value)}/>
      <button onClick={checkForm}>Authorize</button>
      {error && <p>Fill all fields!</p>}
    </div>
  )
}