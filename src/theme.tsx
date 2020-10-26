import { createMuiTheme } from "@material-ui/core/styles";

export const getTheme = () => {
  let theme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: "#2979ff",
      },
      secondary: {
        main: "#F2D829",
      },
    },
  });
  theme.typography.h1 = {
    fontWeight: "normal",
    [theme.breakpoints.up("xs")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "50px",
    },
  };
  theme.typography.h2 = {
    fontWeight: "normal",
    [theme.breakpoints.up("xs")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
  };
  return theme;
};
