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

  // Отладочное сообщение, будет выводиться каждый раз, когда отрисовывается наш компонент
  console.log(`Rendering human with name ${humanName}, pulse is ${pulse}, temperature is ${temperature}`);

  return (
    <div>
      <h3>Hello, I am {humanName}!</h3>
      <p>Now my pulse is {pulse}</p>
      <p>Now my temperature is {temperature}</p>
      { pulse > 130 && <p>Wow, pulse is greater than 130! Let me rest a bit.</p>}
      <button onClick={makePullUps}>Make pull ups!</button>
    </div>
  )
}

export default Human;