import React, { useState, createContext } from "react";

export const AppLogoContext = createContext();

export const AppLogoProvider = props => {
	const [fastSpin, setFastSpin] = useState(false);
	return (
		<AppLogoContext.Provider value={[fastSpin, setFastSpin]}>
			{props.children}
		</AppLogoContext.Provider>
	);
};
