/** @jsx jsx */
import { jsx, Container, Flex, Styled, Box } from "theme-ui";
import { graphql } from "gatsby";
import { useSiteYaml } from "../hooks/useSiteYaml";
import {
  PageLayout,
  EventCard,
  DefaultHead
} from "gatsby-community-theme/src/components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMeetup,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/elixir-logo.svg";

library.add(faMeetup, faChevronRight, faTwitter, faGithub);

export interface Event {
  node: {
    frontmatter: {
      title: string;
      date: string;
      path: string;
      description: string;
      mainImage: {
        publicURL: string;
        childImageSharp: {
          fluid: {
            src: string;
          };
        };
      };
    };
    body: string;
  };
}

export default ({ data }: any) => {
  const siteYaml = useSiteYaml();

  return (
    <DefaultHead siteYaml={siteYaml}>
      <PageLayout page="events" siteYaml={siteYaml} logo={logo}>
        <Container sx={{ marginTop: "60px" }}>
          <Styled.h1
            sx={{
              marginX: [5, 5, 5],
              marginY: [5, 5, 5],
              textAlign: "center",
              fontWeight: "body"
            }}
          >
            {siteYaml.eventsTitle}
          </Styled.h1>
          <Flex
            sx={{
              flexWrap: ["nowrap", "wrap", "wrap"],
              flexDirection: ["column", "column", "row"],
              justifyContent: "center",
              alignItems: 'center',
            }}
          >
            {data.allMdx.edges.map((event: Event, index: number) => {
              let image = event.node.frontmatter.mainImage
                ? event.node.frontmatter.mainImage.childImageSharp.fluid.src
                : "null";
              if (event.node.frontmatter.path === "/") {
                return undefined;
              }

              return (
                <Box sx={{ padding: 4 }}>
                  <EventCard
                    // key={event.node.frontmatter.path}
                    key={index}
                    title={event.node.frontmatter.title}
                    date={event.node.frontmatter.date}
                    description={event.node.frontmatter.description}
                    slug={event.node.frontmatter.path}
                    body={event.node.body}
                    image={image}
                    siteYaml={siteYaml}
                  />
                </Box>
              );
            })}
          </Flex>
        </Container>
      </PageLayout>
    </DefaultHead>
  );
};

export const pageQuery = graphql`
  {
    allMdx(
      filter: { frontmatter: { path: { regex: "/events/" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          body
          frontmatter {
            title
            path
            date(formatString: "MMMM YYYY")
            description
            mainImage {
              publicURL
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
