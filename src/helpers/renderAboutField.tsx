import React from 'react';

import { contactType } from '../types/CVDataType';

const renderAboutField = (field: contactType) => {
  const { blank, link, name, value } = field;
  const target = blank ? '_blank' : '_self';
  return link !== undefined ? (
    <div className="personal-item" key={name}>
      <em>{name}:</em>
      <span>
        <a href={link} target={target}>
          {value}
        </a>
      </span>
    </div>
  ) : (
    <div className="personal-item" key={name}>
      <em>{name}:</em>
      <span>{value}</span>
    </div>
  );
};

export default renderAboutField;
