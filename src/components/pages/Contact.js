import React from 'react';
import { TextInput, Textarea, Button, Row } from 'react-materialize';

import useAsyncHook from '../../helpers/useAsyncHook';
// import PersonalData, { PersonalDataAdditional } from '../../data/PersonalData';

const Contact = () => {
  const [personal] = useAsyncHook('data/personal.json');
  const {data = {}, additional = {}} = personal;
  const contacts = ['email', 'phone', 'skype', 'linkedin'];

  const renderField = field => {
    if (typeof data[field] === 'undefined') {
      return false;
    }
    const item = data[field];
    const {link} = additional[field];
    const blankIcon = (
      <i className="fa fa-external-link contact-info__icon contact-info__icon_small"/>
    );
    return (
      <li className="contact-info__item"
          title={additional[field].preferred && 'Use this one, please'} key={item}>
        <i className={`fa ${additional[field].icon} contact-info__icon`}/>
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
      <h2>Or send me a message!</h2>
      <form id="contactForm" action="/contact.php" method="post">
        <Row>
          <TextInput label="Name" name="name" placeholder="John Doe" required validate
                     error="Fill the name, please" success="Great" s={6} m={6} l={6} xl={6}/>
          <TextInput label="E-mail" name="email" placeholder="john@doe.com" required email validate
                     error="Correct e-mail, please" success="Great" s={6} m={6} l={6} xl={6}/>
          <Textarea label="Message" name="message"
                    placeholder="Hello, Konstantin! Here's a great job for you.." required validate
                    error="Tell me something good, please" success="Great" s={12} m={12} l={12}
                    xl={12}/>
          <Button type="submit" className="waves-effect waves-light">Send Message</Button>
        </Row>
      </form>
    </>
  );
};

export default Contact;
