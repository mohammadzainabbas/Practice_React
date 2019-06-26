import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { styles } from "./styles";
import Theme from "./../../theme/defaultTheme";
import Send from "@material-ui/icons/Send";

/**
 * A standard button with an icon
 *
 * @visibleName Button with Icon
 */

const IconButton = ({ icon, color, onClick, children, classes }) => {
  return (
    <MuiThemeProvider theme={Theme}>
      <Button
        variant="contained"
        color={color}
        className={classes.button}
        type="submit"
        onClick={onClick}
      >
        {/* <Icon fontSize="inherit">send</Icon> */}
        <Send />
        {children}
      </Button>
    </MuiThemeProvider>
  );
};
IconButton.propTypes = {
  /** The name of the icon font ligature */
  icon: PropTypes.string.isRequired,
  /** Button label/text */
  children: PropTypes.node.isRequired,
  /** The color for the button */
  color: PropTypes.oneOf(["primary", "secondary"]),
  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func
};
IconButton.defaultProps = {
  icon: "input",
  color: "primary",
  onClick: event => {
    // eslint-disable-next-line no-console
    console.log("You have clicked me!", event.target);
  }
};

export default withStyles(styles)(IconButton);
