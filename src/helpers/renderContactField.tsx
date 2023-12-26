import React from 'react';
import { contactType } from '../types/CVDataType';

const renderContactField = (field: contactType) => {
  const { blank = false, link, name, value, preferred = false, icon } = field;
  const blankIcon = (
    <i className="fa fa-external-link contact-info__icon contact-info__icon_small" />
  );
  return (
    <li
      className="contact-info__item"
      title={preferred ? 'Use this one, please' : ''}
      key={name}
    >
      <i className={`fa ${icon} contact-info__icon`} />
      <a
        href={link}
        target={blank ? '_blank' : ''}
        rel={blank ? 'noreferrer' : ''}
      >
        {value} {blank && blankIcon}
      </a>
    </li>
  );
};

export default renderContactField;
