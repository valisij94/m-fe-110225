import { useState } from "react";

export default function LoginForm( formSuccessCallback ) {

  const [login, setLogin] = useState('');
  const [pwd, setPwd] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(false);

  const [error, setError] = useState('');

  const handleLoginChange = (event) => {
    setSubmissionStatus(false);
    setLogin(event.target.value);
  }

  const handlePwdChange = (event) => {
    setSubmissionStatus(false);
    setPwd(event.target.value);
  }

  const handleSubmitClick = (event) => {
    event.preventDefault();
    let isError = false;
    if (!login) {
      isError = true;
      setError('Please, enter login!');
    }
    if (!pwd) {
      isError = true;
      setError('Please, enter password!');
    }
    if (!isError) {
      setError('');
      setSubmissionStatus(true);
      formSuccessCallback && formSuccessCallback('WOW!');
    }
  }

  return (
    <form>
      <input value={login} onChange={handleLoginChange} type='text' placeholder="login" />
      <input value={pwd} onChange={handlePwdChange} type='password' placeholder="password" />
      <button onClick={handleSubmitClick}>Submit form</button>
      { error && <p>Fill all fields!</p>}
      { submissionStatus && <p>Form had been sent!</p>}
    </form>
  )
}