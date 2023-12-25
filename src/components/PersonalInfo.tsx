import React from 'react';
import NProgress from 'nprogress';

import Loader from './Loader';
import { personalDataLink } from '../config';
import useAsyncHook from '../helpers/useAsyncHook';
import renderAboutField from '../helpers/renderAboutField';
import { CVDataType } from '../types/CVDataType';

const PersonalInfo = () => {
  NProgress.start();
  const [CVData, loading, error] = useAsyncHook({ link: personalDataLink }) as [
    CVDataType,
    boolean,
    string,
  ];

  if (loading) {
    return <Loader />;
  }

  NProgress.done();

  if (error) {
    return error;
  }

  if (CVData === null) {
    return <>Data coming soon</>;
  }

  const { contacts } = CVData;

  return (
    <>
      <h2>Personal info</h2>
      {Object.keys(contacts).map((field) =>
        renderAboutField(contacts[field as keyof typeof contacts]),
      )}
    </>
  );
};

export default PersonalInfo;
