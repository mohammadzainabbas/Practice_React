import React from "react";
import { Paper, CircularProgress } from "@material-ui/core";
const CircularLoading = () => {
	return (
		<>
			<Paper
				component="div"
				elevation={40}
				style={{
					cursor: "wait",
					position: "fixed",
					width: "50%",
					height: "50%",
					zIndex: "500",
					backgroundColor: "aquamarine"
					// left: "50%",
					// top: "50%"
					// alignContent: "center"
				}}>
				<CircularProgress
					style={{
						position: "absolute",
						top: "45%",
						left: "45%"
						// msTransform: "translate(-50%, -50%)"
						// transform: "translate(-50%, -50%)"
					}}
					color="primary"
					onClick={() => console.log("You have clicked on loading component")}
				/>
			</Paper>
		</>
	);
};

export default CircularLoading;
