import React, { Component } from 'react'
import Form from './common/form'
import Joi from 'joi-browser'

class RegisterForm extends Form {

	state = {
		data: {
			publicaddress: "",
			username: "",
			password: "",
			website: "",
			location: ""
		},
		errors: {}
	}

	schema = {
		publicaddress:Joi.string().required().label('Public Address'),
		username:Joi.string().email().required().label('Username'),
		password:Joi.string().min(5).required().label('Password'),
		website:Joi.string().required().label('Website'),
		location: Joi.string().required().label('Location')
	}

	doSubmit = () => {
		//submit data to the server
		console.log('Submitted')
	}

	render() {
		return(
			<div className="form-container">
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('publicaddress', 'Public Address')}
					{this.renderInput('username', 'Username')}
					{this.renderInput('password', 'Password')}
					{this.renderInput('website', 'Website')}
					{this.renderInput('location', 'Location')}
					{this.renderButton('Register')}
				</form>
			</div>
		)
	}
}

export default RegisterForm