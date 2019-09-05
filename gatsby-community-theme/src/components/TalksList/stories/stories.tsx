import React from "react";

import { storiesOf } from "@storybook/react";

import { TalksList } from "../index";
import { TalkProps } from "../../Talk/index";
import SiteYamlType from "../../../types/siteYaml"

import jamesImage from "./james.jpg";
import paulImage from "./paul.jpg";

const fullTalk: TalkProps = {
  title: "Fun with TypeScript",
  speaker: {
    name: "James Sadler",
    avatarUrl: jamesImage
  },
  description:
    "In a format we've blatantly stolen borrowed from the end of year Cocoaheads trivia festival, we'll be throwing random questions at you which will stretch your noodles and maybe even teach you some interesting facts about Elixir or Erlang. Or maybe just programming in general.",
  videoUrl: "https://www.youtube.com/watch?v=xTUK3uhFnlU",
  slidesUrl: "https://speakerdeck.com/joshprice/elixir-performance-tuning"
};

const noResourcesTalk: TalkProps = {
  title: "Fun with TypeScript",
  speaker: {
    name: "Paul Fioravanti",
    avatarUrl: paulImage
  },
  description:
    "In a format we've blatantly stolen borrowed from the end of year Cocoaheads trivia festival, we'll be throwing random questions at you which will stretch your noodles and maybe even teach you some interesting facts about Elixir or Erlang. Or maybe just programming in general."
};

storiesOf("Talks", module)
  .add("One talk", () => (
    <TalksList
      talks={[fullTalk]}
      siteYaml={siteYaml}
    />
  ))
  .add("multiple talks", () => (
    <TalksList
      talks={[fullTalk, noResourcesTalk]}
      siteYaml={siteYaml}
    />
  ));

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
    buttonImage: "meetup.svg"
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