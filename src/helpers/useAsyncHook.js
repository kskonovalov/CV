import { useState, useEffect } from 'react';
import isJsonString from "./isJsonString";

const useAsyncHook = ({ link }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    (async () => {
      if (!loading && result.length === 0 && retryCount < maxRetries) {
        setLoading(true);
        try {
          const response = await fetch(link, {cache: "no-cache"});
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const responseText = await response.text();
          if(!isJsonString(responseText)) {
            throw new Error('Wrong response');
          }
          setResult(JSON.parse(responseText));
          setError(null);
        } catch (err) {
          setError(err.message || 'Something went wrong');
          setRetryCount(prev => prev + 1);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, [link, loading, result.length, retryCount, maxRetries]);

  return [result, loading, error];
};

export default useAsyncHook;
