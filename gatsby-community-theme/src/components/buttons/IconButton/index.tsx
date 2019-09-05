/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";

export interface IconButtonProps {
  eventLink: string;
  iconName: IconName;
  iconPrefix: IconPrefix;
  text: string;
  iconRotate?: number;
}

export const IconButton = ({
  eventLink,
  iconName,
  iconPrefix,
  text,
  iconRotate
}: IconButtonProps) => {
  return (
    <Styled.a
      href={eventLink}
      target="_blank"
      sx={{
        variant: ["buttonStyles.signUp", "linkStyles.buttonDefault"],
        display: "inline-block",
        "&:hover": {
          backgroundColor: "elixirLight"
        },
        "&:active": {
          backgroundColor: "elixirLight",
          transform: "translateY(4px)"
        }
      }}
    >
      <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
        <FontAwesomeIcon
          //TODO Temporary style tag - Need to incorporate FontAwesome into Theme-UI
          style={{
            margin: "14px 16px 14px -5px",
            fontSize: "36px",
            transform: `rotate(${iconRotate}deg)`
          }}
          icon={[iconPrefix, iconName]}
        />
        <Styled.p>{text}</Styled.p>
      </Flex>
    </Styled.a>
  );
};
