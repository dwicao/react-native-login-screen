import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';

export default class App extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="LoginScreen"
	          component={LoginScreen}
	          title="React Native"
	          hideNavBar={true}
	          initial
	        />
	        <Scene
	          key="SecondScreen"
	          component={SecondScreen}
	          hideNavBar={true}
	          title="Welcome"
	        />
	      </Scene>
	    </Router>
	  );
	}
}