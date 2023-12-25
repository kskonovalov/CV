import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import { Container, Row, Col } from 'react-materialize';

// components
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'nprogress/nprogress.css';

import Photo from './Photo';
import Links from './Links';
import Footer from './Footer';
import PagesRouter from './PagesRouter';

// data
import Loader from './Loader';
import { personalDataLink } from '../config';
import useAsyncHook from '../helpers/useAsyncHook';
import { CVDataType } from '../types/CVDataType';

const App = () => {
  const location = useLocation();
  NProgress.start();
  useEffect(() => {
    NProgress.done();
  });

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

  const { photo, name, surname } = CVData;
  const fullName = `${name} ${surname}`;
  return (
    <Container>
      <Row>
        <Col s={12} m={3} className="sidebar">
          <Photo image={photo} alt={fullName} />
          <Links />
        </Col>
        <Col s={12} m={9} className="content-wrap">
          <TransitionGroup className="transition-group">
            <CSSTransition
              key={location.key}
              timeout={{ enter: 300, exit: 300 }}
              classNames="fade"
            >
              <div className="content">
                <PagesRouter />
              </div>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
