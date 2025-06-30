import { useState, useEffect } from 'react';

export default function UserInteractionCounter() {

  const [time, setTime] = useState(0);

  useEffect( () => {
  //   console.log('Creating interval')
    const intervalId = setInterval( () => {
      setTime( old => old + 1 );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [] );

  useEffect( () => {
    // Do nothing!
    return () => {
      console.log('WOW, Unmounting!');
    }
  }, [])

  return (
    <div>
      <h2>User interaction counter</h2>
      <p>You work with page {time} seconds!</p>
    </div>
  )
}