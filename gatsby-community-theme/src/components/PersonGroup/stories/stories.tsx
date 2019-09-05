import React from "react";

import { storiesOf } from "@storybook/react";

import { Person, PersonGroup } from "..";
import jamesImage from "./james.jpg";
import paulImage from "./paul.jpg";

const people: Person[] = [
  {
    name: "James Sadler",
    avatarUrl: jamesImage,
    company: "Alembic",
    companyUrl: "https://alembic.com.au"
  },
  {
    name: "Paul Fioravanti",
    avatarUrl: paulImage,
    company: "Alembic",
    companyUrl: "https://alembic.com.au"
  }
];

storiesOf("PersonGroup", module).add("example", () => {
  return <PersonGroup title="Some people" people={people} />;
});
