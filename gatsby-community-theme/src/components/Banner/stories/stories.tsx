import React from "react";

import { storiesOf } from "@storybook/react";

import { Banner } from "..";

storiesOf("Banner", module).add("examples", () => {
  return (
    <>
      <Banner backgroundImageUrl="https://pbs.twimg.com/media/EBWx40nUwAANM9G?format=jpg&name=medium" />
    </>
  );
});
