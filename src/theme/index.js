import { createTheme, responsiveFontSizes } from "@mui/material";
import merge from "lodash.merge";
import { THEMES } from "../constants";
import {
  error,
  info,
  primary,
  secondary,
  success,
  warning,
} from "./themeColors";
const fontSize = 16;
const baseOptions = {
  direction: "ltr",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        fallback: {
          height: "75%",
          width: "75%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "4px",
          color: "inherit",
          boxShadow: "none",
          padding: "0.6rem 1.5rem",
          fontSize: 14,
          fontWeight: 700,
        },
        outlinedPrimary: {
          borderColor: primary.main,
          color: primary.main,
        },
        containedPrimary: {
          color: "white",
          "&:hover": {
            backgroundColor: primary.dark,
            boxShadow: "none",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          height: "100%",
          width: "100%",
        },
        body: {
          height: "100%",
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
        "#root": {
          height: "100%",
        },
        "#nprogress .bar": {
          zIndex: "9999 !important",
          backgroundColor: "#61A9FF !important",
          width: "100%",
          position: "fixed",
        },
        "input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button":
          {
            WebkitAppearance: "none",
            margin: 0,
          },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: 28,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          // height: 42,
          boxShadow: "none",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: "hidden",
          backgroundColor: "#E5EAF2",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          marginRight: "16px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",

          "&::after": {
            position: "absolute",
            left: 0,
            bottpm: "-1px",
            right: 0,
            height: "1px",
            content: "''",
            opacity: 1,
            backgroundColor: "#17181a",
            transition:
              "opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          },

          "&::before": {
            height: 0,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          minHeight: 0,
          "&.Mui-expanded": {
            minHeight: "auto",
          },
          ".MuiAccordionSummary-content": {
            margin: 0,
          },
          ".MuiAccordionSummary-content.Mui-expanded": {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          color: "#FFD600",
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "& .MuiTableRow-root:last-of-type": {
            "& .MuiTableCell-root": {
              borderBottom: 0,
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#94A4C4",
          textTransform: "none",
          fontSize: 14,
          fontWeight: 600,
          padding: 0,
          minWidth: "auto",
          marginLeft: "1rem",
          marginRight: "1rem",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiButtonBase-root:first-of-type": {
            marginLeft: 0,
          },
          "& .MuiButtonBase-root:last-of-type": {
            marginRight: 0,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          "& .MuiPopover-paper": {
            boxShadow: "none",
            borderRadius: "8px",
            border: "2px solid #E5EAF2",
          },
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: "'Figtree Variable', sans-serif",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input::placeholder": {
            color: secondary[400],
            opacity: 1,
          },
          "& label": {
            color: secondary[400],
            opacity: 1,
            fontWeight: 500,
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          padding: 4,
          border: "2px solid #fff",
          "& .MuiButtonBase-root.MuiToggleButton-root": {
            padding: "6px",
            textTransform: "capitalize",
            borderRadius: 4,
            fontSize: 14,
            border: "none",
          },
          "& .MuiButtonBase-root.MuiToggleButton-root.Mui-selected": {
            backgroundColor: "#fff",
            boxShadow: "inset 0px -2px 0 0 rgba(0,0,0,.25)",
          },
        },
      },
    },
  },
  typography: {
    button: {
      fontWeight: 600,
      fontSize: 16,
    },
    fontFamily: "'Figtree Variable', sans-serif",
    h1: {
      fontWeight: 800,
      fontSize: "4.25rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "4rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.25rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.1rem",
      // fontSize,
    },
    overline: {
      fontWeight: 600,
    },
    body1: {
      fontSize,
    },
    body2: {
      fontSize,
    },
  },
};
const themesOptions = {
  [THEMES.LIGHT]: {
    palette: {
      primary,
      secondary,
      error,
      warning,
      success,
      info,
      divider: secondary[300],
      background: {
        default: "#f3f4f9",
        paper: "#f3f4f9",
        // default: "rgb(212, 201, 201)",
        // default: "#fff",
      },
      text: {
        primary: secondary[500],
        secondary: secondary[300],
        disabled: secondary[400],
      },
      mode: "light",
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            // boxShadow: "none",
            // border: "1px solid #E5EAF2",
            boxShadow: "16px 16px 32px #ededed, -16px -16px 32px #ffffff",
            border: "none",
            borderRadius: 8,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: secondary[500],
            color: secondary.main,

            // "&:Mui-Outlined": {
            //   backgroundColor: secondary.main,
            // },
          },
          outlinedSecondary: {
            backgroundColor: "rgba(0,0,0,0)",
            color: secondary[500],
            border: "none",
          },
          //   "&.MuiOutlined": {
          //     backgroundColor: secondary.main,
          //   },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(0,0,0,.6)",
            borderColor: "rgba(0,0,0,.6)",
            opacity: 1,
          },
        },
      },
    },
  },
  [THEMES.DARK]: {
    palette: {
      primary,
      error,
      warning,
      success,
      info,
      background: {
        // default: "#1e2732",
        default: "#091922",
        paper: "#091922",
        // paper: "#222b36",
      },
      mode: "dark",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          containedSecondary: {
            color: "black",
            backgroundColor: secondary.main,
            borderColor: secondary.main,
            "&:hover": {
              backgroundColor: `#b2b2b2`,
              boxShadow: "none",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            color: secondary[500],
            backgroundColor: secondary.main,
            // backgroundColor: secondary[500],
            // color: secondary.main,
            // backgroundColor: primary.dark,
            // color: secondary.main,
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            border: "none",
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          root: {
            "& .MuiPopover-paper": {
              border: "1px solid rgba(255, 255, 255, 0.12)",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            // border: "1px solid hsla(0,0%,100%,.2)",
            boxShadow: "20px 20px 60px #08151d, -20px -20px 60px #0a1d27",
          },
        },
      },
    },
  },
};
export const customTheme = (config) => {
  let themeOption = themesOptions[config.theme];

  if (!themeOption) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    themeOption = themesOptions[THEMES.LIGHT];
  } //@ts-ignore

  const merged = merge({}, baseOptions, themeOption, {
    direction: config.direction,
  }); //@ts-ignore

  let theme = createTheme(merged);

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  } // theme shadows

  theme.shadows[1] = "0px 4px 23px rgba(0, 0, 0, 0.12)";
  theme.shadows[2] = "0px 0px 21px 1px rgba(0, 0, 0, 0.07)";
  theme.shadows[3] = "0px 10px 30px rgba(0, 0, 0, 0.1)";
  theme.shadows[4] = "0px 7px 30px 3px rgba(0, 0, 0, 0.05)"; // console.log(theme);

  return theme;
};
