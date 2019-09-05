/** @jsx jsx */
import { jsx, Container, Styled, Box } from "theme-ui";
import { graphql } from "gatsby";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMeetup,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import {
  NextEvent,
  PageLayout,
  SponsorsGroup,
  HeroEventMeetup,
  TalksList,
  OrganisersRow,
  MapDescription,
  Banner,
  PageInformation,
  DefaultHead
} from "gatsby-community-theme/src/components";

import { useSiteYaml } from "../hooks/useSiteYaml";
import background from "../img/background.jpeg";
import logo from "../img/elixir-logo.svg";
import eventImg from "../img/eventImg.png";

library.add(faMeetup, faTwitter, faGithub);

export default ({ data }: any) => {
  const { body } = data.allMdx.edges[0].node;
  const frontmatter = data.allMdx.edges[0].node.frontmatter;
  const { name, address, mapUrl, instructions } = frontmatter.location;
  const siteYaml = useSiteYaml();
  const { heading1, paragraph1 } = siteYaml.pageInformation;
  console.log(frontmatter)

  return (
    <DefaultHead siteYaml={siteYaml}>
      <PageLayout logo={logo} page="home" siteYaml={siteYaml}>
        <HeroEventMeetup
          heading={frontmatter.title}
          date={frontmatter.date}
          time={frontmatter.time}
          location1={name}
          location2={address}
          siteYaml={siteYaml}
          background={background}
          logoUrl={logo}
        />
        <PageInformation heading1={heading1} paragraph1={paragraph1} />
        <NextEvent
          siteYaml={siteYaml}
          title={frontmatter.title}
          eventImgUrl={eventImg}
          body={body}
        />

        <TalksList talks={frontmatter.talks} siteYaml={siteYaml} />
        <MapDescription
          address={address}
          mapUrl={mapUrl}
          name={name}
          instructions={instructions}
        />
        <Banner backgroundImageUrl="https://camunda.com/img/events/meetup-example.jpg" />
        <Container>
          <Box sx={{ marginTop: 5 }}>
            <SponsorsGroup
              sponsors={frontmatter.sponsors}
              sponsorsTitle={siteYaml.sponsorsTitle}
            />
            <OrganisersRow
              people={frontmatter.organisers}
              organisersTitle={siteYaml.organisersTitle}
            />
          </Box>
        </Container>
      </PageLayout>
    </DefaultHead>
  );
};

export const pageQuery = graphql`
  {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { date: { ne: null } } }
      limit: 1
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            time
            title
            location {
              name
              mapUrl
              address
              instructions
            }
            organisers {
              name
              avatarUrl
              company
              companyUrl
            }
            sponsors {
              name
              logoUrl
              websiteUrl
            }
            talks {
              speaker {
                name
                avatarUrl
              }
              title
              description
              photos
              slides
              video
            }
          }
          body
        }
      }
    }
  }
`;
