/** @jsx jsx */
import { jsx, Box, Flex, Styled } from "theme-ui";

export interface QuoteProps {
  title: string;
  name: string;
  company: string;
  quote: string;
}

export const Quote = ({ title, name, company, quote }: QuoteProps) => (
  <Box
    as="blockquote"
    sx={{
      bg: "muted",
      padding: [5, 6, 7],
      fontFamily: "heading",
      fontSize: [2, 2, 3],
      margin: 0
    }}
  >
    <Flex
      sx={{
        "& > * + *": { marginLeft: [4, 5, 6] }
      }}
    >
      <QuoteMark />
      <Box>
        <Styled.p sx={{ marginTop: 4, marginBottom: 3 }}>{quote}</Styled.p>
        <Styled.p
          sx={{
            margin: 0,
            fontWeight: "bold"
          }}
        >
          {name}
        </Styled.p>
        <Styled.p sx={{ margin: 0, fontStyle: "italic" }}>
          {title}, {company}
        </Styled.p>
      </Box>
    </Flex>
  </Box>
);

const QuoteMark = () => (
  <Box
    as="svg"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 349.078 349.078"
    fill="rgba(0,0,0,0.2)"
    sx={{ width: [4, 4, 4], height: [4, 4, 4] }}
  >
    <g>
      <path
        d="M150.299,26.634v58.25c0,7.9-6.404,14.301-14.304,14.301c-28.186,0-43.518,28.909-45.643,85.966h45.643
		c7.9,0,14.304,6.407,14.304,14.304v122.992c0,7.896-6.404,14.298-14.304,14.298H14.301C6.398,336.745,0,330.338,0,322.447V199.455
		c0-27.352,2.754-52.452,8.183-74.611c5.568-22.721,14.115-42.587,25.396-59.048c11.608-16.917,26.128-30.192,43.16-39.44
		C93.886,17.052,113.826,12.333,136,12.333C143.895,12.333,150.299,18.734,150.299,26.634z M334.773,99.186
		c7.896,0,14.305-6.407,14.305-14.301v-58.25c0-7.9-6.408-14.301-14.305-14.301c-22.165,0-42.108,4.72-59.249,14.023
		c-17.035,9.248-31.563,22.523-43.173,39.44c-11.277,16.461-19.824,36.328-25.393,59.054c-5.426,22.166-8.18,47.266-8.18,74.605
		v122.992c0,7.896,6.406,14.298,14.304,14.298h121.69c7.896,0,14.299-6.407,14.299-14.298V199.455
		c0-7.896-6.402-14.304-14.299-14.304h-44.992C291.873,128.095,306.981,99.186,334.773,99.186z"
      />
    </g>
  </Box>
);
