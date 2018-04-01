import React, { Component } from 'react';
import Header from './Header/Header.js';
import PWDOptionsAdvanced from './PWDOptionsAdvanced/PWDOptionsAdvanced.js';
import PWDOptionsSimple from './PWDOptionsSimple/PWDOptionsSimple.js';
import PWDRender from './PWDRender/PWDRender.js';
import Banner from './Banner/Banner.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
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
