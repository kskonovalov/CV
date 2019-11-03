import React from 'react';
// content
import PersonalData, { PersonalDataAdditional } from '../../data/PersonalData';

const Contact = () => {
  const contacts = ['email', 'phone', 'skype', 'linkedin'];

  const renderField = field => {
    const item = PersonalData[field];
    const { link } = PersonalDataAdditional[field];
    const blankIcon = (
      <i className="fa fa-external-link contact-info__icon contact-info__icon_small" />
    );
    return (
      <li
        className="contact-info__item"
        title={
          PersonalDataAdditional[field].preferred && 'Use this one, please'
        }
        target={PersonalDataAdditional[field].blank ? '_blank' : ''}
        key={item}
      >
        <i
          className={`fa ${PersonalDataAdditional[field].icon} contact-info__icon`}
        />
        <a href={link}>
          {item} {PersonalDataAdditional[field].blank && blankIcon}
        </a>
      </li>
    );
  };

  return (
    <>
      <h1>Contact me</h1>
      <div className="contact-info">
        <p>Feel free to contact me!</p>
        <ul className="contact--info">
          {contacts.map(objectKey => renderField(objectKey))}
        </ul>
      </div>
      <hr />
      {/*<h2>Or send me a message!</h2>*/}
      {/*<form id="contactForm" action="php/contact.php" method="post" className="positioned">*/}
      {/*<div className="row">*/}
      {/*<div className="col-md-4">*/}
      {/*<input type="text" name="senderName" id="senderName" placeholder="name"/>*/}
      {/*<input type="email" name="senderEmail" id="senderEmail" placeholder="e-mail"/>*/}
      {/*<input type="text" name="subject" id="subject" placeholder="Subject"/>*/}
      {/*</div>*/}
      {/*<div className="col-md-8">*/}
      {/*<textarea name="message" id="message" rows="6" placeholder="Message"></textarea>*/}
      {/*<button type="submit">Send Message</button>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*</form>*/}
    </>
  );
};

export default Contact;
