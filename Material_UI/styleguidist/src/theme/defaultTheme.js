import { createMuiTheme } from "@material-ui/core/styles";
// import secondaryColor from "@material-ui/core/colors/red";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#074880",
      light: "#0778b9",
      dark: "#072f5e",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#ff1744",
      light: "#ff4569",
      dark: "#b2102f",
      contrastText: "#FFFFFF"
    },
    background: {
      default: "#ffffff"
    }
  },
  typography: {
    useNextVariants: true,
    h6: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
      color: "#1D5485",
      lineHeight: "1.2"
    },
    body2: {
      color: "black"
    }
  },
  status: {
    danger: "orange"
  },
  props: {
    MuiInput: {
      disableUnderline: true
    },
    MuiPaper: {
      elevation: 0
    },
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  },
  overrides: {
    MuiButtonBase: {
      root: {
        borderRadius: "30px !important"
      }
    },
    MuiInputBase: {
      root: {
        borderRadius: "30px !important",
        backgroundColor: "#FFF",
        lineHeight: 16,
        padding: 5,
        height: 30,
        border: "2px solid #EDEDED",
        "&$error": {
          border: "2px solid red"
        }
      },
      input: {
        textIndent: 15
      }
    },
    MuiDialogTitle: {
      root: {
        color: "#eff1f3",
        fontFamily: "Roboto, sans-serif",
        backgroundColor: "#193F6F",
        background: "linear-gradient(to right bottom, #193F6F, #161E54)",
        fontSize: "large",
        fontWeight: "500"
      }
    },
    MuiDialogContent: {
      root: {
        paddingTop: "21px"
      }
    },
    Mui: {
      root: {
        "&$error": {
          border: "2px solid red"
        }
      }
    }
  }
});

// console.log("Theme", Theme);

export default Theme;
