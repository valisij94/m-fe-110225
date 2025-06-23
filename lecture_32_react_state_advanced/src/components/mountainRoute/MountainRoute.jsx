import { useState } from "react";

export default function LonelyMountainRoute() {

  const [points, setPoints] = useState( ['Shire', 'Rivendale', 'Misty mountains', 'Mirkwood', 'Esgaroth', 'Erebor'] );

  const [input, setInput] = useState('');
  const onInputChange = (e) => setInput(e.target.value);

  const addPoint = () => {
    if (input) {
      setPoints( old => {
        return [ ...old, input ];
      });

    }
  }

  return (
    <>
      <h2>Lonely Mountain Route</h2>
      <div className="lonelyMountainRouteContainer">
        {
          points.map( point => {
            return (
              <div key={point}>
                <p>{point}</p>
              </div>
            );
          })
        }
      </div>
      <input value={input} onChange={onInputChange}/>
      <button onClick={addPoint}>Add point</button>
    </>
  )
}

/**
 * <div class="lonelyMountainRouteContainer">
 *  <div><p>Shire</p></div>
 *  <div><p>Rivendale</p></div>
 * </div>
 */