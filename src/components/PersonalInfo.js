import React from 'react';
import PersonalData, { PersonalDataAdditional } from '../data/PersonalData';

const PersonalInfo = () => {
  const fields = {
    birthday: 'date of birth',
    email: 'e-mail',
    phone: 'phone',
    skype: 'Skype',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'CV in google docs'
  };

  const renderField = field => {
    if (PersonalData[field] !== 'undefined') {
      const target =
        PersonalDataAdditional[field] !== undefined &&
        PersonalDataAdditional[field].blank
          ? '_blank'
          : '_self';
      return PersonalDataAdditional[field] !== undefined ? (
        <div className="personal-item" key={field}>
          <em>{fields[field]}:</em>
          <span>
            <a href={PersonalDataAdditional[field].link} target={target}>
              {PersonalData[field]}
            </a>
          </span>
        </div>
      ) : (
        <div className="personal-item" key={field}>
          <em>{fields[field]}:</em>
          <span>{PersonalData[field]}</span>
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
