import { useState } from "react"

export default function SimpleInput( {placeholder, required} ) {

  const [value, setValue] = useState('');

  const [error, setError] = useState(false);

  const changeInputHandler = (event) => {
    setValue(event.target.value);
  }

  const blurHandler = () => {
    if (required && !value) {
      setError(true);
    } else {
      setError(false);
    }
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
      { error && <p>Fill this field!</p> }
    </div>
  )
}