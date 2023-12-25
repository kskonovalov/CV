import React from 'react';
import ModalImage from 'react-modal-image';

import { certificateType } from '../../types/certificateType';

const Certificate = ({
  title,
  description,
  link,
  date,
  image,
  thumb,
}: certificateType) => {
  const imageWithPath = `/assets/images/${image}`;
  const thumbWithPath = `/assets/images/${thumb}`;
  return (
    <>
      <h3 className="certificate__title">
        {title}
        <span className="certificate__date">
          <i className="fa fa-calendar certificate__date-icon" />
          {date}
        </span>
      </h3>
      <ModalImage
        small={thumbWithPath}
        large={imageWithPath}
        hideDownload
        className="certificate__image"
      />
      <div className="certificate__meta-wrap">
        <a href={link} target="_blank" rel="nofollow noopener noreferrer">
          {link}{' '}
          <i
            className="fa fa-external-link certificate__meta-link-icon"
            aria-hidden="true"
          />
        </a>
      </div>
      <p>{description}</p>
    </>
  );
};

export default Certificate;
