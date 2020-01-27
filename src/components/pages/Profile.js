import React from 'react';
import NProgress from 'nprogress';
import { useHistory } from 'react-router-dom';
import parse from 'html-react-parser';

import { personalDataLink } from '../../config';
import useAsyncHook from '../../helpers/useAsyncHook';
import contentClickHandler from '../../helpers/contentClickHandler';

import Loader from '../Loader';
import Skills from '../Skills';
import PersonalInfo from '../PersonalInfo';

const Profile = () => {
  const history = useHistory();
  NProgress.start();
  const [CVData, loading] = useAsyncHook({ link: personalDataLink });

  if (loading) {
    return <Loader />;
  }

  NProgress.done();
  if (CVData.length === 0) {
    return <>Something went wrong...</>;
  }

  const { data } = CVData;

  return (
    <>
      <h1>
        Hello, I am{' '}
        <b>
          {data.name} {data.surname}
        </b>
        <span>{data.position}</span>
      </h1>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        onClick={e => {
          contentClickHandler(e, history);
        }}
      >
        {CVData.description ? parse(CVData.description) : null}
      </div>
      <Skills />
      <PersonalInfo />
    </>
  );
};

export default Profile;
