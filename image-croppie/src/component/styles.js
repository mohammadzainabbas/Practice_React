import DefaultAvatar from "./default_avatar.svg";
export const styles = theme => ({
	createBtn: {
		// JSS uses px as the default units for this CSS property.
		padding: theme.spacing(1, 2),
		float: "right"
	},
	clearfix: {
		marginBottom: theme.spacing(3)
	},
	parentDiv: {
		height: 500,
		width: 500,
		margin: "250px auto 0"
	},
	defaultImage: {
		backgroundImage: `url(${DefaultAvatar})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "250px 250px",
		backgroundPosition: "0 0",
		fill: "white",
		margin: "50px auto 0",
		width: 250,
		height: 250
	},
	imageDiv: {
		margin: "25px auto 0",
		position: "relative"
	},
	deleteSvg: {
		color: "white",
		cursor: "pointer",
		position: "absolute",
		top: "40px",
		right: "42px",
		zIndex: 1,
		background: "red",
		borderRadius: "50%",
		padding: "5px",
		width: "35px",
		height: "35px"
	}
});
