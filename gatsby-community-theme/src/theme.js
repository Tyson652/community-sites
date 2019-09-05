export default {
  colors: {
    text: "#3e3e3e",
    mutedText: "#555",
    background: "#fff",
    primary: "#92c4e9",
    secondary: "#1b1b38",
    accent: "#bd4738",
    elixir: "#402350",
    react: "#53c1de",
    brandDark: "#4e2a8e",
    elixirLight: "#6c43b5",
    dark: "#7250a1",
    lightBorder: "#f2f2f2",
    elixirMid: "#8e63db",
    darkness: "#000",
    lightness: "#f2f2f2",
    headerOpaque: "rgba(33,16,75, 0.9)",
    headerTransparent: "rgba(33,16,75, 0)"
  },
  fonts: {
    body: "'Open Sans', Helvetica, sans-serif",
    heading: "'Playfair Display', Georgia, serif",
    modern: "'Arial', Helvetica, sans-serif"
  },
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 64, 76, 84],
  fontWeights: {
    light: 100,
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    tight: 1,
    body: 1.5,
    heading: 1.25
  },
  sizes: [
    0,
    16,
    20,
    24,
    32,
    50,
    64,
    82,
    100,
    128,
    160,
    200,
    256,
    300,
    325,
    350,
    375,
    400,
    425,
    450,
    475,
    500,
    550,
    600,
    650,
    700,
    750,
    800,
    850,
    900
  ],
  space: [0, 2, 4, 8, 16, 24, 32, 64, 128, 256],
  breakpoints: ["690px", "960px", "1100px", "1750px"],
  borderTypes: ["solid"],
  borderWidths: [0, 1, 2, 4, 6, 8, 10],
  radii: [0, "2px", "4px", "6px", "1em", "2em", "4em"],
  // abstraction leap
  buttonStyles: {
    primary: {
      color: "primary",
      backgroundColor: "secondary"
    },
    secondary: {
      color: "secondary",
      backgroundColor: "primary"
    },
    danger: {
      color: "secondary",
      backgroundColor: "accent"
    },
    signUp: {
      color: "background",
      backgroundColor: "brandDark",
      paddingX: 5,
      paddingY: 3,
      display: "inline-block",
      borderRadius: 3,
      marginX: 3,
      marginTop: [3, 3, 4],
      marginBottom: 5,
      border: "2px solid background",
      fontFamily: "modern",
      fontSize: [2, 2, 3],
      fontWeight: "body",
      textDecoration: "none",
      ":hover": {
        textDecoration: "none",
        cursor: "pointer"
      }
    }
  },
  textStyles: {
    body: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading"
    },
    modern: {
      fontFamily: "modern",
      fontWeight: "heading",
      lineHeight: "heading"
    },
    title: {
      fontFamily: "modern",
      fontWeight: "heading",
      lineHeight: "heading",
      color: "mutedText",
      padding: 3,
      marginBottom: [2, 2, 2],
      fontSize: 4
    },
    shadow: {
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.05)"
    }
  },
  linkStyles: {
    default: {
      color: "primary",
      cursor: "pointer",
      textDecoration: "none",
      ":hover": {
        color: "primary",
        textDecoration: "underline"
      }
    },
    buttonDefault: {
      textDecoration: "none",
      ":active": {
        textDecoration: "none",
        color: "none"
      },
      ":hover": {
        textDecoration: "none",
        cursor: "pointer"
      }
    },
    button: {
      borderWidth: 1,
      borderColor: "primary",
      paddingX: 4,
      paddingY: [1, 2, 2],
      marginY: [3, 2, 2],
      borderStyle: 0,
      borderRadius: 2,
      fontSize: 1,
      fontWeight: "body"
    }
  },
  linearGradientStyles: {
    transparent: {
      background: "linear-gradient(transparent 300px, white 95%)"
    }
  },
  clipPathStyles: {
    footer: {
      clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 30%)"
    }
  },
  boxShadowStyles: {
    lightShadow: {
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.11)"
    },
    mediumShadow: {
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)"
    },
    darkShadow: {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
    },
    darkerShadow: {
      boxShadow: "3px -3px 80px 20px rgba(0, 0, 0, 0.1)"
    }
  },
  hoverShadow: {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)"
  },
  borderStyles: {
    veryLightBorderTop: {
      borderTop: theme => `1px solid ${theme.colors.lightBorder}`
    },
    lightBorder: {
      border: theme => `2px solid ${theme.colors.lightBorder}`
    },
    lightBorderBottom: {
      borderBottom: theme => `2px solid ${theme.colors.lightBorder}`
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
      lineHeight: "body",
      fontSize: [2, 2, 3]
    },
    // Container: {
    //   paddingX: [3, 4, 5]
    // },
    Header: {
      variant: "textStyles.heading",
      color: "primary",
      bg: "elixirPurple"
    },
    h1: {
      variant: "textStyles.modern",
      fontSize: [6, 6, 6]
    },
    h2: {
      variant: "textStyles.modern",
      fontSize: [5, 5, 5]
    },
    h3: {
      variant: "textStyles.modern",
      fontSize: [4, 4, 4]
    },
    h4: {
      variant: "textStyles.modern",
      fontSize: [3, 3, 3]
    },
    h5: {
      variant: "textStyles.modern",
      fontSize: [2, 2, 2]
    },
    a: {
      variant: "linkStyles.Buttondefault",
      textDecoration: "none"
    },
    icon: {
      margin: "14px 16px 14px -5px",
      fontSize: "36px"
    },
    li: { padding: 3 },
    // p: { fontSize: 3 },
    hr: {
      borderBottom: theme =>
        `${theme.borderWidths[2]}px ${theme.borderStyles[0]} ${
          theme.colors.lightBorder
        }`
    }
  }
};
