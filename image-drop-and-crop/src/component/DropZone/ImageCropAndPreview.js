import React, { Component } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import instance from "./../../api/config";

class ImageCropAndPreview extends Component {
	state = {
		src: null,
		crop: {
			aspect: 1 / 1.2,
			unit: "px", // default, can be 'px' or '%'
			x: 130,
			y: 50,
			width: 200,
			height: 200
		},
		jsonData: {
			name: "Awais Khalid Awan",
			username: "anonymous.12",
			password: "123456125214565",
			monitoringPassword: "12345678901234",
			pnNumber: "a-65432232155 ",
			active: 1,
			personID: 6,
			rankDTO: {
				rankID: 1
			},
			genderDTO: {
				genderID: 1
			},
			decoration: "HI (Military)"
		}
	};

	onSelectFile = e => {
		if (e.target.files && e.target.files.length > 0) {
			const reader = new FileReader();
			reader.addEventListener("load", () =>
				this.setState({ src: reader.result })
			);
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	// If you setState the crop in here you should return false.
	onImageLoaded = image => {
		this.imageRef = image;
	};

	onCropComplete = crop => {
		this.makeClientCrop(crop);
	};

	onCropChange = (crop, percentCrop) => {
		// You could also use percentCrop:
		// this.setState({ crop: percentCrop });
		console.log(crop);
		this.setState({ crop });
	};

	async makeClientCrop(crop) {
		if (this.imageRef && crop.width && crop.height) {
			const croppedImageUrl = await this.getCroppedImg(
				this.imageRef,
				crop,
				"newFile.jpeg"
			);
			this.setState({ croppedImageUrl });
			// let formData = new FormData();
			// let body = new File(
			// 	[JSON.stringify(this.state.jsonData, null, 2)],
			// 	"body.json",
			// 	{
			// 		type: "application/json",
			// 		lastModified: new Date()
			// 	}
			// );
			// formData.append("body", body);
			// let imageFile = new File([this.state.blob], "image.jpg", {
			// 	type: this.state.type,
			// 	lastModified: new Date()
			// });
			// console.log("Image File", imageFile);
			// formData.append("files", imageFile);
			// console.log("FormData", formData);
			// instance
			// 	.post("v1/admin/person", formData)
			// 	.then(res => {
			// 		console.log("Response", res);
			// 	})
			// 	.catch(err => {
			// 		console.log("Error", err);
			// 	});
		}
	}

	getCroppedImg(image, crop, fileName) {
		const canvas = document.createElement("canvas");
		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;
		canvas.width = crop.width;
		canvas.height = crop.height;
		const ctx = canvas.getContext("2d");

		ctx.drawImage(
			image,
			crop.x * scaleX,
			crop.y * scaleY,
			crop.width * scaleX,
			crop.height * scaleY,
			0,
			0,
			crop.width,
			crop.height
		);
		console.log("CTX", ctx);

		return new Promise((resolve, reject) => {
			canvas.toDataURL();
			canvas.toBlob(blob => {
				if (!blob) {
					//reject(new Error('Canvas is empty'));
					console.error("Canvas is empty");
					return;
				}
				blob.name = fileName;
				console.log("Blob", blob);
				this.setState({
					blob,
					type: blob.type,
					size: blob.size,
					name: blob.name
				});
				window.URL.revokeObjectURL(this.fileUrl);
				this.fileUrl = window.URL.createObjectURL(blob);
				console.log("this.fileURL", this.fileUrl);
				resolve(this.fileUrl);
			}, "image/jpeg");
		});
	}

	render() {
		const { crop, croppedImageUrl, src } = this.state;

		return (
			<div className="App">
				<div>
					<input type="file" onChange={this.onSelectFile} />
				</div>
				{src && (
					<ReactCrop
						keepSelection={true}
						// locked={true}
						src={src}
						crop={crop}
						onImageLoaded={this.onImageLoaded}
						onComplete={this.onCropComplete}
						onChange={this.onCropChange}
					/>
				)}
				{croppedImageUrl && (
					<div>
						<img
							alt="Crop"
							style={{ maxWidth: "100%", padding: 10 }}
							src={croppedImageUrl}
						/>

						{crop && (
							<div>
								<div>
									<span style={{ padding: 10 }}>
										{crop.width}
									</span>
									<span style={{ padding: 10 }}>
										{crop.height}
									</span>
									<span style={{ padding: 10 }}>
										{crop.x}
									</span>
									<span style={{ padding: 10 }}>
										{crop.y}
									</span>
								</div>
								<div>
									<span style={{ padding: 10 }}>
										Width:
										<input
											value={crop.width}
											onChange={e =>
												this.setState({
													crop: {
														...crop,
														width: e.target.value
													}
												})
											}
										/>
									</span>
									<span style={{ padding: 10 }}>
										Height:
										<input
											value={crop.height}
											onChange={e =>
												this.setState({
													crop: {
														...crop,
														height: e.target.value
													}
												})
											}
										/>
									</span>
									<span style={{ padding: 10 }}>
										X:
										<input
											value={crop.x}
											onChange={e =>
												this.setState({
													crop: {
														...crop,
														x: e.target.value
													}
												})
											}
										/>
									</span>
									<span style={{ padding: 10 }}>
										Y:
										<input
											value={crop.y}
											onChange={e =>
												this.setState({
													crop: {
														...crop,
														y: e.target.value
													}
												})
											}
										/>
									</span>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		);
	}
}

export default ImageCropAndPreview;
