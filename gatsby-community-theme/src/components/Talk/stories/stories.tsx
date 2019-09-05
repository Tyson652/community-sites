import React from "react";

import { storiesOf } from "@storybook/react";

import { Talk, TalkProps } from "..";

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

storiesOf("Talk", module)
  .add("basic", () => <Talk {...fullTalk} />)
  .add("slide icon only", () => (
    <Talk
      {...noResourcesTalk}
      slidesUrl="https://speakerdeck.com/joshprice/elixir-performance-tuning"
    />
  ))
  .add("video icon only", () => (
    <Talk
      {...noResourcesTalk}
      videoUrl="https://www.youtube.com/watch?v=xTUK3uhFnlU"
    />
  ))
  .add("no icons", () => <Talk {...noResourcesTalk} />);
