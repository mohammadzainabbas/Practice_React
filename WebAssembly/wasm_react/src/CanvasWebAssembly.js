import React, { Component } from "react";

class Canvas extends Component {
	constructor(props) {
		super(props);
		this.canvasRef = React.createRef();
	}
	componentDidMount() {
		let canvas = this.canvasRef.current.getContext("2d");
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
