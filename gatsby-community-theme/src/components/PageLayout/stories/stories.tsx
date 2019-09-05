import { storiesOf } from "@storybook/react";

import React from "react";

import { PageLayout } from "../";
import SiteYamlType from "../../../types/siteYaml"


storiesOf("PageLayout", module).add("example", () => {
  return (
    <PageLayout siteYaml={siteYaml} >
      <div />
    </PageLayout>
  );
});

const siteYaml: SiteYamlType = {
  title: "Elixir Sydney",
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
    buttonHref: "https://www.meetup.com/en-AU/elixir-sydney/events/kznqrpyzfbjb/",
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
  image: "https://photos.google.com/photo/AF1QipMppod5cyNb-eWwmlFOumPYcKkRP6rggMhCO02T",
  description: "Elixir Sydney is a regular meetup where developers meet to talk and learn about all things Elixir.",
  siteUrl: "https://community-design-system.netlify.com"
}