import React from 'react'
import DocumentCategory from './documentCategory'


class DocumentContainer extends React.Component {
	// constructor(props) {
	// 	this.state = {
	// 		address: this.props.address
	// 	}
	// }
	render() {
		return(
			<div>
				<DocumentCategory category="published" />
				<DocumentCategory category="unpublished" />
				<DocumentCategory category="received" />
			</div>
		)
 	}
}

export default DocumentContainer