import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (url) => {

  console.log('Call custom hook');

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  useEffect( () => {
    console.log('Fetch', url)
    setIsFetching(true);
    fetch(url)
      .then(resp => resp.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally( () => {
        setIsFetching(false);
      })
  }, [url]);

  return { data, isFetching, error };
}