import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.js';
import PWDOptionsAdvanced from './PWDOptionsAdvanced/PWDOptionsAdvanced.js';
import PWDOptionsSimple from './PWDOptionsSimple/PWDOptionsSimple.js';
import PWDRender from './PWDRender/PWDRender.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div class='options'>
          <PWDOptionsSimple />
          <PWDOptionsAdvanced />
        </div>
        <PWDRender />
      </div>
    );
  }
}

export default App;
