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

	mandelIter(x, y, maxIter) {
		let r = x;
		let i = y;
		for (let a = 0; a < maxIter; a++) {
			let tmpr = r * r - i * i + x;
			let tmpi = 2 * r * i + y;

			r = tmpr;
			i = tmpi;

			if (r * i > 5) {
				return (a / maxIter) * 100;
			}
		}

		return 0;
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
