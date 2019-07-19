import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const handleDisplayFile = (text, files) => {
	console.log(text);
	files.map(file => console.log(file.name));
};
const handleOnDrop = (acceptedFiles, rejectedFiles) => {
	handleDisplayFile("Accepted files are: ", acceptedFiles);
	handleDisplayFile("Rejected files are: ", rejectedFiles);
};

const getColor = props => {
	if (props.isDragAccept) {
		return "#00e676";
	}
	if (props.isDragReject) {
		return "#ff1744";
	}
	if (props.isDragActive) {
		return "#2196f3";
	}
	return "#eeeeee";
};

const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	border-width: 2px;
	border-radius: 2px;
	border-color: ${props => getColor(props)};
	border-style: dashed;
	// background-color: #fafafa;
	color: #bdbdbd;
	outline: none;
	transition: border 0.24s ease-in-out;
	cursor: pointer;
`;

const StyledDropzone = props => {
	let kB = 10;
	const maxSize = kB * 1024;
	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject
	} = useDropzone({
		accept: "image/jpeg",
		maxSize: maxSize,
		multiple: false,
		onDrop: handleOnDrop,
		onDragOver: console.log("On DragOver")
	});

	return (
		<div className="container">
			<Container
				{...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here, or click to select files</p>
			</Container>
		</div>
	);
};

export default StyledDropzone;
