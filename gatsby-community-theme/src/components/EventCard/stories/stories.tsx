import React from "react";

import { storiesOf } from "@storybook/react";

import { EventCard } from "..";

storiesOf("EventCard", module).add("example", () => {
  return (
    <EventCard
      title="Elixir Sydney"
      slug="https://www.meetup.com/elixir-sydney/events/qfdzcryzlbkb/"
      date="December 2018"
      body={
        <>
          <p>
            Currently looking for talks, let us know if you'd like to present a
            topic.
          </p>

          <p>
            Beginners are more than welcome, and this a great chance to get
            started and get help from more experienced Elixir developers.
          </p>

          <p>
            Thanks to Expert360 for hosting us and providing drinks, thanks
            Alembic for providing the food.
          </p>

          <p>See you there,</p>

          <p>Josh, James, and Paul</p>
        </>
      }
    />
  );
});
