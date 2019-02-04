import React from 'react'
import Document from './document'
import axios from 'axios'

class DocumentGrid extends React.Component {
	state = {
		results: []
	}

	async componentDidMount() {
		//note: have to modify this hardcoded requestUrl to instead reflect the currently logged in user.

		if(this.props.category === "published") {
			const requestUrl = 'http://localhost:8081/issuer/0x08053162a28df81e098899208075cc04e55f8894/published'
			const response = await axios.get(requestUrl)
			const results = response.data
			console.log(results)
			this.setState({ results })
		}
		else if (this.props.category === "unpublished") {
			const requestUrl = 'http://localhost:8081/issuer/0x08053162a28df81e098899208075cc04e55f8894/unpublished'
			const response = await axios.get(requestUrl)
			const results = response.data
			console.log(results)
			this.setState({ results })
		}
		else if(this.props.category === "received") {
			const requestUrl = 'http://localhost:8081/receiver/0x08053162a28df81e098899208075cc04e55f8894'
			const response = await axios.get(requestUrl)
			const results = response.data
			console.log(results)
			this.setState({ results })
		}
	}

	render() {
		const documentData = this.props.documentData
		// const documents = documentData.map((data) => <Document hash={data.id} name={data.name} url={data.url} issuer={data.issuer}
		// 	receiver={data.receiver} />)
		const documents = this.state.results.map( data => <Document hash={data.hash} name={data.name}
			url={data.url} issuer={data.issuer} receiver={data.receiver} />)
		return(
			<div className="document-grid">
				{documents}
			</div>
		)
	}
}

export default DocumentGrid