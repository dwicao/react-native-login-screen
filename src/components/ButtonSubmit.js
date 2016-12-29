import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	Animated,
	Easing,
} from 'react-native';

export default class ButtonSubmit extends Component {
	constructor() {
		super();

		this._onPress = this._onPress.bind(this);
		this.buttonAnimated = new Animated.Value(0);
	}

	_onPress() {
		this.buttonAnimated.setValue(0);
		Animated.timing(
			this.buttonAnimated,
			{
				toValue: 1,
				duration: 600,
				easing: Easing.linear
			}
		).start();
	}

	render() {
		const DEVICE_WIDTH = Dimensions.get('window').width;
		const moveWidth = this.buttonAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [DEVICE_WIDTH - 40, 80]
	  });

		return (
			<Animated.View style={{width: moveWidth}}>
				<TouchableOpacity style={styles.button}
					onPress={this._onPress}
					activeOpacity={0.7} >
						<Text style={styles.text}>LOGIN</Text>
				</TouchableOpacity>
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F035E0',
		height: 40,
		marginTop: 10,
		borderRadius: 20,
	},
	text: {
		color: '#ffffff',
	},
});