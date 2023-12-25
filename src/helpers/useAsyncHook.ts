import { useState, useEffect } from 'react';
import isJsonString from './isJsonString';

const useAsyncHook = ({ link }: { link: string }) => {
  const [result, setResult] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0);
  const maxRetries = 3;

  useEffect(() => {
    (async () => {
      if (!loading && result === null && retryCount < maxRetries) {
        setLoading(true);
        try {
          const response = await fetch(link, { cache: 'no-cache' });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const responseText = await response.text();
          if (!isJsonString(responseText)) {
            throw new Error('Wrong response');
          }
          setResult(JSON.parse(responseText));
          setError(null);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('Something went wrong');
          }
          setRetryCount((prev) => prev + 1);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, [link, loading, result, retryCount, maxRetries]);

  return [result, loading, error];
};

export default useAsyncHook;
