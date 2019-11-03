import React from 'react';

import useAsyncHook from '../../helpers/useAsyncHook';
// import PersonalData, { PersonalDataAdditional } from '../../data/PersonalData';


// TODO: fix this :)
const Contact = () => {
  const [personal, loading] = useAsyncHook('data/personal.json');
  const { data = {}, additional = {} } = personal;
  const contacts = ['email', 'phone', 'skype', 'linkedin'];

  const renderField = field => {
    if(typeof data[field] === 'undefined') {
      return false;
    }
    const item = data[field];
    const { link } = additional[field];
    const blankIcon = (
      <i className="fa fa-external-link contact-info__icon contact-info__icon_small" />
    );
    return (
      <li
        className="contact-info__item"
        title={additional[field].preferred && 'Use this one, please'}
        key={item}
      >
        <i className={`fa ${additional[field].icon} contact-info__icon`} />
        <a href={link} target={additional[field].blank ? '_blank' : ''}>
          {item} {additional[field].blank && blankIcon}
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
