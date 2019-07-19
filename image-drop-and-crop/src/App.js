import React from "react";
import { AppLogoProvider } from "./context/appLogoContext";
import ImageDropZone from "./component/DropZone/ImageDropZone";
import StyledDropzone from "./component/DropZone/UsingStyledComponentStyledDropZone";
import AppLogo from "./component/AppLogo/appLogo";
import "./App.css";
import ImageDropAndCrop from "./component/DropZone/ImageDropAndCrop";
import InLineStyledDropzone from "./component/DropZone/InLineStyledDropZone";

const App = () => {
	return (
		<div className="App">
			<AppLogoProvider>
				<header className="App-header">
					<AppLogo />
					{/* <ImageDropZone /> */}
					{/* <StyledDropzone /> */}
					{/* <InLineStyledDropzone /> */}
					<ImageDropAndCrop />
				</header>
			</AppLogoProvider>
		</div>
	);
};

export default App;
