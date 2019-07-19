import React, { useState, createContext } from "react";

export const AppLogoContext = createContext();

export const AppLogoProvider = props => {
	const [fastSpin, setFastSpin] = useState(false);
	const [imgSrc, setImgSrc] = useState(null);
	return (
		<AppLogoContext.Provider
			value={([fastSpin, setFastSpin], [imgSrc, setImgSrc])}>
			{props.children}
		</AppLogoContext.Provider>
	);
};
