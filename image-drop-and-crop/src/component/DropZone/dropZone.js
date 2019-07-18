import React, { Component } from "react";
import DropZone from "react-dropzone";

class ImageDropZone extends Component {
	handleOnDrop = (files, rejectedFiles) => {
		console.log(`Files are ${files}`);
		console.log(`Rejected files are ${rejectedFiles}`);
	};
	render() {
		return (
			<>
				<DropZone onDrop={this.handleOnDrop} />
			</>
		);
	}
}

export default ImageDropZone;
