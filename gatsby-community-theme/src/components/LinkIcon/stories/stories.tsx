import React from "react";

import { storiesOf } from "@storybook/react";

import { LinkIcon } from "..";
import Video from "./youtube.svg";

storiesOf("LinkIcon", module).add("example", () => {
  return (
    <LinkIcon
      iconUrl={Video}
      linkUrl="https://www.youtube.com/watch?v=xTUK3uhFnlU"
    />
  );
});
