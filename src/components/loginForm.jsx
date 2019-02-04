import React, { Component } from 'react'
import Input from './common/input'
import Form from './common/form'
import Joi from 'joi-browser'

class LoginForm extends Form {

	state = {
		data: {
			username: "",
			password: ""
		},
		errors: {}
	}

	schema = {
		username: Joi.string().required().label('Username'),
		password: Joi.string().required().label('Password')
	}

	 
	doSubmit = () => {

		//now, if there are no errors, we can call the server, save the changes, and redirect the user to another page
		console.log("submitted")
	}	

	render() {

		return(
			<div className="login-form-container">
				<h1>Login</h1><br />
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('username', 'Username')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderButton('Login')}
				</form>
			</div>
		)
	}
}

export default LoginForm