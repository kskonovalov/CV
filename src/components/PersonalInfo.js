import React from 'react';
import NProgress from 'nprogress';

import Loader from './Loader';
import { personalDataLink } from '../config';
import useAsyncHook from '../helpers/useAsyncHook';

const PersonalInfo = () => {
  NProgress.start();
  const [CVData, loading] = useAsyncHook({ link: personalDataLink });

  if (loading) {
    return <Loader />;
  }

  NProgress.done();

  if (CVData.length === 0) {
    return <>Something went wrong...</>;
  }

  const { fields, data, additional } = CVData;


  const renderField = field => {
    if (data[field] !== 'undefined') {
      const target =
        additional[field] !== undefined &&
        additional[field].blank
          ? '_blank'
          : '_self';
      return additional[field] !== undefined ? (
        <div className="personal-item" key={field}>
          <em>{fields[field]}:</em>
          <span>
            <a href={additional[field].link} target={target}>
              {data[field]}
            </a>
          </span>
        </div>
      ) : (
        <div className="personal-item" key={field}>
          <em>{fields[field]}:</em>
          <span>{data[field]}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <h2>Personal info</h2>
      {Object.keys(fields).map(objectKey => renderField(objectKey))}
    </>
  );
};

export default PersonalInfo;
