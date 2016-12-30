import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	Animated,
	Easing,
	Image,
	Alert,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import spinner from '../images/loading.gif';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const _MARGIN = 40;

export default class ButtonSubmit extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
		};

		this.buttonAnimated = new Animated.Value(0);
		this.growAnimated = new Animated.Value(0);
		this._onPress = this._onPress.bind(this);
	}

	_onPress() {
		if (this.state.isLoading) return;

		this.setState({ isLoading: true });

		Animated.timing(
			this.buttonAnimated,
			{
				toValue: 1,
				duration: 200,
				easing: Easing.linear
			}
		).start();
		
		setTimeout(() => {
			this._onGrow();
		}, 2000);

		setTimeout(() => {
			Actions.secondScreen({type: ActionConst.RESET})
		}, 2400);
	}

	_onGrow() {
		Animated.timing(
			this.growAnimated,
			{
				toValue: 1,
				duration: 200,
				easing: Easing.linear
			}
		).start();
	}

	render() {
		const changeWidth = this.buttonAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [DEVICE_WIDTH - _MARGIN, _MARGIN]
	  });
	  const changeScale = this.growAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [1, DEVICE_HEIGHT * 2]
	  });

		return (
			<Animated.View style={[styles.container, {width: changeWidth}]}>
				<TouchableOpacity style={styles.button}
					onPress={this._onPress}
					activeOpacity={0.7} >
						{(this.state.isLoading) ? 
							<Image source={spinner} style={{width: 24, height: 24}} />
							:
							<Text style={styles.text}>LOGIN</Text>
						}
				</TouchableOpacity>
				<Animated.View style={[styles.circle, {transform: [{scale: changeScale}]}]} />
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: -80,
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F035E0',
		height: _MARGIN,
		marginTop: 10,
		borderRadius: 20,
	},
	circle: {
		alignSelf: 'center',
		marginTop: -20,
		height: 1,
		width: 1,
		borderRadius: 100,
		backgroundColor: '#F035E0',
		zIndex: 99,
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
});