import React from "react";
import ReactDOM from "react-dom";

import Canvas from "./Canvas";

ReactDOM.render(<Canvas width={500} height={500} />, document.getElementById("app"));

module.hot.accept();
