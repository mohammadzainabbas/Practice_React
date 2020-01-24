import React, { useEffect } from "react";

const wasm = import("./fractal.wasm");

const CanvasWebAssembly = props => {
	const canvasRef = React.createRef();

	useEffect(() => {
		wasm.then(wasm => {
			const mandelIterWASM = wasm._Z10mandelIterffi;
			let canvas = canvasRef.current.getContext("2d");
			let mag = 200;
			let panX = 2;
			let panY = 1.25;
			let maxIter = 100;

			for (let x = 10; x < props.height; x++) {
				for (let y = 10; y < props.width; y++) {
					// let m = this.mandelIter(x/mag - panX, y/mag - panY, maxIter);
					let m = mandelIterWASM(x / mag - panX, y / mag - panY, maxIter);
					canvas.fillStyle = m === 0 ? "#000" : "hsl(0, 100%, " + m + "%)";
					canvas.fillRect(x, y, 1, 1);
				}
			}
		});
	}, []);

	return (
		<>
			<canvas ref={canvasRef} width={props.width} height={props.height} />
		</>
	);
};

export default CanvasWebAssembly;
