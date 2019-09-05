/** @jsx jsx */
import { jsx, Container, Flex, Styled } from "theme-ui";
import { graphql } from "gatsby";
// @ts-ignore
import About from "../mdxPages/about.mdx";
// @ts-ignore
import CodeOfConduct from "../mdxPages/codeOfConduct.mdx";
import { PageLayout, DefaultHead } from "gatsby-community-theme/src/components";
import { useSiteYaml } from "../hooks/useSiteYaml";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMeetup,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import logo from "../img/elixir-logo.svg";

library.add(faMeetup, faTwitter, faGithub);

export default () => {
  const siteYaml = useSiteYaml();

  return (
    <DefaultHead siteYaml={siteYaml}>
      <PageLayout page="about" siteYaml={siteYaml} logo={logo}>
        <Container sx={{ marginTop: "60px" }}>
          <Flex
            sx={{
              flexDirection: "column",
              paddingX: 5,
              fontSize: [2, 2, 3]
            }}
          >
            <CodeOfConduct />
          </Flex>
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
            organisers {
              name
              avatarUrl
              company
              companyUrl
            }
          }
        }
      }
    }
  }
`;
