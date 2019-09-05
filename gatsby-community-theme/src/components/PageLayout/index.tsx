/** @jsx jsx */
import { useState, ReactNode } from "react";
import { jsx, Layout, Container, Box, Styled } from "theme-ui";
import { Global, css } from "@emotion/core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../Footer";
import { HeaderNav } from "../HeaderNav";
import SiteYamlType from "../../types/siteYaml";

library.add(faCheckSquare, faCoffee);

export interface PageLayoutProps {
  children: ReactNode;
  siteYaml: SiteYamlType;
  logo: string;
  page: string;
}

export const PageLayout = ({
  children,
  siteYaml,
  page,
  logo,
}: PageLayoutProps) => {
  const [position, setPosition] = useState("null");

  const togglePageFix = () => {
    position === "null" ? setPosition("fixed") : setPosition("null");

    return position;
  };
  return (
    <Styled.root>
      <Layout sx={{ position, width: "100vw" }}>
        <Global
          styles={css`
            body {
              margin: 0;
            }
          `}
        />
        <Container
          sx={{
            /*paddingX: [0, 4, 5],*/

            position: "fixed",
            maxWidth: "100%",
            padding: "0px",
            zIndex: "100"
          }}
        >
          <HeaderNav
            page={page}
            logo={logo}
            togglePageFix={togglePageFix}
            siteYaml={siteYaml}
          />
        </Container>
        {children}
        <Box sx={{ flexGrow: 1 }} />
        <Footer siteYaml={siteYaml} />
      </Layout>
    </Styled.root>
  );
};
