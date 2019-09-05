/** @jsx jsx */
import { jsx, Box, Flex, Styled, Container } from "theme-ui";

import { Avatar } from "../Avatar";

import { Person } from "../PersonGroup";

export interface OrganisersRowProps {
  organisersTitle: string;
  people: Person[];
}

export const OrganisersRow = ({
  organisersTitle,
  people
}: OrganisersRowProps) => {
  return (
    <Container>
      <Box sx={{ width: "100%", marginTop: [5, 0, 0] }}>
        <Flex
          sx={{
            width: "100%",
            flexDirection: "column"
          }}
        >
          <Heading>{organisersTitle} </Heading>
          <Flex
            sx={{
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {people.map((person: Person, i: number) => (
              <PersonBox key={i}>
                <Avatar size="small" image={person.avatarUrl} />
                <TextBox>
                  <Name>{person.name}</Name>
                  <Description>
                    <Styled.a href={person.companyUrl} target="_blank">
                      {person.company}
                    </Styled.a>
                  </Description>
                </TextBox>
              </PersonBox>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

interface ChildrenProps {
  children: React.ReactNode;
}

const PersonBox = ({ children }: ChildrenProps) => (
  <Flex
    sx={{
      padding: 3,
      alignItems: "center",
      width: "33.3%",
      justifyContent: ["flex-start", "center", "center"],
      minWidth: 250
    }}
  >
    {children}
  </Flex>
);

const TextBox = ({ children }: ChildrenProps) => (
  <Flex
    sx={{
      paddingLeft: 4,
      flexDirection: "column"
    }}
  >
    {children}
  </Flex>
);

const Heading = ({ children }: ChildrenProps) => (
  <Styled.p
    sx={{
      variant: "textStyles.title",
      margin: 0,
      paddingBottom: 6,
      paddingTop: 5,
      fontSize: 5,
      fontWeight: "body",
      textAlign: "center"
    }}
  >
    {children}
  </Styled.p>
);

const Name = ({ children }: ChildrenProps) => (
  <Styled.p
    sx={{
      margin: 0,
      variant: "textStyles.modern",
      color: "mutedText",
      fontSize: [3, 3, 3]
    }}
  >
    {children}
  </Styled.p>
);

const Description = ({ children }: ChildrenProps) => (
  <Styled.p
    sx={{
      margin: 0,
      fontFamily: "modern",
      fontSize: [1, 2, 2]
    }}
  >
    {children}
  </Styled.p>
);
