import React from 'react';
import { Row, Col } from 'react-materialize';
import 'font-awesome/css/font-awesome.min.css';

import PersonalData, { PersonalDataAdditional } from '../data/PersonalData';

const FooterComponent = () => {
  // const year = new Date('Y');
  const year = new Date().getFullYear();
  const { name, surname } = PersonalData;
  return (
    <footer>
      <Row>
        <Col s={12} m={8}>
          &copy; 2010 - {year} {name} {surname}
        </Col>
        <Col s={12} m={4} className="footer-social">
          <a
            href={PersonalDataAdditional.linkedin.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" />
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default FooterComponent;
