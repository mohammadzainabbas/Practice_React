import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ImageDropZone from "./component/DropZone/dropZone";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<ImageDropZone />
			</header>
		</div>
	);
}

export default App;
