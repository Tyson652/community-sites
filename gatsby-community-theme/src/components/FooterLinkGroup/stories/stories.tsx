import React from "react";

import { storiesOf } from "@storybook/react";

import { FooterComplete } from "..";

storiesOf("FooterLinkGroup", module).add("example", () => {
  return <FooterComplete />;
});
