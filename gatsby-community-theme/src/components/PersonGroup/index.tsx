/** @jsx jsx */
import React from "react";
import { Box, Flex, jsx, Styled } from "theme-ui";

import { Avatar } from "../Avatar";

export interface Person {
  avatarUrl: string;
  name: string;
  companyUrl: string;
  company: string;
}

export interface PersonGroupProps {
  title: string;
  people: Person[];
}

export const PersonGroup = ({ title, people }: PersonGroupProps) => (
  <Box>
    <Heading>{title}</Heading>
    {people.map((person, index) => (
      <PersonBox key={index}>
        <Avatar image={person.avatarUrl} />
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
  </Box>
);

interface ChildrenProps {
  children: React.ReactNode;
}

const Heading = ({ children }: ChildrenProps) => (
  <Styled.p
    sx={{
      variant: "textStyles.title",
      margin: 0,
      paddingBottom: [4, 6, 6]
    }}
  >
    {children}
  </Styled.p>
);

const PersonBox = ({ children }: ChildrenProps) => (
  <Flex
    sx={{
      padding: 3
    }}
  >
    {children}
  </Flex>
);

const TextBox = ({ children }: ChildrenProps) => (
  <Flex
    sx={{
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: 4
    }}
  >
    {children}
  </Flex>
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
