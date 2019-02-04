import React, { Component } from 'react'
import Form from './common/form'
import Joi from 'joi-browser'
import axios from 'axios'

class DocumentVerifier extends Form {

	state={
		data: {
			documentHash:''
		},
		errors: {},
	}

	schema = {
		documentHash: Joi.string().required().label("Document Hash")
	}

	doSubmit = async () => {
		console.log("Submitted")
		const requestUrl = 'http://localhost:8081/search/'+this.state.data.documentHash
		console.log(requestUrl)

		//fetch data from the server & update the state
		const response = await axios.get(requestUrl) //this will be a call to server api
		const results = response.data
		this.setState({ results })
	}

	renderResultsTable(results) {

		if(!results)
			return(<h2>No transactions found</h2>)

		return(
			<table className="table">
			  <thead>
			    <tr>
			      <th scope="col">Document Hash</th>
			      <th scope="col">Issuer</th>
			      <th scope="col">Receiver</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td>{results["hash"]}</td>
			      <td>{results.issuer}</td>
			      <td>{results.receiver}</td>
			    </tr>
			  </tbody>
			</table>
	)}

	render() {
		return(

		<React.Fragment>
			<div className="form-container">
				<h1>Verify</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('documentHash', "Document Hash")}
					{this.renderButton('Verify')}
				</form>
			</div>
			{this.state.results && this.renderResultsTable(this.state.results)}

		</React.Fragment>

		)
	}

}

export default DocumentVerifier