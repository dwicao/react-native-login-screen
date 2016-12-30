import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

export default class SecondScreen extends Component {
	constructor() {
		super();

		this._onPress = this._onPress.bind(this);
	}

	_onPress() {
		Actions.loginScreen({type: ActionConst.RESET});
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this._onPress}
					style={styles.button}>
					<Text>{'<'} Back To Login</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
});