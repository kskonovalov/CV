import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({image, alt}) => {
  return (
    <div className="sidebar__image-wrap hide-on-small-only">
      <img
        src={image}
        alt={alt}
        className="sidebar__image-item"
      />
    </div>
  );
};

Photo.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Photo;
