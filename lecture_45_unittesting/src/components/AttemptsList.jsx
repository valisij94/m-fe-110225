import { memo } from "react";

function AttemptsList( { attempts, dropAttempt } ) {

  console.log('Render attempts list');
  return (
    attempts && <div>
      {attempts.map( attempt => <p onClick={ () => { dropAttempt(attempt.key)}} key={attempt.key}>Attempt time: {attempt.value}</p>) }
    </div>
  )
};

export default memo(AttemptsList);