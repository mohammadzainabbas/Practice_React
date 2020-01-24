import React, { Component } from "react";

class Canvas extends Component {
	componentDidMount() {
		let canvas = this.refs.canvas.getContent("2d");
		canvas.fillRect(0, 0, 100, 100);
	}

	render() {
		return (
			<>
				<canvas ref="canvas" width={this.props.width} height={this.props.height} />
			</>
		);
	}
}

export default Canvas;
