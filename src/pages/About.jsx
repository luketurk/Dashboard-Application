import React, { Component } from 'react';
import ReactHooks from '../components/ReactHooks';

class About extends Component {
  render() {
    return (
        <div>
          <h2>About Us</h2>
          <hr/>
          <p>This is a demo application, in the air. </p>
          <ReactHooks></ReactHooks>
        </div>
    );
  }
}

export default About;