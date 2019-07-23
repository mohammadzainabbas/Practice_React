import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import Dropzone from "react-dropzone";
import ReactAvatarEditor from "react-avatar-editor";
import { Grid, TextField, InputAdornment, Button } from "@material-ui/core";
import FileUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";
// import instance from "./../api/config";

class ImageZoomCropReformated extends Component {
	state = {
		image: null,
		fileName: null,
		maxSize: 2 * 1024 * 1024,
		croppedImageUrl: null
	};

	onClickSave = () => {
		if (this.editor) {
			// This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
			// drawn on another canvas, or added to the DOM.
			// const canvas = this.editor.getImage();
			console.log("onClickSave() called");
			const canvas = this.editor.getImage().toDataURL();

			// If you want the image resized to the canvas size (also a HTMLCanvasElement)
			// const canvasScaled = this.editor.getImageScaledToCanvas();
			this.setState({ croppedImageUrl: canvas });
		}
	};
	handleOnImageUpload = () => {
		const { fileName } = this.state;
		if (fileName) {
			console.log(`Uploading ${fileName} image to server`);
			this.onClickSave();
		} else {
			alert("Please upload an image and try again.");
		}
	};
	handleOnDrop = acceptedFiles => {
		this.setState({
			fileName: acceptedFiles[0].name,
			image: acceptedFiles[0]
		});
	};

	handleOnImageDelete = () => {
		this.setState({ image: null, fileName: null, croppedImageUrl: null });
	};

	setEditorRef = editor => (this.editor = editor);

	render() {
		const { image, fileName, maxSize, croppedImageUrl } = this.state;
		const { classes } = this.props;
		return (
			<>
				<div className={classes.parentDiv}>
					<Grid container spacing={3}>
						<Grid item xs={4}>
							<label>Upload Image</label>
						</Grid>
						<Grid item xs={8}>
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
										<div
											style={{ display: "inline" }}
											{...getRootProps()}>
											<input {...getInputProps()} />
											<TextField
												disabled={true}
												style={{ width: "100%" }}
												value={
													image && fileName
														? fileName
														: "Choose file"
												}
												InputProps={{
													endAdornment: (
														<InputAdornment position="start">
															<FileUploadIcon />
														</InputAdornment>
													)
												}}
											/>
										</div>
									</section>
								)}
							</Dropzone>
						</Grid>
					</Grid>
					<Grid container spacing={3}>
						{image ? (
							<div className={classes.imageDiv}>
								<ReactAvatarEditor
									ref={this.setEditorRef}
									width={250}
									height={250}
									borderRadius={125}
									color={[255, 255, 255, 0.2]} // RGBA
									image={this.state.image}
									onMouseUp={this.handleOnImageUpload}
									onImageReady={e =>
										console.log("onImageReady() invoked", e)
									}
									onLoadSuccess={this.handleOnImageUpload}
									onImageChange={() =>
										console.log(
											"onImageChange() function called."
										)
									}
								/>
								<DeleteIcon
									className={classes.deleteSvg}
									onClick={this.handleOnImageDelete}
								/>
							</div>
						) : (
							<div className={classes.defaultImage} />
						)}
					</Grid>
					{croppedImageUrl && (
						<Grid>
							<img
								alt="Crop"
								style={{ maxWidth: "100%", padding: 10 }}
								src={croppedImageUrl}
							/>
						</Grid>
					)}
					<Button
						className={classes.createBtn}
						color="primary"
						variant="contained"
						onClick={this.handleOnImageUpload}>
						Upload Image
					</Button>
				</div>
			</>
		);
	}
}

export default withStyles(styles)(ImageZoomCropReformated);
