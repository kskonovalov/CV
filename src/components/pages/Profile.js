import React from 'react';
import { Link } from 'react-router-dom';

// content
import PersonalData from '../../data/PersonalData';

// components
import Skills from '../Skills';
import PersonalInfo from '../PersonalInfo';

const Profile = () => {
  return (
    <>
      <h1>
        Hello, I am{' '}
        <b>
          {PersonalData.name} {PersonalData.surname}
        </b>
        <span>{PersonalData.position}</span>
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
