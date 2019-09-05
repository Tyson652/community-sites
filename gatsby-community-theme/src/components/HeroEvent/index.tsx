/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui";
import { IconButton } from "../buttons/index";
import SiteYamlType from "../../types/siteYaml";

import { Logo } from "../Logo";

export interface HeroProps {
  heading: string;
  date: string;
  time: string;
  location1: string;
  location2: string;
  children?: React.ReactNode;
  siteYaml: SiteYamlType;
  background: string;
  logoUrl: string;
}

export const HeroEventMeetup = ({
  heading,
  date,
  children,
  siteYaml,
  background,
  logoUrl
}: HeroProps) => {
  const {
    buttonIconName,
    buttonIconPrefix,
    buttonText,
    buttonHref
  } = siteYaml.iconButton;
  const { subHeading1, subHeading2 } = siteYaml.heroEvent
  return (
    <Flex
      sx={{
        variant: "textStyles.heading",
        backgroundColor: "brandDark",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        width: "100vw",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: ["wrap", "nowrap", "nowrap"],
        paddingTop: "70px",
        height: ["100vh", "100vh", "100vh", "100vh", "70vh"],
        minHeight: "550px"
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: ["center", "baseline", "baseline"]
        }}
      >
        <Logo size="large" logoUrl={logoUrl} />
        <Heading>{heading}</Heading>
        <Flex
          sx={{
            flexDirection: "column",
            minHeight: "250px",
            justifyContent: "space-between",
          }}
        >
          <SubHeadingBox>
            <SubHeading position="right" weight="light">
              {subHeading1}
            </SubHeading>
            <SubHeading position="left" weight="body">
              {date}
            </SubHeading>
          </SubHeadingBox>
          <Flex
            sx={{
              justifyContent: ["center", "flex-start", "flex-start"],
              flexDirection: ["column", "row", "row"],
              textAlign: "center"
            }}
          >
            <SubHeading position="null" weight="light">
              {subHeading2}
            </SubHeading>
            <Box>
              <IconButton
                iconName={buttonIconName}
                iconPrefix={buttonIconPrefix}
                text={buttonText}
                eventLink={buttonHref}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      {children}
    </Flex>
  );
};

interface ChildrenProps {
  children: React.ReactNode;
}

const Heading = ({ children }: ChildrenProps) => (
  <Styled.h1
    sx={{
      margin: "auto",
      textAlign: "center",
      fontSize: [6, 9, 9],
      color: "background",
      variant: "textStyles.heading",
      marginY: 3,
      fontWeight: "body"
    }}
  >
    {children}
  </Styled.h1>
);

const SubHeadingBox = ({ children }: ChildrenProps) => (
  <Flex
    sx={{
      flexDirection: ["row", "row", "row"],
      paddingX: 3,
      paddingY: [1, 1, 1]
    }}
  >
    {children}
  </Flex>
);

interface SubHeadingProps {
  children: React.ReactNode;
  position: string;
  weight: string;
}

const SubHeading = ({ children, position, weight }: SubHeadingProps) => (
  <Styled.h2
    sx={{
      color: "background",
      fontSize: [4, 5, 5],
      marginLeft: position === "right" ? "auto" : "0",
      marginRight: position === "left" ? "auto" : "0",
      marginY: position === ("right" || "left") ? "0" : "auto",
      font: "heading",
      fontWeight: weight,
      paddingX: 3
    }}
  >
    {children}
  </Styled.h2>
);
