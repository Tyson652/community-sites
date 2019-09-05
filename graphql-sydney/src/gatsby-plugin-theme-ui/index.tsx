import theme from "gatsby-community-theme/src/theme";

export default {
  ...theme,
  fonts: {
    body: "'Rubik', sans-serif",
    heading: "'Rubik', sans-serif",
    modern: "'Rubik', sans-serif"
  },
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
    lightness: "#E0E0E0",
    headerOpaque: "rgba(47,15,123, 0.9)",
    headerTransparent: "rgba(69,12,113, 0)"
  },
  styled: {
    h3: {
      variant: "textStyles.modern",
      fontSize: 2
    }
  }
};
