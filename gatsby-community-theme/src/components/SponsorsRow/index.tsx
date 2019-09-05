/** @jsx jsx */
import { jsx, Box, Styled, Flex, Container } from "theme-ui";

export interface Sponsor {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  twitter: string;
}

export interface SponsorsProps {
  sponsorsTitle: string;
  sponsors: Sponsor[];
}

export const SponsorsGroup = ({ sponsorsTitle, sponsors }: SponsorsProps) => {
  return (
    <Container>
      <Flex
        sx={{
          width: "100%",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          marginTop: 6
        }}
      >
        <Heading>{sponsorsTitle}</Heading>
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: ["null", "center", "center"],
            flexDirection: ["column", "row", "row"],
            flexWrap: "wrap"
          }}
        >
          {sponsors.map((sponsor: Sponsor, i: number) => (
            <Box key={i} sx={{ minWidth: "33.3%" }}>
              <Styled.a href={sponsor.websiteUrl}>
                <Styled.img
                  src={sponsor.logoUrl}
                  alt={`${sponsor.name}`}
                  sx={{
                    width: [12, 12, 12],
                    margin: 2
                  }}
                />
              </Styled.a>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

interface ChildrenProps {
  children: React.ReactNode;
}

const Heading = ({ children }: ChildrenProps) => (
  <Styled.p
    sx={{
      margin: 0,
      marginBottom: [5, 3, 3],
      variant: "textStyles.body",
      fontSize: 5,
      fontWeight: "body"
    }}
  >
    {children}
  </Styled.p>
);
