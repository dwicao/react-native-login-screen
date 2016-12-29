import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';

export default class Home extends Component {
	render() {
		return (
			<Wallpaper>
				<Logo />
				<Form />
			</Wallpaper>
		);
	}
}