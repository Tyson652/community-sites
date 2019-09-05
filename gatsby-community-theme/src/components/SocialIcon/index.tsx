/** @jsx jsx */

import { jsx, Styled } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface SocialIconProps {
  iconType: string;
  iconKeyword: string;
  iconUrl: string;
}

export const SocialIcon = ({
  iconType,
  iconKeyword,
  iconUrl
}: SocialIconProps) => (
  <Styled.a href={iconUrl} target="_blank">
    <FontAwesomeIcon
      // @ts-ignore
      icon={[iconType, iconKeyword]}
      css={{
        color: "#4e2a8e",
        fontSize: 55,
        margin: 20,
        // Hover grow styles
        display: "inline-block",
        verticalAlign: "middle",
        webkitTransform: "perspective(1px) translateZ(0)",
        transform: "perspective(1px) translateZ(0)",
        boxShadow: "0 0 1px rgba(0, 0, 0, 0)",
        webkitTransitionDuration: "0.3s",
        transitionDuration: "0.3s",
        webkitTransitionProperty: "transform",
        transitionProperty: "transform",
        "&:hover": {
          color: "#ac30ff",
          webkitTransform: "scale(1.1)",
          transform: "scale(1.1)"
        }
      }}
    />
  </Styled.a>
);
