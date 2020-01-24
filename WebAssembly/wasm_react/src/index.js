import React from "react";
import ReactDOM from "react-dom";

import Canvas from "./Canvas";
import CanvasWebAssembly from "./CanvasWebAssembly";

ReactDOM.render(
	<>
		<Canvas width={500} height={500} />
		<CanvasWebAssembly width={500} height={500} />
	</>,
	document.getElementById("app")
);

module.hot.accept();
