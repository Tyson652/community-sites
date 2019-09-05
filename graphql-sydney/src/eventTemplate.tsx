/** @jsx jsx */
import { jsx, Container, Styled, Flex, Box } from "theme-ui";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useSiteYaml } from "./hooks/useSiteYaml";
import { library } from "@fortawesome/fontawesome-svg-core";
import logo from "./img/graphql-logo.svg";
import {
  faMeetup,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import {
  PageLayout,
  SponsorsGroup,
  TalksList,
  OrganisersRow,
  SlideShow,
  PaginationButtons,
  Head
} from "gatsby-community-theme/src/components";

library.add(faMeetup, faTwitter, faGithub, faChevronLeft, faChevronRight);

export default ({ data, pageContext }) => {
  const { body } = data.mdx;
  const frontmatter = data.mdx.frontmatter;
  const siteYaml = useSiteYaml();

  return (
    <Head siteYaml={siteYaml} frontmatter={frontmatter}>
      <PageLayout logo={logo} page="events" siteYaml={siteYaml}>
        <Container sx={{ marginTop: 70 }}>
          <PaginationButtons pageContext={pageContext} siteYaml={siteYaml} />
          <SlideShow imageUrls={frontmatter.images} siteYaml={siteYaml} />
          <Flex
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Styled.h1
              sx={{
                fontSize: [30, 40, 47],
                marginY: 6
              }}
            >
              {frontmatter.title}
            </Styled.h1>
            <Flex
              sx={{
                flexDirection: "column",
                width: ["100%", "68%", "68%"]
              }}
            >
              <Styled.h4 sx={{ marginTop: 3 }}>{frontmatter.date}</Styled.h4>
              <MDXRenderer components={null} scope={null}>
                {body}
              </MDXRenderer>
            </Flex>
          </Flex>
        </Container>
        <TalksList talks={frontmatter.talks} siteYaml={siteYaml} />
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
      </PageLayout>
    </Head>
  );
};

export const pageQuery = graphql`
  query EventQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        path
        date(formatString: "MMMM YYYY")
        title
        description
        location {
          name
          mapUrl
          address
          instructions
          streetAddress
          city
          latitude
          longitude
        }
        mainImage {
          publicURL
          childImageSharp {
            fluid {
              src
            }
          }
        }
        images {
          publicURL
          childImageSharp {
            fluid {
              src
            }
          }
        }
        organisers {
          name
          avatarUrl
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
    }
  }
`;
