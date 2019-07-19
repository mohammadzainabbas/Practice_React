import React, { useContext } from "react";
import Dropzone from "react-dropzone";
import { AppLogoContext } from "../../context/appLogoContext";

const handleDisplayFile = (text, files) => {
	console.log(text);
	files.map(file => console.log(file.name));
};
const handleOnDrop = (acceptedFiles, rejectedFiles) => {
	handleDisplayFile("Accepted files are: ", acceptedFiles);
	handleDisplayFile("Rejected files are: ", rejectedFiles);
};

const ImageDropZone = () => {
	let kB = 10;
	const maxSize = kB * 1024;
	const [fastSpin, setFastSpin] = useContext(AppLogoContext);
	return (
		<>
			<div style={{ cursor: "pointer" }}>
				<Dropzone
					maxSize={maxSize}
					accept="image/jpeg, image/png"
					onDrop={handleOnDrop}
					multiple={false}
					onDragEnter={e => setFastSpin(true)}
					onDragOver={e => console.log("On DragOver")}
					onDragLeave={e => setFastSpin(false)}>
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
			</div>
		</>
	);
};

export default ImageDropZone;
