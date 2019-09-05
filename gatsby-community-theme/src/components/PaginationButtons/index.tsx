/** @jsx jsx */
import { Flex, jsx, Styled, Box } from "theme-ui";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SiteYamlType from "../../types/siteYaml";

export interface PaginationButtonsProps {
  pageContext: any;
  siteYaml: SiteYamlType;
}

export const PaginationButtons = ({
  pageContext,
  siteYaml
}: PaginationButtonsProps) => {
  const { previous, next } = pageContext;
  const displayPrevious = previous === null ? "none" : "inline-block";
  const previousPath = previous === null ? "none" : previous.frontmatter.path;
  const displayNext = next === null ? "none" : "inline-block";
  const nextPath = next === null ? "none" : next.frontmatter.path;

  return (
    <Flex sx={{ justifyContent: "space-between" }}>
      <Link
        sx={{
          justifyContent: "flex-start",
          display: "inline-block",
          variant: "linkStyles.buttonDefault",
          color: "text"
        }}
        to={previousPath}
      >
        <Box sx={{ display: displayPrevious }}>
          <Styled.p
            sx={{
              fontSize: 4,
              alignItems: "center",
              display: "flex"
            }}
          >
            <FontAwesomeIcon
              icon={["fas", "chevron-left"]}
              css={{ color: "#ff9900", fontSize: 40 }}
            />
            {siteYaml.paginationButtons.previous}
          </Styled.p>
        </Box>
      </Link>
      <Link
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
          display: displayNext,
          variant: "linkStyles.buttonDefault",
          color: "text"
        }}
        to={nextPath}
      >
        <Styled.p
          sx={{
            fontSize: 4,
            alignItems: "center",
            display: "flex"
          }}
        >
          {siteYaml.paginationButtons.next}
          <FontAwesomeIcon
            icon={["fas", "chevron-right"]}
            css={{ color: "#ff9900", fontSize: 40 }}
          />
        </Styled.p>
      </Link>
    </Flex>
  );
};
