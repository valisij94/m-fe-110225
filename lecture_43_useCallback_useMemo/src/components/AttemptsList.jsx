export default function AttemptsList( { attempts } ) {

  console.log('Render attempts list');
  return (
    attempts && <div>
      {attempts.map( attempt => <p key={attempt.key}>Attempt time: {attempt.value}</p>) }
    </div>
  )
};