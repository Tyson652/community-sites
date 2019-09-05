/** @jsx jsx */
import { jsx, Box, Styled, Flex, Container } from "theme-ui";

import { Talk, TalkProps } from "../Talk/index";
import SiteYamlType from "../../types/siteYaml";

export interface TalksProps {
  talks: TalkProps[];
  siteYaml: SiteYamlType;
}

export const TalksList = ({ talks, siteYaml }: TalksProps) => {
  const { title, line1, line2, email } = siteYaml.talks;
  return (
    <Flex
      sx={{
        backgroundColor: "lightness",
        justifyContent: "center"
      }}
    >
      <Container sx={{ justifyContent: "center" }}>
        <Box sx={{ marginTop: 5 }}>
          <Heading>{title}</Heading>
          <Box>
            {talks &&
              talks.map((talk, index) => <Talk key={index} {...talk} />)}
            <EmailActionBox>
              <Title>{line1}</Title>
              <SecondaryTitle>
                {line2}
                <Styled.a
                  sx={{
                    textDecoration: "none",
                    color: "mutedText",
                    fontWeight: "bold"
                  }}
                  href={`mailto:${email}`}
                >
                  {email}
                </Styled.a>
              </SecondaryTitle>
            </EmailActionBox>
          </Box>
        </Box>
      </Container>
    </Flex>
  );
};

interface ChildrenProps {
  children: React.ReactNode;
}

const Heading = ({ children }: ChildrenProps) => (
  <Styled.p
    sx={{
      margin: 0,
      variant: "textStyles.body",
      textAlign: "center",
      fontSize: 5,
      fontWeight: "body"
    }}
  >
    {children}
  </Styled.p>
);

const EmailActionBox = ({ children }: ChildrenProps) => (
  <Flex
    sx={{
      flexDirection: "column",
      alignItems: "center",
      paddingX: 4,
      paddingY: 7,
      textAlign: "center",
      marginTop: 4
    }}
  >
    {children}
  </Flex>
);

const Title = ({ children }: ChildrenProps) => (
  <Styled.p
    sx={{
      margin: 0,
      variant: "textStyles.modern",
      color: "mutedText",
      fontSize: 4,
      fontWeight: "bold"
    }}
  >
    {children}
  </Styled.p>
);

const SecondaryTitle = ({ children }: ChildrenProps) => (
  <Styled.p
    sx={{
      margin: 0,
      fontFamily: "modern",
      color: "mutedText",
      fontSize: 2
    }}
  >
    {children}
  </Styled.p>
);
