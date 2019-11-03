import React, { Component } from 'react';
import ModalImage from 'react-modal-image';

class Certificate extends Component {
  render() {
    const image = '/assets/images/' + this.props.image;
    const thumb = '/assets/images/' + this.props.thumb;
    return (
      <React.Fragment>
        <h3 className="certificate__title">{this.props.title}
          <span className="certificate__date">
            <i className="fa fa-calendar certificate__date-icon"></i>
            {this.props.year}
          </span>
        </h3>
        <ModalImage
          small={thumb}
          large={image}
          thumb={this.props.title}
          hideDownload={true}
        />
        <div className='certificate__meta-wrap'>
          <a href={this.props.link} target="_blank" rel='nofollow noopener noreferrer'>
            {this.props.link} <i className="fa fa-external-link certificate__meta-link-icon" aria-hidden="true"></i>
          </a>
        </div>
        <p>{this.props.description}</p>
      </React.Fragment>
    );
  }
}

export default Certificate;