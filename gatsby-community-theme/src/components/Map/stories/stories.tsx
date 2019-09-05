import React from "react";

import { storiesOf } from "@storybook/react";

import { Map } from "..";

storiesOf("Map", module).add("example", () => {
  return (
    <Map
      address={"162 Black Spring Rd, High Range NSW 2575"}
      srcUrl={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26339.615428124707!2d150.3128840384951!3d-34.38985738051552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b13bb8ba49d5659%3A0xb4284107746ae47d!2sWombaroo%2C+162+Black+Spring+Rd%2C+High+Range+NSW+2575!5e0!3m2!1sen!2sau!4v1531643689492"
      }
    />
  );
});
