import React from 'react';
import NProgress from 'nprogress';
import { Row, Col } from 'react-materialize';
import 'font-awesome/css/font-awesome.min.css';

import Loader from './Loader';
import { personalDataLink } from '../config';
import useAsyncHook from '../helpers/useAsyncHook';
import { CVDataType } from '../types/CVDataType';

const Footer = () => {
  const year = new Date().getFullYear();

  NProgress.start();
  const [CVData, loading, error] = useAsyncHook({ link: personalDataLink }) as [
    CVDataType,
    boolean,
    string,
  ];

  if (loading) {
    return <Loader />;
  }

  NProgress.done();
  if (error) {
    return error;
  }

  if (CVData === null) {
    return <>Data coming soon</>;
  }

  const { name, surname, contacts } = CVData;

  return (
    <footer>
      <Row>
        <Col s={12} m={8}>
          &copy; 2010 - {year} {name} {surname}
        </Col>
        <Col s={12} m={4} className="footer-social">
          <a
            href={contacts.github.link}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social__icon-link"
            aria-label="Github"
          >
            <i className="fa fa-github" />
          </a>
          <a
            href={contacts.linkedin.link}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social__icon-link"
            aria-label="LinkedIn"
          >
            <i className="fa fa-linkedin" />
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
