import React from 'react'
import DocumentGrid from './documentGrid'
import PublishedDocuments from './publishedDocuments'
import UnpublishedDocuments from './unpublishedDocuments'

class DocumentCategory extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		// let documentData
		// if(this.props.category === "published"){
		// 	documentData = PublishedDocuments
		// } else {
		// 	documentData = UnpublishedDocuments
		// }
		return(
			<div>
				<h1>{this.props.category} documents </h1>
				<DocumentGrid category={this.props.category} /*documentData={documentData}*/ />
			</div>
		)
	}
}

export default DocumentCategory