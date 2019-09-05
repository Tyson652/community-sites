/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui";
import SiteYamlType from "../../types/siteYaml";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { MDXRenderer } from "gatsby-plugin-mdx";

export interface EventCardProps {
  title: string;
  slug: string;
  date: string;
  body: React.ReactNode;
}

export interface EventCardProps {
  title: string;
  slug: string;
  date: string;
  body: React.ReactNode;
  image: string;
  description: string;
  siteYaml: SiteYamlType;
}

export const EventCard = ({
  title,
  slug,
  date,
  body,
  image,
  description,
  siteYaml
}: EventCardProps) => {
  if (image === "null") {
    image = siteYaml.defaultImage;
  }
  return (
    <Styled.a
      sx={{
        textDecoration: "none"
      }}
      href={slug}
    >
      <Flex
        sx={{
          flexDirection: "column",
          width: ["260px", "400px", "400px"],
          variant: "boxShadowStyles.darkShadow",
          "&:hover": {
            transform: "translateY(-3px)",
            transition: "0.3s",
            variant: "boxShadowStyles.hoverShadow"
          },
          "&:not(:hover)": { transform: "translateY(3px)", transition: "0.3s" }
        }}
      >
        <Styled.img
          src={image}
          sx={{
            width: "100%",
            height: 12,
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Box sx={{ padding: 4 }}>
          <Styled.p sx={{ marginY: 1, color: "text" }}>{title}</Styled.p>
          <Styled.p
            sx={{ marginTop: 0, marginBottom: 2, fontSize: 2, color: "text" }}
          >
            {description}
          </Styled.p>
          <Styled.p
            sx={{
              marginTop: 4,
              marginBottom: 2,
              fontSize: 2,
              fontWeight: "bold",
              color: "#00ace6"
            }}
          >
            Show More{" "}
            <FontAwesomeIcon
              icon={["fas", "chevron-right"]}
              css={{ color: "#ff9900" }}
            />
          </Styled.p>
        </Box>
      </Flex>
    </Styled.a>
  );
};

