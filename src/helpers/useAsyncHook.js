import { useState, useEffect } from 'react';

const useAsyncHook = ({ link }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        if (!loading && result.length === 0) {
          setLoading(true);
          const response = await fetch(link);
          const json = await response.json();
          setResult(json);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  return [result, loading];
};
export default useAsyncHook;
