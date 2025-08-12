import { useState } from 'react';
import AttemptsList from '../components/AttemptsList.jsx';
import { useMemo } from 'react';
import { useCallback } from 'react';

export default function CallbackPage() {

  const [attempts, setAttempts] = useState([]);
  const [input, setInput] = useState('');

  const addAttempt = () => {
    const stringifiedDate = Date.now();
    setAttempts( old => ([...old, { key: stringifiedDate, value: input }]));
  }

  const heavyCalculation = useMemo(() => {
    console.log('Called HEAVY FUNCTION');
    // Do some heavy calculations...
    return 1;
  }, []);

  const dropAttempt = useCallback( (attemptKey) => {
    setAttempts( attempts.filter(el => el.key !== attemptKey ) );
  }, [attempts]);

  return (
    <div>
      <h3>Work with useCallback hook</h3>
      <p>This page contains a list of attempts of something. Enter something into the input and then press button to add attempt. Notice that when you enter something into the input, you RERENDER AttemptsList component. Think about it - maybe you can optimize this?</p>
      <input value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={addAttempt}>Add attempt</button>
      <AttemptsList attempts={ attempts } dropAttempt={dropAttempt}/>
      <h3>And also something about useMemo</h3>
      <p>Below you can see a result of superheavy function (assume it requires a lot of time for calculations). Try to avoid calling it for each rerender.</p>
      <p>Result of heavy calculations: {heavyCalculation}</p>
    </div>
  )
}