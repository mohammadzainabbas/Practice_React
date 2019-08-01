import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CircularLoading from "./components/CircularProgress";
import { Paper, Backdrop } from "@material-ui/core";
function App() {
	return (
		<Paper style={{ backgroundColor: "aqua" }} component="div" elevation={0}>
			{/* <div className="App">
				<header className="App-header"> */}
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			{/* <Backdrop open={true}> */}
			<div style={{ padding: 10 }}>
				<CircularLoading />
			</div>
			{/* </Backdrop> */}
			{/* </header>
			</div> */}
		</Paper>
	);
}

export default App;
