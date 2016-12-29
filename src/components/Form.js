import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
} from 'react-native';

import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';

export default class Form extends Component {
	render() {
		return (
			<View style={styles.container}>
				<UserInput source={usernameImg}
					placeholder='Username'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false} />
				<UserInput source={passwordImg}
					secureTextEntry={true}
					placeholder='Password'
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false} />
				<ButtonSubmit />
				<SignupSection />
			</View>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
	},
	input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: DEVICE_WIDTH - 40,
		height: 40,
		marginVertical: 7,
		marginHorizontal: 20,
		paddingLeft: 45,
		borderRadius: 20,
		color: '#ffffff',
	},
	inputWrapper: {
		flex: 0,
		flexDirection: 'row',
	},
	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
		top: 16,
	},
});