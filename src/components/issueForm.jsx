import React, { Component } from 'react'
import Joi from 'joi-browser'
import Form from './common/form'

class IssueForm extends Form {

	state = {
		data: {
			receiver:''
		},
		errors: {}
	}

	schema = {
		receiver: Joi.string().required().label("Receiver's address")
	}

	doSubmit = () => {

		console.log("submitted")
	}

	render() {
		return(
			<div className="form-container">
				<h2>Issue this document</h2>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('receiver', "Receiver's Address")}
					{this.renderButton('Issue')}
				</form>
			</div>
		)
	}
}

export default IssueForm