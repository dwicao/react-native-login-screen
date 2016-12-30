import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';

export default class App extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	          hideNavBar={true}
	          initial={true}
	        />
	        <Scene
	          key="secondScreen"
	          component={SecondScreen}
	          hideNavBar={true}
	        />
	      </Scene>
	    </Router>
	  );
	}
}