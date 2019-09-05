import React from "react";

import { storiesOf } from "@storybook/react";

import { HeroEventMeetup } from "..";
import SiteYamlType from "../../../types/siteYaml";
import background from "./background.jpeg";

storiesOf("HeroEventMeetup", module).add("example", () => {
  return (
    <HeroEventMeetup
      heading="Elixir Sydney"
      date="2018-12-06"
      time="6:00 - 8:30 PM"
      location1="Expert360"
      location2="Level 3, 14 Martin Place NSW 2000"
      siteYaml={siteYaml}
      background={background}
   
    />
  );
});

const siteYaml: SiteYamlType = {
  title: "Elixir Sydney",
  logo: "https://www.varvet.com/images/elixir-logo.svg",
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
