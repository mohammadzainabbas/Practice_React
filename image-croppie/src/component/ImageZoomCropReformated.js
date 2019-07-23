import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import Dropzone from "react-dropzone";
import ReactAvatarEditor from "react-avatar-editor";
import { Grid, TextField, InputAdornment } from "@material-ui/core";
import FileUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";

class ImageZoomCropReformated extends Component {
	state = {
		image: null,
		fileName: null,
		maxSize: 2 * 1024 * 1024
	};

	// handleOnDrop = (acceptedFiles, rejectedFiles) => {
	// 	if (rejectedFiles) {
	// 		console.log("Rejected Files", rejectedFiles[0].name);
	// 	} else {
	// 		console.log("Accepted Files", acceptedFiles[0].name);
	// 		this.setState({ image: acceptedFiles[0] });
	// 	}
	// };

	handleOnDrop = acceptedFiles => {
		this.setState({
			fileName: acceptedFiles[0].name,
			image: acceptedFiles[0]
		});
	};

	handleOnImageDelete = () => {
		this.setState({ image: null });
	};

	render() {
		const { image, fileName, maxSize } = this.state;
		const { classes } = this.props;
		return (
			<>
				<div
					style={{
						height: 500,
						width: 500,
						margin: "250px auto 0"
					}}>
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
												// defaultValue='Choose file'
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
									width={250}
									height={250}
									borderRadius={125}
									image={this.state.image}
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
				</div>
			</>
		);
	}
}

export default withStyles(styles)(ImageZoomCropReformated);
