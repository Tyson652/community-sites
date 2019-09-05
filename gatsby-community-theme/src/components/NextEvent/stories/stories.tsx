import React from "react";

import { storiesOf } from "@storybook/react";

import { NextEvent } from "..";
import eventImg from "./eventImg.png";

storiesOf("Next Event", module).add("elixir small", () => (
  <NextEvent
    siteYaml={{ pageInformation: { heading1: "test", paragraph1: "test" } }}
    title="test"
    eventImgUrl={eventImg}
    body="test"
  />
));
