import React, { Component } from "react";

class Canvas extends Component {
	constructor(props) {
		super(props);
		this.canvasRef = React.createRef();
	}
	componentDidMount() {
		let canvas = this.canvasRef.current.getContext("2d");
		canvas.fillRect(0, 0, 100, 100);
	}

	render() {
		return (
			<>
				<canvas ref={this.canvasRef} width={this.props.width} height={this.props.height} />
			</>
		);
	}
}

export default Canvas;
