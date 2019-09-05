/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui";
import { Container } from "theme-ui";

export interface PageInformationProps {
  heading1: string;
  paragraph1: string;
}

export const PageInformation = ({
  heading1,
  paragraph1
}: PageInformationProps) => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "100%", marginTop: [5, 0, 0] }}>
        <Heading>{heading1}</Heading>
        <Flex
          sx={{
            width: "100%",
            flexDirection: ["column", "row", "row"]
          }}
        >
          <Paragraph>{paragraph1}</Paragraph>
        </Flex>
      </Box>
    </Container>
  );
};

interface ChildrenProps {
  children: React.ReactNode;
}

const Paragraph = ({ children }: ChildrenProps) => (
  <Flex
    sx={{
      paddingLeft: 4,
      textAlign: "center",
      flexDirection: "column",
      fontFamily: "body",
      marginX: [0, 0, 90],
      marginBottom: 40
    }}
  >
    {children}
  </Flex>
);

const Heading = ({ children }: ChildrenProps) => (
  <Styled.p
    sx={{
      margin: 0,
      textAlign: "center",
      fontSize: [5, 4, 5],
      variant: "textStyles.heading",
      marginY: 50,
      fontFamily: "body",
      fontWeight: "normal"
    }}
  >
    {children}
  </Styled.p>
);
