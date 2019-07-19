import React, { useContext } from "react";
import logo from "../../logo.svg";
import { AppLogoContext } from "./../../context/appLogoContext";
import "../../App.css";

const AppLogo = () => {
	const [fastSpin, setFastSpin] = useContext(AppLogoContext);
	return (
		<img
			src={logo}
			className={fastSpin ? "Fast-App-logo" : "App-logo"}
			alt="logo"
		/>
	);
};

export default AppLogo;
