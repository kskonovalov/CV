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

  const { contacts } = CVData;

  const renderField = field => {
    const target = field.blank ? '_blank' : '_self';
    return field.link !== undefined ? (
      <div className="personal-item" key={field.name}>
        <em>{field.name}:</em>
        <span>
          <a href={field.link} target={target}>
            {field.value}
          </a>
        </span>
      </div>
    ) : (
      <div className="personal-item" key={field.name}>
        <em>{field.name}:</em>
        <span>{field.value}</span>
      </div>
    );
  };

  return (
    <>
      <h2>Personal info</h2>
      {Object.keys(contacts).map(field => renderField(contacts[field]))}
    </>
  );
};

export default PersonalInfo;
