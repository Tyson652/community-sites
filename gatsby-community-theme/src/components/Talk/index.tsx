/** @jsx jsx */
import { Flex, jsx, Styled, Box } from "theme-ui";
import { ReactNode, Children } from "react";

import { Avatar } from "../Avatar";
import { LinkIcon } from "../LinkIcon";

import Slides from "./slideshow.svg";
import Video from "./youtube.svg";

export interface Speaker {
  name: string;
  avatarUrl: string;
}

export interface TalkProps {
  title: string;
  speaker: Speaker;
  description: string;
  videoUrl?: string;
  slidesUrl?: string;
}

export const Talk = ({
  title,
  speaker,
  description,
  videoUrl,
  slidesUrl
}: TalkProps) => {
  return (
    <TalkBox>
      <Avatar size="large" image={speaker.avatarUrl} />
      <TextBox>
        <Speaker>{speaker.name}</Speaker>
        <Title>{title}</Title>
        <Styled.p sx={{ fontSize: 2, paddingTop: 2, margin: 0 }}>
          {description}
        </Styled.p>
        <Flex>
          {videoUrl && <LinkIcon iconUrl={Video} linkUrl={videoUrl} />}
          {slidesUrl && <LinkIcon iconUrl={Slides} linkUrl={slidesUrl} />}
        </Flex>
      </TextBox>
      <BorderLine />
    </TalkBox>
  );
};

interface ChildrenProps {
  children: React.ReactNode;
}

const TalkBox = ({ children }: ChildrenProps) => (
  <Flex
    sx={{
      flexDirection: ["column", "row", "row"],
      padding: 4
    }}
  >
    {children}
  </Flex>
);

const BorderLine = () => (
  <Box
    sx={{
      width: 8,
      borderTop: [
        theme => `2px solid ${theme.colors.mutedText}`,
        "none",
        "none"
      ],
      marginTop: 5
    }}
  />
);

const Speaker = ({ children }: ChildrenProps) => (
  <Styled.p
    sx={{
      margin: 0,
      color: "mutedText",
      fontSize: 4,
      lineHeight: "tight"
    }}
  >
    {children}
  </Styled.p>
);

const Title = ({ children }: ChildrenProps) => (
  <Styled.p
    sx={{
      margin: 0,
      color: "mutedText",
      fontFamily: "modern",
      fontSize: 2,
      fontWeight: "light"
    }}
  >
    {children}
  </Styled.p>
);

const TextBox = ({ children }: ChildrenProps) => (
  <Flex
    sx={{
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: [0, 5, 5],
      marginLeft: [0, 5, 5],
      paddingTop: [3, 0, 0],
      borderLeft: [
        "none",
        theme => `2px solid ${theme.colors.mutedText}`,
        theme => `2px solid ${theme.colors.mutedText}`
      ]
    }}
  >
    {children}
  </Flex>
);
