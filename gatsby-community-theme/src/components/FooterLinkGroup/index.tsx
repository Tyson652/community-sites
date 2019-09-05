/** @jsx jsx */
import { jsx, Box, Flex, Styled } from "theme-ui";

export const FooterComplete = () => (
  <FooterLinkGroup>
    <FooterLinkList>
      <Heading>Resources</Heading>
      <FooterLink href="#guides">Guides</FooterLink>
      <FooterLink href="#docs">Docs</FooterLink>
      <FooterLink href="#source">Source</FooterLink>
    </FooterLinkList>
    <FooterLinkList>
      <Heading>Resources</Heading>
      <FooterLink href="#guides">Guides</FooterLink>
      <FooterLink href="#docs">Docs</FooterLink>
      <FooterLink href="#source">Source</FooterLink>
    </FooterLinkList>
    <FooterLinkList>
      <Heading>Resources</Heading>
      <FooterLink href="#guides">Guides</FooterLink>
      <FooterLink href="#docs">Docs</FooterLink>
      <FooterLink href="#source">Source</FooterLink>
    </FooterLinkList>
    <FooterLinkList>
      <Heading>Resources</Heading>
      <FooterLink href="#guides">Guides</FooterLink>
      <FooterLink href="#docs">Docs</FooterLink>
      <FooterLink href="#source">Source</FooterLink>
    </FooterLinkList>
  </FooterLinkGroup>
);

interface ChildrenProps {
  children: React.ReactNode;
}

const Heading = ({ children }: ChildrenProps) => (
  <Styled.p
    sx={{
      padding: 0,
      margin: 0,
      variant: "textStyles.heading",
      color: "mutedText",
      fontSize: [2, 2, 3],
      marginBottom: [3],
      fontWeight: "body"
    }}
  >
    {children}
  </Styled.p>
);

const FooterLinkGroup = ({ children }: ChildrenProps) => (
  <Flex
    sx={{
      flexWrap: "wrap",
      justifyContent: "space-between",
      paddingTop: 2
    }}
  >
    {children}
  </Flex>
);

const FooterLinkList = ({ children }: ChildrenProps) => (
  <Box sx={{ marginRight: 7, marginBottom: 5 }}>{children}</Box>
);

interface MapProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: MapProps) => (
  <Styled.a
    sx={{
      display: "block",
      marginBottom: [2, 2, 3],
      fontSize: [1, 1, 2],
      textDecoration: "none",
      "&:hover": {
        color: "primary"
      }
    }}
  >
    {children}
  </Styled.a>
);
