import React, { Component } from "react";
import Dropzone from "react-dropzone";
import ReactAvatarEditor from "react-avatar-editor";

class ImageZoomCrop extends Component {
	state = {
		image: null
	};
	handleOnDrop = dropped => {
		this.setState({ image: dropped[0] });
	};
	render() {
		const maxSize = 2 * 1024 * 1024;
		const { image } = this.state;
		return (
			<>
				<Dropzone
					maxSize={maxSize}
					accept="image/jpeg, image/png"
					onDrop={this.handleOnDrop}
					multiple={false}
					onDragEnter={e => console.log("On DragOver")}
					onDragOver={e => console.log("On DragOver")}
					onDragLeave={e => console.log("On DragOver")}>
					{({ getRootProps, getInputProps }) => (
						<section>
							<div {...getRootProps()}>
								<input {...getInputProps()} />
								<p>
									Drag 'n' drop some files here, or click to
									select files
								</p>
							</div>
						</section>
					)}
				</Dropzone>
				{image ? (
					<ReactAvatarEditor
						width={250}
						height={250}
						image={this.state.image}
					/>
				) : null}
			</>
		);
	}
}

export default ImageZoomCrop;
