import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import PersonalData, { PersonalDataAdditional } from '../data/PersonalData';

class FooterComponent extends React.Component {
  render() {
    // const year = new Date('Y');
    const year = new Date().getFullYear();
    return <footer>
      <div className="row">
        <div className="col s12 m8">&copy; 2010 - {year} {PersonalData.name} {PersonalData.surname}</div>
        <div className="col s12 m4 footer-social">
          <a href={PersonalDataAdditional.linkedin.link} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  }
}

export default FooterComponent;