import React, { Component } from "react";

const wasm = import("./fractal.wasm");

class CanvasWebAssembly extends Component {
	constructor(props) {
		super(props);
		this.canvasRef = React.createRef();
	}
	componentDidMount() {
		wasm.then(wasm => {
			const mandelIterWASM = wasm._Z10mandelIterffi;
			let canvas = this.canvasRef.current.getContext("2d");
			let mag = 200;
			let panX = 2;
			let panY = 1.25;
			let maxIter = 100;

			for (let x = 10; x < this.props.height; x++) {
				for (let y = 10; y < this.props.width; y++) {
					// let m = this.mandelIter(x/mag - panX, y/mag - panY, maxIter);
					let m = mandelIterWASM(x / mag - panX, y / mag - panY, maxIter);
					canvas.fillStyle = m === 0 ? "#000" : "hsl(0, 100%, " + m + "%)";
					canvas.fillRect(x, y, 1, 1);
				}
			}
		});
	}

	render() {
		return (
			<>
				<canvas ref={this.canvasRef} width={this.props.width} height={this.props.height} />
			</>
		);
	}
}

export default CanvasWebAssembly;
