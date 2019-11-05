import React, { Component } from "react";

class Media extends Component {
	state = {
		matches: window.matchMedia(this.props.query).matches
	};
	componentDidMount() {
		this.setup();
	}
	componentDidUpdate(prevProps) {
		if (prevProps.query !== this.props.query) {
			this.removeListener();
			this.setup();
		}
	}
	setup() {
		let media = window.matchMedia(this.props.query);
		if (media.matches !== this.state.matches) {
			this.setState({ matches: media.matches });
		}
		let listener = () => this.setState({ matches: media.matches });
		media.addListener(listener);
		this.removeListener = () => media.removeListener(listener);
	}
	render() {
		return this.props.children(this.state.matches);
	}
}

const App = () => {
	return (
		<Media query="(max-width: 400px)">
			{small => (
				<Media query="(min-width: 800px)">
					{large => (
						<div className="Media">
							<h1>Media</h1>
							<p>Small? {small ? "Yeah" : "Nope"}.</p>
							<p>Large? {large ? "Yeah" : "Nope"}.</p>
						</div>
					)}
				</Media>
			)}
		</Media>
	);
};

export default App;
