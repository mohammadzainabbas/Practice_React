import React, { Component } from "react";
import Dropzone from "react-dropzone";
import ReactAvatarEditor from "react-avatar-editor";

class ImageZoomCrop extends Component {
	handleDrop = dropped => {
		this.setState({ image: dropped[0] });
	};
	render() {
		return (
			<Dropzone
				onDrop={this.handleDrop}
				disableClick
				style={{ width: "250px", height: "250px" }}>
				<ReactAvatarEditor
					width={250}
					height={250}
					image={this.state.image}
				/>
			</Dropzone>
		);
	}
}

export default ImageZoomCrop;
