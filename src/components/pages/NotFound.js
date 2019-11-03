import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Certificates extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>404</h1>
        <p>Page not found :|</p>
        <p>Maybe begin with <Link
          to='/'>something about me</Link>?</p>
      </React.Fragment>
    );
  }
}

export default Certificates;