import React from 'react';
import ModalImage from 'react-modal-image';
import parse from 'html-react-parser';

const PortfolioItem = ({ item }) => {
  return (
    <div className="row tab-content">
      <div className="col s12 m12">
        <div className="card">
          {typeof item.images !== 'undefined' &&
            item.images.length > 0 &&
            item.images.map(image => {
              return (
                image.full !== 'undefined' && (
                  <div className="card-image-wrap col s12 m6" key={image.full}>
                    <ModalImage
                      small={image.thumb || image.full}
                      large={image.full}
                      thumb={image.alt || image.full}
                      hideDownload
                    />
                  </div>
                )
              );
            })}
          <div className="clearfix" />
          <div className="card-content">
            <h2>{item.title}</h2>
            {parse(item.description)}
          </div>
          {typeof item.tech.main !== 'undefined' && (
            <div className="card-action">
              <p>
                {typeof item.tech.main !== 'undefined' && (
                  <>
                    <b>I used:</b> {item.tech.main}
                    <br />
                  </>
                )}
                {typeof item.tech.additional !== 'undefined' &&
                  item.tech.additional.length > 0 && (
                    <>
                      <b>I also used:</b> {item.tech.additional}
                    </>
                  )}
              </p>
            </div>
          )}
          {typeof item.buttons !== 'undefined' && item.buttons.length > 0 && (
            <div className="card-action">
              {item.buttons.map(button => {
                return (
                  button.link && (
                    <a
                      href={button.link}
                      className="waves-effect waves-light btn card-action__button"
                      target="_blank"
                      rel="noopener noreferrer"
                      key={button.link}
                    >
                      {button.title || button.link}
                    </a>
                  )
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
