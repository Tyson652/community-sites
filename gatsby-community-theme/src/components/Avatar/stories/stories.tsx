import React from "react";

import { storiesOf } from "@storybook/react";

import { Avatar } from "..";
import jamesImage from "./james.jpg";
import paulImage from "./paul.jpg";

storiesOf("Avatar", module)
  .add("large", () => {
    return (
      <>
        <Avatar size="large" image={jamesImage} />
        <Avatar size="large" image={paulImage} />
      </>
    );
  })
  .add("small", () => {
    return (
      <>
        <Avatar size="small" image={jamesImage} />
        <Avatar size="small" image={paulImage} />
      </>
    );
  });
