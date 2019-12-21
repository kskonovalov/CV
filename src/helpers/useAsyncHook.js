import { useState, useEffect } from 'react';
import NProgress from 'nprogress';

const useAsyncHook = ({ link }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        if (!loading && result.length === 0) {
          NProgress.start();
          setLoading(true);
          const response = await fetch(link);
          const json = await response.json();
          setResult(json);
          setLoading(false);
          NProgress.done();
        }
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  return [result, loading];
};
export default useAsyncHook;
