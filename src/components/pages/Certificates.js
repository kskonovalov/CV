import React from 'react';

import Certificate from '../parts/Certificate';
import useAsyncHook from '../../helpers/useAsyncHook';

const Certificates = () => {
  console.log('Certificates');
  const [result, loading] = useAsyncHook('/data/certificates.json');
  return (
    <React.Fragment>
      <h1>Certificates and Courses</h1>
      {loading && "Loading..."}
      {typeof result !== 'undefined' &&
        result.map((item, id) => {
        return <Certificate key={id} title={item.title} year={item.year}
                            description={item.description} image={item.image} thumb={item.thumb}
                            link={item.link}/>;
      })}
    </React.Fragment>
  );
};

export default Certificates;