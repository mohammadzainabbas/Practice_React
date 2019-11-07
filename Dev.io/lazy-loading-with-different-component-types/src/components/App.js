import React, { Component, Suspense } from "react";
import shortid from "short-id";
import * as Events from "./events";

import "./App.css";

class App extends Component {
	render() {
		const { events } = this.props;
		const components = events.map(event => {
			const Component = Events[event.type];
			const key = shortid.generate();

			return Component ? <Component key={key} {...event} /> : <Events.NullEvent key={key} />;
		});

		return (
			<Suspense fallback={<div>Loading...</div>}>
				<h2>Sung's GitHub Events</h2>
				<div>{components}</div>
			</Suspense>
		);
	}
}

export default App;
