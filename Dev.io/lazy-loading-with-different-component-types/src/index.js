import React from "react";
import { render } from "react-dom";
import App from "./components/App";

fetch(`https://api.github.com/users/mohammadzainabbas/events/public`)
	.then(response => response.json())
	.then(events => {
		render(<App events={events} />, document.getElementById("root"));
	});
