import React from 'react';
import { Popup, Input, Button, Icon } from 'semantic-ui-react';

import './Navbar.css';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  // atualiza o state de do respectivo input digitado
	handleInputChange = (e, { name }) =>  this.setState({ [name]: e.target.value })

	// recebe os valores de login
	handleLoginClick = () => console.log('usuário ' + this.state.username, 'senha ' + this.state.password)

  render() {
    const { username, password } = this.state;

    return(
      <Popup.Content>
				<form>
					<Input 
						className='login' 
						fluid 
						icon='user' 
						iconPosition='left' 
						name='username'
						type='text' 
						placeholder='Nome de Usuário' 
						value={username}
						onChange={this.handleInputChange}
					/>
					<Input 
						className='login' 
						fluid 
						icon='key' 
						iconPosition='left' 
						name='password'
						type='password' 
						placeholder='Senha'
						value={password}
						onChange={this.handleInputChange}
					/>
					<Button className='login' fluid primary icon labelPosition='right' type='button' onClick={this.handleLoginClick}>
						Login
						<Icon name='right arrow' />
					</Button>
				</form>
				<a className='forgot' href='#'>Esqueceu sua senha?</a>
				<p>Não tem uma conta? Crie uma agora clicando em Cadastre-se!</p>
			</Popup.Content>
    );
  }
}

export default Login;