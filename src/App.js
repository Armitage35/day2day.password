import React, { Component } from 'react';
import PWDOptions from './PWDOptions/PWDOptions.js';
import PWDRender from './PWDRender/PWDRender.js';
import Banner from './Banner/Banner.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <PWDOptions />
        <PWDRender />
      </div>
    );
  }
}

export default App;
