import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	TouchableHighlight,
	Text,
} from 'react-native';

export default class ButtonSubmit extends Component {
	render() {
		return (
			<TouchableHighlight style={styles.button}>
				<Text style={styles.text}>LOGIN</Text>
			</TouchableHighlight>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F035E0',
		width: DEVICE_WIDTH - 40,
		height: 40,
		marginTop: 10,
		borderRadius: 20,
	},
	text: {
		color: '#ffffff',
	}
});