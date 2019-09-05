/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui";

export interface MapProps {
  srcUrl: string;
  address: string;
}

export const Map = ({ srcUrl, address }: MapProps) => (
    <Flex
      sx={{
        variant: "boxShadowStyles.lightShadow",
        minWidth: [13, 13, 13],
        maxWidth: [13, 13, 13],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: "background"
      }}
    >
      <Box
        as="iframe"
        title="iframe-map"
        src={srcUrl}
        frameBorder="0"
        allowFullScreen={true}
        sx={{
          height: [13, 13, 13],
          width: [13, 13, 13]
        }}
      />
      <Styled.p
        sx={{
          margin: 0,
          fontSize: 1,
          fontWeight: "heading",
          textAlign: "center",
          color: "mutedText",
          paddingY: 4,
          fontFamily: "modern"
        }}
      >
        {address}
      </Styled.p>
    </Flex>
);
