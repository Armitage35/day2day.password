import React, { Component } from 'react';
import PWDOptions from './PWDOptions/PWDOptions.js';
import PWDRender from './PWDRender/PWDRender.js';
import Banner from './Banner/Banner.js';
import './App.css';
import './material-flat.css';
import Cookies from 'js-cookie';


class App extends Component {

   state = {
      allowLowChar: true,
      allowNumbers: true,
      allowUpChar: false,
      allowSymbols: false,
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

   getUsersSettings = () => {
      let userPref = JSON.parse(Cookies.get('passwordPreferences'));
      if (userPref !== undefined) this.setState(userPref);
      this.setState({passwordLength: 25});
   }

   displayPasswordHandler = () => {
      let text = '';

      const upperChar = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
         lowerChar = 'abcdefghijklmnopqrstuvwxyz',
         numbers = '0123456789',
         symbols = '()`~!@#$%^&*-+=|{}[]:;"\'<>,.?/';

      let requested = [];

      if (this.state.allowLowChar) requested.push(lowerChar);
      if (this.state.allowNumbers) requested.push(numbers);
      if (this.state.allowSymbols) requested.push(symbols);
      if (this.state.allowUpChar) requested.push(upperChar);

      let possible = "".concat(requested);

      for (var i = 0; i < this.state.passwordLength; i++) {
         text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      this.setState({ passwordReadyForRender: true, generatedPassword: text });
   }

   passwordPrefHanlder = (event) => {
      switch (event.target.id) {
         case 'symbols':
            this.setState({ allowSymbols: event.target.checked }, function(){Cookies.set('passwordPreferences', this.state)});
            break;
         case 'numbers':
            this.setState({ allowNumbers: event.target.checked }, function(){Cookies.set('passwordPreferences', this.state)});
            break;
         case 'upperChar':
            this.setState({ allowUpChar: event.target.checked },function(){Cookies.set('passwordPreferences', this.state)});
            break;
         case 'lowerChar':
            this.setState({ allowLowChar: event.target.checked }, function(){Cookies.set('passwordPreferences', this.state)});
            break;
         default:
            console.log('you are using an unknown preference setting.');
      }
   }

   sliderRangeHanlder = (event) => {
      let passwordLength = event.target.value.toUpperCase();
      this.setState({ passwordLength: passwordLength });
   }

   componentDidMount() {
      this.getUsersSettings();
   }

   render() {
      return (
         <div className='App'>
            <Banner />
            <PWDOptions 
               allowSymbols={this.state.allowSymbols}
               allowNumbers={this.state.allowNumbers}
               allowUpChar={this.state.allowUpChar}
               allowLowChar={this.state.allowLowChar}
               onSlide={this.sliderRangeHanlder} 
               onPrefChange={this.passwordPrefHanlder}
               requestedLength={this.state.passwordLength}
               showAdvanced={this.state.displayAdvancedOptions} 
               toggleAdvanced={this.advancedOptionsHandler} 
           />
           
           <button id='fullWidth' className='bttn-material-flat bttn-md bttn-warning' onClick={this.displayPasswordHandler} >Generate a safe password</button>
           
           <PWDRender 
             ready={this.state.passwordReadyForRender} 
             pwd={this.state.generatedPassword} />
         </div>
      );
   }
}

export default App;
