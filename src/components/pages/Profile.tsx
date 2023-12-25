import React from 'react';
import NProgress from 'nprogress';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';

import { personalDataLink } from '../../config';
import useAsyncHook from '../../helpers/useAsyncHook';
import contentClickHandler from '../../helpers/contentClickHandler';

import Loader from '../Loader';
import Skills from '../Skills';
import PersonalInfo from '../PersonalInfo';
import { CVDataType } from '../../types/CVDataType';

const Profile = () => {
  const navigate = useNavigate();
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

  const { name, surname, position, description } = CVData;

  return (
    <>
      <h1>
        Hello, I am{' '}
        <b>
          {name} {surname}
        </b>
        <span>{position}</span>
      </h1>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        onClick={(e) => {
          contentClickHandler(e, navigate);
        }}
      >
        {description ? parse(description) : null}
      </div>
      <Skills />
      <PersonalInfo />
    </>
  );
};

export default Profile;
