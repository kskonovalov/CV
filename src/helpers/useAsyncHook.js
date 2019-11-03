import { useState, useEffect } from 'react';
import NProgress from 'nprogress';

const useAsyncHook = link => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log('hook run');
  useEffect(() => {
    (async () => {
      try {
        if (!loading && result.length === 0) {
          console.log('loading true');
          NProgress.start();
          setLoading(true);
          const response = await fetch(link);
          const json = await response.json();
          setResult(json);
          console.log('loading false');
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
