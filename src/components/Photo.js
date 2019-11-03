import React from 'react';
import PropTypes from 'prop-types';

class Photo extends React.Component {
  render() {
    return (
      <div className="sidebar__image-wrap hide-on-small-only">
        <img src={this.props.image} alt={this.props.alt} className="sidebar__image-item" />
      </div>
    );
  }
}

Photo.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default Photo;