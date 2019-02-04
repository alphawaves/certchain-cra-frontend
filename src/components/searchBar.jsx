import React from 'react'
import PublishedDocuments from './publishedDocuments'
import UnpublishedDocuments from './unpublishedDocuments'

class SearchBar extends React.Component {
		state = {
			query: ''
		}
		

	handleChange = (event) => {
		this.setState({
			query: event.target.value
		})
	}

	// handleClick(event) {
	// 	const query = this.state.query
	// 	const results = 
	// }

	render() {
		return(
			<div>
				<input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Enter document name here..." />
				<select>
					<option selected value="Document">Document</option>
					<option value="Entity">Entity</option>
				</select>
				<button onClick={this.handleClick}>Search</button>
			</div>
		)
	}
}

export default SearchBar