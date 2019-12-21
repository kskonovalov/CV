import React from 'react';

import Certificate from '../parts/Certificate';
import useAsyncHook from '../../helpers/useAsyncHook';

const Certificates = () => {
  const [result, loading] = useAsyncHook({link: '/data/certificates.json'});
  return (
    <>
      <h1>Certificates and Courses</h1>
      {loading && 'Loading...'}
      {typeof result !== 'undefined' &&
        result.map(item => {
          return (
            <Certificate
              key={item.title + item.year}
              title={item.title}
              year={item.year}
              description={item.description}
              image={item.image}
              thumb={item.thumb}
              link={item.link}
            />
          );
        })}
    </>
  );
};

export default Certificates;
