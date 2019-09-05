import React from "react";

import { storiesOf } from "@storybook/react";

import { IconButton } from "../index";

storiesOf("Buttons/IconButton", module)
  .add("Meetup Button", () => (
    <IconButton
      iconName="meetup"
      iconPrefix="fab"
      eventLink="https://www.meetup.com/elixir-sydney/events/qfdzcryzlbkb/"
      text="Sign up on Meetup"
    />
  ))
  .add("Buy Tickets button", () => (
    <IconButton
      iconName="ticket-alt"
      iconPrefix="fas"
      eventLink="www.google.com"
      text="Buy Tickets"
      iconRotate={-30}
    />
  ));
