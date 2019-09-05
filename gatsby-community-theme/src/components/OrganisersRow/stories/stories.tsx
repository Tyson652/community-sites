import React from "react";

import { storiesOf } from "@storybook/react";

import { OrganisersRow } from "../../OrganisersRow";

storiesOf("OrganisersRow", module).add("example", () => {
  return (
    <OrganisersRow
      organisersTitle="Organisers"
      people={[
        {
          name: "Josh Price",
          avatarUrl:
            "https://a248.e.akamai.net/secure.meetupstatic.com/photos/member/4/5/c/e/member_12197870.jpeg",
          company: "Alembic",
          companyUrl: "https://alembic.com.au/"
        }
      ]}
    />
  );
});
