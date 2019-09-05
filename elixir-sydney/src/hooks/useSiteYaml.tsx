import { useStaticQuery, graphql } from "gatsby";

export const useSiteYaml = () => {
  const { allSiteYaml } = useStaticQuery(
    graphql`
      query SiteYaml {
        allSiteYaml {
          edges {
            node {
              title
              logo
              nextEventLine
              aboutTitle
              eventsTitle
              organisersTitle
              sponsorsTitle
              description
              defaultImage
              siteUrl
              pageInformation {
                heading1
                paragraph1
              }
              iconButton {
                buttonHref
                buttonImage
                buttonText
                buttonIconName
                buttonIconPrefix
              }
              footer {
                copyright
                message1
                message2
                iconType
                iconKeyword1
                iconLink1
                iconKeyword2
                iconLink2
                iconKeyword3
                iconLink3
              }
              talks {
                title
                email
                line1
                line2
              }
              headerNav {
                description
                href
              }
              heroEvent {
                subHeading1
                subHeading2
              }
              paginationButtons {
                previous
                next
              }
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
            }
          }
        }
      }
    `
  );
  return allSiteYaml.edges[0].node;
};
