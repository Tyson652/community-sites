/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui";
import SiteYamlType from "../../types/siteYaml";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconButton } from "../buttons/index";
import { SocialIcon } from "../SocialIcon";

export interface FooterProps {
  siteYaml: SiteYamlType;
}

export const Footer = ({ siteYaml }: FooterProps) => {
  const { copyright } = siteYaml.footer;
  return (
    <Flex
      sx={{
        width: "100%",
        height: [580, 650, 650],
        alignItems: "flex-end",
        position: "relative"
      }}
    >
      <Flex
        sx={{
          width: "100%",
          height: [580, 650, 650],
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 5,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Flex
          sx={{
            width: [300, 340, 360],
            height: [300, 340, 360],
            backgroundColor: "background",
            variant: "boxShadowStyles.darkerShadow",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FooterMessage siteYaml={siteYaml} />
        </Flex>
      </Flex>
      <Flex
        sx={{
          width: "100%",
          height: 350,
          clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 30%)",
          background: (theme: any) =>
            `linear-gradient(180deg,
            ${theme.colors.headerOpaque}, ${theme.colors.brandDark})`,
          alignItems: "flex-end"
        }}
      >
        <Flex
          sx={{
            color: "background",
            width: "100%",
            height: ["38%", "38%", "38%"],
            justifyContent: "center"
          }}
        >
          <Flex sx={{ flexDirection: "column", textAlign: "center" }}>
            <Styled.p sx={{ fontSize: 4, marginBottom: 0 }}>
              {siteYaml.title}
            </Styled.p>
            <Styled.p sx={{ fontSize: 2 }}>{copyright}</Styled.p>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

interface FooterMessageProps {
  siteYaml: SiteYamlType;
}

const FooterMessage = ({ siteYaml }: FooterMessageProps) => {
  const { message1, message2, iconType, iconKeyword1, iconLink1, iconKeyword2, iconLink2, iconKeyword3, iconLink3 } = siteYaml.footer;
  return (
    <Flex
      sx={{
        flexDirection: "column",
        textAlign: "center"
      }}
    >
      <Styled.p
        sx={{ fontSize: 4, marginY: 0, fontWeight: "bold", paddingX: 6 }}
      >
        {message1}
      </Styled.p>
      <Styled.p
        sx={{
          fontSize: 4,
          marginTop: 2,
          marginBottom: 4,
          fontWeight: "bold",
          paddingX: 6
        }}
      >
        {message2}
      </Styled.p>
      <Box>
        <SocialIcon
          iconType={iconType}
          iconKeyword={iconKeyword1}
          iconUrl={iconLink1}
        />
        <SocialIcon
          iconType={iconType}
          iconKeyword={iconKeyword2}
          iconUrl={iconLink2}
        />
        <SocialIcon
          iconType={iconType}
          iconKeyword={iconKeyword3}
          iconUrl={iconLink3}
        />
      </Box>
    </Flex>
  );
};
