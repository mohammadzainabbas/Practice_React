import React from "react";
import PropTypes from "prop-types";
import { Button as MuiButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { styles } from "./styles";

/**
 * The only true button.
 *
 * @visibleName Button with Icon
 */

const IconButton = ({ icon, onClick, children, classes }) => {
  return (
    <MuiButton
      variant="contained"
      className={classes.button}
      type="submit"
      onClick={onClick}
    >
      <Icon>{icon}</Icon>
      {children}
    </MuiButton>
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
  color: "primary",
  onClick: event => {
    // eslint-disable-next-line no-console
    console.log("You have clicked me!", event.target);
  }
};

export default withStyles(styles)(IconButton);
