import React, { Component } from 'react';
import PWDOptions from './PWDOptions/PWDOptions.js';
import PWDRender from './PWDRender/PWDRender.js';
import Banner from './Banner/Banner.js';
import './App.css';
import './material-flat.css';

class App extends Component {

  state = {
    displayAdvancedOptions: false,
    passwordReadyForRender: false,
    passwordLength: '25',
    generatedPassword: ''
  }

  advancedOptionsHandler = () => {
    let advancedOptionsSwitch = this.state.displayAdvancedOptions;
    advancedOptionsSwitch = !advancedOptionsSwitch;
    this.setState({ displayAdvancedOptions: advancedOptionsSwitch });
  }

  displayPasswordHandler = () => {
    let text = '';

    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < this.state.passwordLength; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    this.setState({ passwordReadyForRender: true, generatedPassword: text });
  }
  
  sliderRangeHanlder = (event) => {
    let passwordLength = event.target.value.toUpperCase();
    this.setState({passwordLength: passwordLength});
  }

  render() {
    return (
      <div className='App'>
        <Banner />
        <PWDOptions showAdvanced={this.state.displayAdvancedOptions} toggleAdvanced={this.advancedOptionsHandler} onSlide={this.sliderRangeHanlder} requestedLength={this.state.passwordLength} />
        <button id='fullWidth' onClick={this.displayPasswordHandler} className='bttn-material-flat bttn-md bttn-warning'>Generate a safe password</button>
        <PWDRender ready={this.state.passwordReadyForRender} pwd={this.state.generatedPassword} />
      </div>
    );
  }
}

export default App;
