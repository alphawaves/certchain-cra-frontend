import React from 'react'
import SearchBar from './searchBar'
import DocumentContainer from './documentContainer'

class Dashboard extends React.Component {
	render() {
		return(
			<div>
				<SearchBar />
				<DocumentContainer />
			</div>
		)
	}
}

export default Dashboard