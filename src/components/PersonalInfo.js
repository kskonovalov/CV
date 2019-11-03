import React from 'react';
import PersonalData, { PersonalDataAdditional } from "../data/PersonalData";

class PersonalInfo extends React.Component {
  fields = {
    birthday: 'date of birth',
    email: 'e-mail',
    phone: 'phone',
    skype: 'Skype',
    linkedin: 'LinkedIn',
    cv: 'CV in google docs'
  };

  renderField = (field) => {
    if(PersonalData[field] !== "undefined") {
      if(PersonalDataAdditional[field] !== undefined) {
        let target = '_self';
        if(PersonalDataAdditional[field].blank) {
          target = '_blank';
        }
        return <div className="personal-item" key={field}>
          <em>{this.fields[field]}:</em>
          <span><a href={PersonalDataAdditional[field].link} target={target}>{PersonalData[field]}</a></span>
        </div>;
      } else {
        return <div className="personal-item" key={field}>
          <em>{this.fields[field]}:</em>
          <span>{PersonalData[field]}</span>
        </div>;
      }
    }
  };

  render() {
    return <React.Fragment>
      <h2>Personal info</h2>
      {Object.keys(this.fields).map((objectKey) => this.renderField (objectKey))}
    </React.Fragment>;
  }
}

export default PersonalInfo;