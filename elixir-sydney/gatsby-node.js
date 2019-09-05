const _ = require("lodash");
const path = require("path");

// Generate sourceInstanceName node for file path identification
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent);

    createNodeField({
      name: `sourceInstanceName`,
      node,
      value: fileNode.sourceInstanceName
    });
  }
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `type MemberYaml implements Node @dontinfer {
      id: ID!
      parent: Node!
      children: [Node!]!
      internal: Internal!
      name: String!
      avatarUrl: String!
      meetupUrl: String
      websiteUrl: String
      twitter: String
      company: String
      companyUrl: String
      #talks: [Talk!] @link(by: "frontmatter.talks.speaker", from: "id")
      #eventsOrganised: [Mdx!] @link(by: "frontmatter.organisers", from: "id")
    }`,
    `type SponsorYaml implements Node @dontinfer {
      id: ID!
      parent: Node!
      children: [Node!]!
      internal: Internal!
      name: String!
      websiteUrl: String!
      logoUrl: String!
      twitter: String
      #eventsSponsored: [Mdx!] @link(by: "frontmatter.sponsors", from: "id")
    }`,
    `type LocationYaml implements Node @dontinfer {
      id: ID!
      parent: Node!
      children: [Node!]!
      internal: Internal!
      name: String!
      mapUrl: String!
      address: String!
      instructions: String
      streetAddress: String
      city: String
      latitude: String
      longitude: String
    }`,
    `type SiteYaml implements Node @dontinfer {
      title: String
      nextEventLine: String
      aboutTitle: String
      organisersTitle: String
      sponsorsTitle: String
      footer: Footer
      iconButton: IconButton
      talks: TalksComponent
      headerNav: [Link]
      defaultImage: String
      description: String
      siteUrl: String
      heroEvent: HeroEvent
      paginationButtons: PaginationButtons
      location: LocationYaml @link
    }`,
    `type PaginationButtons {
      previous: String
      next: String
    }`,
    `type HeroEvent {
      subHeading1: String
      subHeading2: String
    }`,
    `type Footer {
      message1: String!
      message2: String
      copyright: String
      iconType: String
      iconKeyword1: String
      iconLink1: String
      iconKeyword2: String
      iconLink2: String
      iconKeyword3: String
      iconLink3: String
    }`,
    `type IconButton {
      buttonHref: String!
      buttonText: String
      buttonImage: String
      buttonIconName: String
      buttonIconPrefix: String
    }`,
    `type TalksComponent {
      title: String!
      email: String!
      line1: String!
      line2: String
    }`,
    `type Link {
      description: String
      href: String
    }`,
    `type Mdx implements Node {
      frontmatter: Frontmatter
    }`,
    `type Frontmatter {
      id: ID!
      parent: Node!
      children: [Node!]!
      internal: Internal!
      path: String
      date: Date @dateformat(formatString: "YYYY-MM-DD")
      time: String
      title: String
      talks: [Talks!]
      sponsors: [SponsorYaml!] @link
      organisers: [MemberYaml!] @link
      location: LocationYaml @link
      description: String
    }`,
    `type Talks {
      speaker: MemberYaml! @link
      title: String
      description: String
      photos: String
      slides: String
      video: String
    }`
  ];
  createTypes(typeDefs);
};

// Logic for creating blog and case study mdx based pages
const eventTemplate = path.resolve(`./src/eventTemplate.tsx`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allMdx(
          filter: {
            fileAbsolutePath: { regex: "/events/" }
            fields: { sourceInstanceName: { eq: "events" } }
          }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              fields {
                sourceInstanceName
              }
              id
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
  ).then(response => {
    if (response.errors) {
      console.error(response.errors);
    }
    return response;
  });

  const events = result.data.allMdx.edges;

  events.forEach(async (event, index) => {
    const previous = index === 0 ? null : events[index - 1].node;
    const next =
      index === events.length - 1 ? null : events[index + 1].node;

    if (event.node.fields.sourceInstanceName === "events") {
      createPage({
        path: event.node.frontmatter.path,
        component: eventTemplate,
        context: {
          id: event.node.id,
          previous,
          next
        }
      });
    }
  });
};
