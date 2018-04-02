import React, { Component } from 'react';
import PWDOptions from './PWDOptions/PWDOptions.js';
import PWDRender from './PWDRender/PWDRender.js';
import Banner from './Banner/Banner.js';
import './App.css';
import './material-flat.css';

class App extends Component {
  
  state = {
    passwordReadyForRender: false
  }
  
  displayPasswordHandler = () => {
    this.setState({passwordReadyForRender: true});
    console.log('super')
  }
  
  render() {
    return (
      <div className='App'>
        <Banner />
        <PWDOptions />
        <button id='fullWidth' onClick={this.displayPasswordHandler} className='bttn-material-flat bttn-md bttn-warning'>Generate a safe password</button>
        <PWDRender />
      </div>
    );
  }
}

export default App;
