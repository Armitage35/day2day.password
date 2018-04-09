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
      let userPref = Cookies.get('passwordPreferences');
      if (userPref !== undefined) this.setState(JSON.parse(userPref));
      this.setState({passwordLength: 25, displayAdvancedOptions: false, generatedPassword: '', passwordReadyForRender: false});
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
      
      if (text === '') {
         text = 'Select at least one option';
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
            alert('you are using an unknown preference setting.');
      }
   }

   sliderRangeHanlder = (event) => {
      let passwordLength = event.target.value.toUpperCase();
      this.setState({ passwordLength: passwordLength });
   }

   componentDidMount() {
      this.getUsersSettings();
      
      // segment tracking library
      // eslint-disable-next-line
      ! function() {
            var analytics = window.analytics = window.analytics || [];
            if (!analytics.initialize)
                if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice.");
                else {
                    analytics.invoked = !0;
                    analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"];
                    analytics.factory = function(t) { return function() { var e = Array.prototype.slice.call(arguments);
                            e.unshift(t);
                            analytics.push(e); return analytics } };
                    for (var t = 0; t < analytics.methods.length; t++) { var e = analytics.methods[t];
                        analytics[e] = analytics.factory(e) } analytics.load = function(t, e) { var n = document.createElement("script");
                        n.type = "text/javascript";
                        n.async = !0;
                        n.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js"; var o = document.getElementsByTagName("script")[0];
                        o.parentNode.insertBefore(n, o);
                        analytics._loadOptions = e };
                    analytics.SNIPPET_VERSION = "4.1.0";
                    analytics.load("AU6CouNdnHQ2a5oJ8Uye9hDtziR7ZdkI");
                    analytics.page();
                }
        }();
      
      window.analytics.page();
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
