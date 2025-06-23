import { useState } from "react"

export default function SimpleInput( {placeholder, required, minLength, maxLength} ) {

  const [value, setValue] = useState('');

  const [error, setError] = useState('');

  const changeInputHandler = (event) => {
    setValue(event.target.value);
  }

  const blurHandler = () => {
    // check that field is required
    if (required && !value) {
      setError("Fill this field");
      return;
    }
    if (minLength && value.length < minLength) {
      setError('Too short!');
      return;
    }
    if (maxLength && value.length > maxLength) {
      setError('Too long!');
      return;
    }
    setError('');
  }

  return (
    <div>
      <input
        className="simpleInput"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={changeInputHandler}
        onBlur={blurHandler}
      />
      { error && <p>{error}</p> }
    </div>
  )
}