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
				<div className="profileDiv">
					<img
						className="image"
						src={events.map(item => item)[0].actor.avatar_url}
						alt={events.map(item => item)[0].actor.login}
					/>
					<h2>{events.map(item => item)[0].actor.login}'s GitHub Events</h2>
				</div>
				<div>{components}</div>
			</Suspense>
		);
	}
}

export default App;
