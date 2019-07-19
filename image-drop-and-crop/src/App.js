import React from "react";
import { AppLogoProvider } from "./context/appLogoContext";
import ImageDropZone from "./component/DropZone/dropZone";
import AppLogo from "./component/AppLogo/appLogo";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<AppLogoProvider>
				<header className="App-header">
					<AppLogo />
					<ImageDropZone />
				</header>
			</AppLogoProvider>
		</div>
	);
};

export default App;
