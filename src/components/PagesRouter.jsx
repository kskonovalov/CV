import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const PagesRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Profile} />
      <Route
        path="/portfolio/wordpress"
        render={() => <Portfolio tab="wordpress" />}
      />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/resume" component={Resume} />
      <Route path="/certificates" component={Certificates} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default PagesRouter;
