import React from "react";

import { storiesOf } from "@storybook/react";

import { MapDescription } from "..";

storiesOf("MapDescription", module).add("example", () => {
  return (
    <MapDescription
      name={"Expert360"}
      address={"Level 3, 14 Martin Place NSW 2000"}
      instructions={
        "Ring or Text Josh on 0415 366 251, if you're late, lost or can't get in. We'll send someone down to get you."
      }
      mapUrl={
        "https://www.google.com/maps/embed/v1/place?q=Level%203%2C%2014%20Martin%20Place%20NSW%202000&key=AIzaSyD7OXXbf-H8ho7dJuChVGkAhY-ib2vMafc"
      }
    />
  );
});
