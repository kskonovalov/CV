import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h1>404</h1>
    <p>Page not found :|</p>
    <p>
      Maybe begin with <Link to="/">something about me</Link>?
    </p>
  </>
);

export default NotFound;
