import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import PersonalData, { PersonalDataAdditional } from '../data/PersonalData';

const FooterComponent = () => {
  // const year = new Date('Y');
  const year = new Date().getFullYear();
  const { name, surname } = PersonalData;
  return (
    <footer>
      <div className="row">
        <div className="col s12 m8">
          &copy; 2010 - {year} {name} {surname}
        </div>
        <div className="col s12 m4 footer-social">
          <a
            href={PersonalDataAdditional.linkedin.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
