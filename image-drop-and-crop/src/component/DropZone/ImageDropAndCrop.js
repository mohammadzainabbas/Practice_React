import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

let kB = 50;
const maxSize = kB * 1024;
const acceptedFileTypes =
	"image/x-png, image/png, image/jpg, image/jpeg, image/gif";
const acceptedFileTypesArray = acceptedFileTypes.split(",").map(item => {
	return item.trim();
});

const handleDisplayFile = (text, files) => {
	console.log(text);
	files.map(file => console.log(file.name));
};

//To verify an uploaded file is an image
const verifyImageFile = files => {
	if (files && files.length > 0) {
		const currentFile = files[0];
		const currentFileType = currentFile.type;
		const currentFileSize = currentFile.size;
		if (currentFileSize > maxSize) {
			alert(
				`This file is not allowed. ${currentFileSize /
					1024} KBs is too large`
			);
			return false;
		} else if (!acceptedFileTypesArray.includes(currentFileType)) {
			alert(`This file is not allowed. Only images are allowed`);
			return false;
		} else {
			return true;
		}
	}
};

const handleOnDrop = (acceptedFiles, rejectedFiles) => {
	if (rejectedFiles && rejectedFiles.length > 0) {
		handleDisplayFile("Rejected files are: ", rejectedFiles);
		verifyImageFile(rejectedFiles);
	}
	if (acceptedFiles && acceptedFiles.length > 0) {
		handleDisplayFile("Accepted files are: ", acceptedFiles);
		const isVerified = verifyImageFile(acceptedFiles);
		if (isVerified) {
			const currentFile = acceptedFiles[0];
			const reader = new FileReader();
			reader.addEventListener(
				"load",
				() => {
					console.log(reader.result);
					// setImgSrc(reader.result);
				},
				false
			);
			reader.readAsDataURL(currentFile);
		}
	}
};

const baseStyle = {
	flex: 1,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "20px",
	borderWidth: 2,
	borderRadius: 2,
	borderColor: "#eeeeee",
	borderStyle: "dashed",
	cursor: "pointer",
	color: "#bdbdbd",
	outline: "none",
	transition: "border .24s ease-in-out"
};

const activeStyle = {
	borderColor: "#2196f3"
};

const acceptStyle = {
	borderColor: "#00e676"
};

const rejectStyle = {
	borderColor: "#ff1744"
};

const ImageDropAndCrop = props => {
	debugger;
	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject
	} = useDropzone({
		// accept: { acceptedFileTypes },
		accept: "image/x-png, image/png, image/jpg, image/jpeg, image/gif",
		maxSize: maxSize,
		multiple: false,
		onDrop: handleOnDrop,
		onDragEnter: console.log("On DragEnter"),
		onDragLeave: console.log("On DragLeave"),
		onDragOver: console.log("On DragOver")
	});

	const style = useMemo(
		() => ({
			...baseStyle,
			...(isDragActive ? activeStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {})
		}),
		[isDragActive, isDragReject]
	);
	return (
		<div className="container">
			<div {...getRootProps({ style })}>
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here, or click to select files</p>
			</div>
		</div>
	);
};

export default ImageDropAndCrop;
