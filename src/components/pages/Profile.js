import React from 'react';
import NProgress from 'nprogress';
import { Link } from 'react-router-dom';

import { personalDataLink } from '../../config';
import useAsyncHook from '../../helpers/useAsyncHook';

import Loader from '../Loader';
import Skills from '../Skills';
import PersonalInfo from '../PersonalInfo';

const Profile = () => {
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
      <p>
        I&apos;m looking for <b>remote React frontend developer</b> position.
      </p>
      <p>
        I&apos;m new in React, but I have a good experience in Web Development.
        I work as fullstack developer using mainly PHP/JS since 2010 and
        WordPress since 2015, and now (since 2019) I want to work more with a
        frontend and React.
      </p>
      <p>
        For now I created a couple of apps in React, you can see them in{' '}
        <Link to="/portfolio">my portfolio</Link>.
      </p>
      <p>
        Looking for job to expand my opportunities, not only to exchange my time
        for money.
      </p>
      <Skills />
      <PersonalInfo />
    </>
  );
};

export default Profile;
