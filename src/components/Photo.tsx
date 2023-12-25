import React from 'react';

const Photo = ({ image, alt }: { image: string; alt: string }) => (
  <div className="sidebar__image-wrap hide-on-small-only">
    <img src={image} alt={alt} className="sidebar__image-item" />
  </div>
);

export default Photo;
