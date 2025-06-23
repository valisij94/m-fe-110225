import { useState } from "react";

function Human( {humanName} ) {
  const [pulse, setPulse] = useState(60); // инициализируем начальным значением 60 (ударов в минуту)
  const [temperature, setTemperature] = useState(36.6); // температура тела

  // Функция "выполнить подтягивания", в результате увеличивается пульс
  const makePullUps = () => {
    const newPulse = pulse + 10;
    setPulse( newPulse );
    if (newPulse > 100) {
      // после пульса 100, на каждое увеличение пульса добавляем 0.025 градуса температуры
      setTemperature( temperature + 0.025 );
    }
  }


  const [value, setValue] = useState(''); // это для инпута, в который будем вводить названия вещей чтобы положить в карман
  const [pockets, setPockets] = useState( ['phone', 'keys'] ); // по умолчанию в карманах телефон и ключи

  const addSomething = () => {
    // Кладем в карман
    if (value) {

      setPockets( (oldPockets) => {
        return [ ...oldPockets, value ];
      } );
    }
  }

  // Обработчик события ввода чего-то в инпут
  const handleInputChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <h3>Hello, I am {humanName}!</h3>
      <p>Now my pulse is {pulse}</p>
      <p>Now my temperature is {temperature}</p>
      { pulse > 130 && <p>Wow, pulse is greater than 130! Let me rest a bit.</p>}
      <button onClick={makePullUps}>Make pull ups!</button>

      <input value={value} onChange={handleInputChange} placeholder="put something into pockets"/>
      <button onClick={addSomething}>Add into pockets</button>
      <h3>Pockets</h3>
      {
        pockets.map( thing => <p key={thing}>{thing}</p>)
      }
    </div>
  )
}

export default Human;