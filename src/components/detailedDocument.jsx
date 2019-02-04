import React from 'react'
import IssueForm from './issueForm'

class DetailedDocument extends React.Component {
	
	render() {
		const {id, url, name, issuer, receiver, date} = this.props.location.state
		return(
			<React.Fragment>
			<div>
				<h1>Detailed Document: {id} </h1>
				<h3>Name: {name}</h3>
				<img src={url} />
				<h3>Issuer: {issuer}</h3>
				{receiver !== "0x0000000000000000000000000000000000000000" && <h3>Receiver: {receiver}</h3> }
				{receiver !== "0x0000000000000000000000000000000000000000" && <h3>Date issued: {date}</h3>  }
			</div>
			<div>
				{receiver === "0x0000000000000000000000000000000000000000" && <IssueForm issuer={issuer} />}
			</div>
			</React.Fragment>
		)
	}
}

export default DetailedDocument