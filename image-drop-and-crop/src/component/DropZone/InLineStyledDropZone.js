import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";

const handleDisplayFile = (text, files) => {
	console.log(text);
	files.map(file => console.log(file.name));
};
const handleOnDrop = (acceptedFiles, rejectedFiles) => {
	handleDisplayFile("Accepted files are: ", acceptedFiles);
	handleDisplayFile("Rejected files are: ", rejectedFiles);
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
	// backgroundColor: "#fafafa",
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

const InLineStyledDropzone = props => {
	let kB = 10;
	const maxSize = kB * 1024;
	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject
	} = useDropzone({
		accept: "image/jpeg, image/png",
		maxSize: maxSize,
		multiple: false,
		onDrop: handleOnDrop,
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

export default InLineStyledDropzone;
