import React, { Component } from "react";
import Dropzone from "react-dropzone";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

class ImageDropAndCrop extends Component {
	state = {
		imgSrc: null,
		crop: {
			aspect: 1 / 1
		}
	};

	kB = 50;
	maxSize = this.kB * 1024;
	acceptedFileTypes =
		"image/x-png, image/png, image/jpg, image/jpeg, image/gif";
	acceptedFileTypesArray = this.acceptedFileTypes.split(",").map(item => {
		return item.trim();
	});

	handleDisplayFile = (text, files) => {
		console.log(text);
		files.map(file => console.log(file.name));
	};

	//To verify an uploaded file is an image
	verifyImageFile = files => {
		if (files && files.length > 0) {
			const currentFile = files[0];
			const currentFileType = currentFile.type;
			const currentFileSize = currentFile.size;
			if (currentFileSize > this.maxSize) {
				alert(
					`This file is not allowed. ${currentFileSize /
						1024} KBs is too large`
				);
				return false;
			} else if (!this.acceptedFileTypesArray.includes(currentFileType)) {
				alert(`This file is not allowed. Only images are allowed`);
				return false;
			} else {
				return true;
			}
		}
	};

	handleOnDrop = (acceptedFiles, rejectedFiles) => {
		if (rejectedFiles && rejectedFiles.length > 0) {
			this.handleDisplayFile("Rejected files are: ", rejectedFiles);
			this.verifyImageFile(rejectedFiles);
		}
		if (acceptedFiles && acceptedFiles.length > 0) {
			this.handleDisplayFile("Accepted files are: ", acceptedFiles);
			const isVerified = this.verifyImageFile(acceptedFiles);
			if (isVerified) {
				const currentFile = acceptedFiles[0];
				const reader = new FileReader();
				reader.addEventListener(
					"load",
					() => {
						console.log("ImageBase64: ", reader.result);
						this.setState({
							imgSrc: reader.result
						});
					},
					false
				);
				reader.readAsDataURL(currentFile);
				console.log("After", reader.result);
			}
		}
	};

	handleOnCropChange = crop => {
		console.log(crop);
		this.setState(crop);
	};

	render() {
		const { imgSrc, crop } = this.state;
		return (
			<>
				{imgSrc !== null ? (
					<div>
						<ReactCrop
							src={imgSrc}
							crop={crop}
							onChange={this.handleOnCropChange}
						/>
					</div>
				) : (
					<div style={{ cursor: "pointer" }}>
						<Dropzone
							maxSize={this.maxSize}
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
											Drag 'n' drop some files here, or
											click to select files
										</p>
									</div>
								</section>
							)}
						</Dropzone>
					</div>
				)}
			</>
		);
	}
}

export default ImageDropAndCrop;

// const ImageDropAndCrop = props => {
// 	const [fastSpin, setFastSpin] = useContext(AppLogoContext);
// 	const [imgSrc, setImgSrc] = useContext(AppLogoContext);

// 	const {
// 		getRootProps,
// 		getInputProps,
// 		isDragActive,
// 		isDragAccept,
// 		isDragReject
// 	} = useDropzone({
// 		// accept: { acceptedFileTypes },
// 		accept: "image/x-png, image/png, image/jpg, image/jpeg, image/gif",
// 		maxSize: maxSize,
// 		multiple: false,
// 		onDrop: handleOnDrop,
// 		onDragEnter: console.log("On DragEnter"),
// 		onDragLeave: console.log("On DragLeave"),
// 		onDragOver: console.log("On DragOver")
// 	});

// 	const style = useMemo(
// 		() => ({
// 			...baseStyle,
// 			...(isDragActive ? activeStyle : {}),
// 			...(isDragAccept ? acceptStyle : {}),
// 			...(isDragReject ? rejectStyle : {})
// 		}),
// 		[isDragActive, isDragReject]
// 	);
// 	return (
// 		<>
// 			{imgSrc !== null ? (
// 				<div>
// 					{console.log("imgsrc", imgSrc)}
// 					<h6>Image Source: {imgSrc}</h6>
// 					<img src={imgSrc} alt="Preview" />
// 				</div>
// 			) : (
// 				<div style={{ cursor: "pointer" }}>
// 					<Dropzone
// 						maxSize={maxSize}
// 						accept="image/jpeg, image/png"
// 						// onDrop={handleOnDrop(setImgSrc)}
// 						onDrop={(acceptedFiles, rejectedFiles) => {
// 							handleOnDrop(acceptedFiles, rejectedFiles).then(
// 								result => {
// 									console.log("Result: ", result);
// 									setImgSrc(result);
// 								},
// 								err => {
// 									console.log("Error");
// 								}
// 							);
// 						}}
// 						multiple={false}
// 						onDragEnter={e => setFastSpin(true)}
// 						onDragOver={e => console.log("On DragOver")}
// 						onDragLeave={e => setFastSpin(false)}>
// 						{({ getRootProps, getInputProps }) => (
// 							<section>
// 								<div {...getRootProps({ style })}>
// 									<input {...getInputProps()} />
// 									<p>
// 										Drag 'n' drop some files here, or click
// 										to select files
// 									</p>
// 								</div>
// 							</section>
// 						)}
// 					</Dropzone>
// 				</div>
// 			)}
// 		</>
// 	);
// };

// export default ImageDropAndCrop;
