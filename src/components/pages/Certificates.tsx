import React from 'react';

import Certificate from '../parts/Certificate';
import Loader from '../Loader';

import { certificatesDataLink } from '../../config';
import useAsyncHook from '../../helpers/useAsyncHook';
import { certificateType } from '../../types/certificateType';

const Certificates = () => {
  type certificatesDataType = certificateType[];
  const [certificatesData, loading, error] = useAsyncHook({
    link: certificatesDataLink,
  }) as [certificatesDataType, boolean, string];

  const title = <h1>Certificates and Courses</h1>;
  if (loading) {
    return (
      <>
        {title}
        <Loader />
      </>
    );
  }
  if (error) {
    return (
      <>
        {title}
        {error}
      </>
    );
  }
  if (certificatesData === null) {
    return <>Certificates coming soon..</>;
  }
  return (
    <>
      {title}
      {certificatesData.map((item) => (
        <Certificate
          key={item.title + item.date}
          title={item.title}
          date={item.date}
          description={item.description}
          image={item.image}
          thumb={item.thumb}
          link={item.link}
        />
      ))}
    </>
  );
};

export default Certificates;
