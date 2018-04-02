import React, { Component } from 'react';
import PWDOptions from './PWDOptions/PWDOptions.js';
import PWDRender from './PWDRender/PWDRender.js';
import Banner from './Banner/Banner.js';
import './App.css';
import './material-flat.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Banner />
        <PWDOptions />
        <button id='fullWidth' className='bttn-material-flat bttn-md bttn-warning'>Generate a safe password</button>
        <PWDRender />
      </div>
    );
  }
}

export default App;
