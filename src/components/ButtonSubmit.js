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

export default class ButtonSubmit extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
		};
		this._onPress = this._onPress.bind(this);
		this.buttonAnimated = new Animated.Value(0);
	}

	_onPress() {
		if (this.state.isLoading) return;

		this.setState({ isLoading: true });
		this.buttonAnimated.setValue(0);
		
		Animated.timing(
			this.buttonAnimated,
			{
				toValue: 1,
				duration: 200,
				easing: Easing.linear
			}
		).start();
		
		setTimeout(() => {
			Actions.secondScreen({type: ActionConst.RESET});
		}, 2000);
	}

	render() {
		const DEVICE_WIDTH = Dimensions.get('window').width;
		const moveWidth = this.buttonAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [DEVICE_WIDTH - 40, 40]
	  });

		return (
			<Animated.View style={{width: moveWidth}}>
				<TouchableOpacity style={styles.button}
					onPress={this._onPress}
					activeOpacity={0.7} >
						{(this.state.isLoading) ? 
							<Image source={spinner} style={{width: 24, height: 24}} />
							:
							<Text style={styles.text}>LOGIN</Text>
						}
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