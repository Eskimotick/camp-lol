import React from 'react';
import { Modal, Menu, Input, Button } from 'semantic-ui-react';

import './Navbar.css';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    formErrors: {email: '', password: ''},
    emailValid: false,
    passwordValid: false,
    formValid: false
  }

  // atualiza o state de do respectivo input digitado
  handleInputChange = (e, { name }) =>  this.setState({ [name]: e.target.value })

  validateField = (e) => {
    let fieldName = e.target.name;
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' é inválido';
        break;
      case 'password':
      case 'password_confirmation':
        if(this.state.password && this.state.password_confirmation) {
          passwordValid = this.state.password === this.state.password_confirmation;
          fieldValidationErrors.password = passwordValid ? '': ' não é a mesma';
        }
        break;
      default:
        break;
    }

    this.setState({formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

	// recebe os valores de login
	handleRegisterClick = () => console.log(this.state.username, this.state.email, this.state.password, this.state.password_confirmation)

  render() {
    const { username, email, password, password_confirmation, formValid, emailValid, passwordValid } = this.state;

    return(
      <Modal closeIcon size='mini' trigger={
				<Menu.Item name='register'>Cadastre-se</Menu.Item>
			}>
				<Modal.Header>Cadastre-se</Modal.Header>
				<Modal.Content>
          <Input 
            fluid 
            name='username' 
            type='text' 
            placeholder='Nome de Usuário' 
            value={username}
            onChange={this.handleInputChange}
          />
          <Input 
            className='register' 
            fluid 
            name='email' 
            type='email' 
            placeholder='E-mail' 
            value={email}
            error={(!emailValid && email)}
            onChange={this.handleInputChange}
            onBlur={this.validateField}
          />
          <Input 
            className='register' 
            fluid 
            name='password' 
            type='password' 
            placeholder='Senha' 
            value={password}
            error={(!passwordValid && password)}
            onChange={this.handleInputChange}
            onBlur={this.validateField}
          />
          <Input 
            className='register' 
            fluid 
            name='password_confirmation' 
            type='password' 
            placeholder='Confirme a senha' 
            value={password_confirmation}
            error={(!passwordValid && password_confirmation)}
            onChange={this.handleInputChange}
            onBlur={this.validateField}
          />
					<Button className='register' fluid primary disabled={!formValid} onClick={this.handleRegisterClick}>Criar conta</Button>
				</Modal.Content>
			</Modal>
    );
  }

}

export default Register;