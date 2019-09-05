import React from "react";

import { storiesOf } from "@storybook/react";

import { Quote } from "..";

storiesOf("Quote", module).add("example", () => {
  return (
    <Quote
      name="Tyson"
      title="Employee"
      company="Alembic"
      quote="Don't cry because it's over, smile because it happened."
    />
  );
});
