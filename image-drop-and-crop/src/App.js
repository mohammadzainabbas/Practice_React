import React from "react";
import { AppLogoProvider } from "./context/appLogoContext";
import AppLogo from "./component/AppLogo/appLogo";
import "./App.css";
// import ImageDropZone from "./component/DropZone/ImageDropZone";
// import StyledDropzone from "./component/DropZone/UsingStyledComponentStyledDropZone";
// import ImageDropAndCrop from "./component/DropZone/ImageDropAndCrop";
// import InLineStyledDropzone from "./component/DropZone/InLineStyledDropZone";
import ImageCropAndPreview from "./component/DropZone/ImageCropAndPreview";

const App = () => {
	return (
		<div className="App">
			<AppLogoProvider>
				<header className="App-header">
					<AppLogo />
					{/* <ImageDropZone /> */}
					{/* <StyledDropzone /> */}
					{/* <InLineStyledDropzone /> */}
					{/* <ImageDropAndCrop /> */}
					<ImageCropAndPreview />
				</header>
			</AppLogoProvider>
		</div>
	);
};

export default App;
