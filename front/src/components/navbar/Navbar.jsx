import React from 'react';
import { Menu, Popup } from 'semantic-ui-react';

import Login from './Login';
import Register from './Register';
import './Navbar.css';

class Navbar extends React.Component {
	state = {
	};

	// faz as tabs da navbar ficar escurinhas quando clicadas
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	// tab do login com popup
	loginWithPopup() {
		const { activeItem } = this.state;

		return(
			<Popup name='' on='click' onClose={this.handleItemClick} trigger={
				<Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}>
					Login
				</Menu.Item>
			}>
				<Popup.Header>Faça seu login</Popup.Header>
				<Login />
			</Popup>
		);
	}

  render() {
		const { activeItem } = this.state;

		return(
			<Menu className="navbar">
				<Menu.Item name='championship' active={activeItem === 'championship'} onClick={this.handleItemClick}>
					Campeonatos
				</Menu.Item>
				<Menu.Menu position='right'>
					{this.loginWithPopup()}
					<Register />
				</Menu.Menu>
			</Menu>
		);
	}
}

export default Navbar;