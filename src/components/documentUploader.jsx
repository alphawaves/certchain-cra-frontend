import React, { Component } from 'react'
import Form from './common/form'
import Joi from 'joi-browser'
import axios from 'axios'

//have to add ability to upload a pdf. hash should be calculated on server side?

class DocumentUploader extends Form {
	state = {
		data: {
			hash:"",
			name:"",
			url:""
		},
		errors:{}
	}

	schema = {
		hash: Joi.string(),
		name: Joi.string(),
		url: Joi.string()
	}

	doSubmit = async () => {
		console.log('Submitted')
		const requestUrl = ('http://localhost:8081/documents')
		await axios.post(requestUrl, this.state.data)
	}

	render() {
		return(
			<React.Fragment>
				<h1>Document Details</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('hash', 'Hash')}
					{this.renderInput('name', 'Document Name')}
					{this.renderInput('url', 'Document Url')}
					{this.renderButton('Upload')}
				</form>
			</React.Fragment>
		)
	}
}

export default DocumentUploader