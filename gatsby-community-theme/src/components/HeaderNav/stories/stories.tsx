import React from "react";

import { storiesOf } from "@storybook/react";

import { HeaderNav } from "..";
import SiteYamlType from "../../../types/siteYaml";

storiesOf("HeaderNav", module).add("example", () => {
  return (
    <HeaderNav
      page="storybook"
      siteYaml={siteYaml}
      togglePageFix={() => "fixed"}
    />
  );
});

const siteYaml: SiteYamlType = {
  pageInformation: {
    heading1: "Heading",
    paragraph1: "Paragraph"
  },
  title: "Elixir Sydney",
  logo: "test",
  indexByLine: "Next Meetup:",
  aboutTitle: "About",
  eventsTitle: "Events",
  organisersTitle: "Organisers",
  sponsorsTitle: "Sponsors",
  footer: {
    message1: "Interested in Elixir?",
    message2: "Join our Meetup today!",
    copyright: "Copyright \u00A9 Elixir Sydney, powered by Gatsby & Theme UI."
  },
  meetupButton: {
    buttonText: "Sign up on Meetup",
    buttonHref:
      "https://www.meetup.com/en-AU/elixir-sydney/events/kznqrpyzfbjb/",
    buttonImage: "meetup.svg",
    buttonIconName: "meetup",
    buttonIconPrefix: "fab"
  },
  talks: {
    title: "Talks",
    email: "elixirsydney@gmail.com",
    line1: "Submit a talk proposal!",
    line2: "Send submissions to "
  },
  headerNav: [
    {
      description: "Home",
      href: "/"
    },
    {
      description: "Events",
      href: "/events"
    },
    {
      description: "About",
      href: "/about"
    }
  ],
  // Default Props for unfurling
  image:
    "https://photos.google.com/photo/AF1QipMppod5cyNb-eWwmlFOumPYcKkRP6rggMhCO02T",
  description:
    "Elixir Sydney is a regular meetup where developers meet to talk and learn about all things Elixir.",
  siteUrl: "https://community-design-system.netlify.com"
};
