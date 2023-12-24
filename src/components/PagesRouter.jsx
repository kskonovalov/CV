import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function PagesRouter() {
  return (
    <Routes>
      <Route path="*" element={<Profile />} />
      <Route
        path="/portfolio/wordpress"
        render={() => <Portfolio tab="wordpress" />}
      />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/contact" element={<Contact />} />
      <Route element={<NotFound />} />
    </Routes>
  );
}

export default PagesRouter;
