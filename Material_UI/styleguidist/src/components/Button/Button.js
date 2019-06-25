import React from "react";
import PropTypes from "prop-types";
import { Button as MuiButton } from "@material-ui/core";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { styles } from "./styles";
import Theme from "./../../theme/defaultTheme";

/**
 * A standard button
 *
 * @visibleName Button
 */

const Button = ({ color, onClick, children, classes }) => {
  return (
    <MuiThemeProvider theme={Theme}>
      <MuiButton
        variant="contained"
        color={color}
        className={classes.button}
        type="submit"
        onClick={onClick}
      >
        {children}
      </MuiButton>
    </MuiThemeProvider>
  );
};
Button.propTypes = {
  /** Button label/text */
  children: PropTypes.node.isRequired,
  /** The color of the button */
  color: PropTypes.oneOf(["primary", "secondary"]),
  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func
};
Button.defaultProps = {
  color: "primary",
  onClick: event => {
    // eslint-disable-next-line no-console
    console.log("You have clicked me!", event.target);
  }
};

export default withStyles(styles)(Button);
