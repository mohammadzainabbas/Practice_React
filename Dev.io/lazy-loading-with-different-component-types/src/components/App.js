import React, { Component, Suspense } from "react";
import shortid from "short-id";
import * as Events from "./events";
import "./App.css";
import UserInfo from "./customHooks/getUserInfo";

class App extends Component {
	render() {
		const { events } = this.props;
		const components = events.map(event => {
			const Component = Events[event.type];
			const key = shortid.generate();

			return Component ? <Component key={key} {...event} /> : <Events.NullEvent key={key} />;
		});
		debugger;

		return (
			<Suspense fallback={<div>Loading...</div>}>
				<UserInfo profile_link={events.map(item => item)[0].actor.login} />
				<h2 className="text">{events.map(item => item)[0].actor.login}'s GitHub Events</h2>
				<div>{components}</div>
			</Suspense>
		);
	}
}

export default App;
