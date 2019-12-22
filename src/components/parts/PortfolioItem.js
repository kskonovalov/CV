import React from 'react';
import { Row, Col } from 'react-materialize';
import ModalImage from 'react-modal-image';
import parse from 'html-react-parser';

const PortfolioItem = ({ item }) => {
  return (
    <Row className="tab-content">
      <Col s={12} m={12} className="s12 m12">
        <div className="card card-content">
          <Row>
            {typeof item.images !== 'undefined' &&
              item.images.length > 0 &&
              item.images.map(image => {
                return (
                  image.full !== 'undefined' && (
                    <Col
                      s={12}
                      m={6}
                      className="card-image-wrap"
                      key={image.full}
                    >
                      <ModalImage
                        small={image.thumb || image.full}
                        large={image.full}
                        thumb={image.alt || image.full}
                        hideDownload
                      />
                    </Col>
                  )
                );
              })}
          </Row>
          <Row className="card-action">
            <Col s={12} m={12} l={12}>
              <h2>{item.title}</h2>
              {parse(item.description)}
              {typeof item.tech.main !== 'undefined' && (
                <>
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
                </>
              )}
            </Col>
          </Row>
          {typeof item.buttons !== 'undefined' && item.buttons.length > 0 ? (
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
          ) : (
            false
          )}
        </div>
      </Col>
    </Row>
  );
};

export default PortfolioItem;
