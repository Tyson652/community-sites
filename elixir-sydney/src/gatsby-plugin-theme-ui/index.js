import theme from "gatsby-community-theme/src/theme";

export default {
  ...theme,
  fonts: {
    body: "'Source Sans Pro', sans-serif",
    heading: "'Source Sans Pro', sans-serif",
    modern: "'Source Sans Pro', sans-serif"
  },
  styled: {
    h3: {
      variant: "textStyles.modern",
      fontSize: 5
    }
  }
};
