/** @jsx jsx */
import { useState, useEffect } from "react";
import { jsx, Box, Flex, Styled } from "theme-ui";
import SiteYamlType from "../../types/siteYaml";
import { Logo } from "../Logo";

export type EventFunction = () => string;

export interface LinkProps {
  description: string;
  href: string;
}

export interface HeaderNavProps {
  togglePageFix: EventFunction;
  siteYaml: SiteYamlType;
  logo: string;
  page: string;
}

export const HeaderNav = ({
  togglePageFix,
  siteYaml,
  logo,
  page
}: HeaderNavProps) => {
  const { title, headerNav } = siteYaml;

  const [headerBg, setHeaderBg] = useState("headerTransparent");

  useEffect(() => {
    window.addEventListener("scroll", function() {
      let currentOffset = window.pageYOffset;
      let windowWidth = window.innerWidth;
      let breakPoint = windowWidth > 800 ? 200 : 100;
      setHeaderBg(
        currentOffset > breakPoint ? "headerOpaque" : "headerTransparent"
      );
    });
  });

  return (
    <Box
      sx={{
        backgroundColor: page === "home" ? headerBg : "headerOpaque",
        transition: ".6s",
        paddingX: [4, 4, 5],
        paddingY: 3
      }}
    >
      <BurgerNav
        togglePageFix={togglePageFix}
        title={title}
        links={headerNav.map(link => ({
          description: link.description,
          href: link.href
        }))}
        logo={logo}
        page={page}
      />
      <Navbar
        page={page}
        title={title}
        logo={logo}
        links={headerNav.map(link => ({
          description: link.description,
          href: link.href
        }))}
      />
    </Box>
  );
};

interface NavbarProps {
  links: LinkProps[];
  title: string;
  logo: string;
  page: string;
}

const Navbar = ({ links, title, logo, page }: NavbarProps) => {
  return (
    <Box sx={{ display: ["none", "block", "block"] }}>
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: 3
        }}
      >
        <Styled.a href="/">
          <HeaderLogo page={page} logo={logo}>
            {title}
          </HeaderLogo>
        </Styled.a>
        <Flex
          sx={{ alignItems: "center", cursor: "pointer" }}
          css={{
            a: {
              opacity: 0.8,
              transition: ".4s"
            },
            "&:hover > a": {
              opacity: 1
            },
            "&:hover > a:not(:hover)": {
              opacity: ".5"
            }
          }}
        >
          {links.map((link: LinkProps, i: number) => (
            <Styled.a
              key={i}
              href={link.href}
              sx={{
                textDecoration: "none"
              }}
            >
              <HeaderLink>{link.description.toUpperCase()}</HeaderLink>
            </Styled.a>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

interface HeaderLogoProps {
  children: React.ReactNode;
  logo: string;
  page: string;
}

const HeaderLogo = ({ children, logo, page }: HeaderLogoProps) => {
  const [smallHeadingOpacity, setHeadingOpacity] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", function() {
      let currentOffset = window.pageYOffset;
      let windowWidth = window.innerWidth;
      let breakPoint = windowWidth > 800 ? 500 : 100;
      setHeadingOpacity(currentOffset > breakPoint ? 1 : 0);
    });
  });

  return (
    <Flex sx={{ alignItems: "center" }}>
      <Logo size="small" logoUrl={logo} />
      <Styled.h3
        sx={{
          margin: 0,
          variant: "linkStyles.buttonDefault",
          color: "background",
          padding: 2,
          paddingX: 3,
          fontFamily: "modern",
          fontWeight: "light",
          lineHeight: "heading",
          opacity: page === "home" ? smallHeadingOpacity : 1,
          display: "inline-block",
          verticalAlign: "super",
          marginLeft: "20px",
          transition: ".6s opacity"
        }}
      >
        {children}
      </Styled.h3>
    </Flex>
  );
};

interface ChildrenProps {
  children: React.ReactNode;
}

const HeaderLink = ({ children }: ChildrenProps) => (
  <Styled.p
    sx={{
      display: "inline",
      color: "background",
      fontSize: [2, 2, 3],
      padding: 1,
      marginX: [4, 4, 5],
      letterSpacing: [0, 0, "1px"],
      fontWeight: "light",
      font: "modern"
    }}
  >
    {children}
  </Styled.p>
);

const BurgerLink = ({ children }: ChildrenProps) => (
  <Box
    sx={{
      variant: "borderStyles.veryLightBorderTop",
      width: "100%",
      padding: 4
    }}
  >
    <Styled.p
      sx={{
        display: "inline",
        variant: "linkStyles.buttonDefault",
        color: "brandDark",
        marginX: 7,
        marginY: 3,
        padding: 2,
        fontWeight: 2,
        "&:hover": {
          color: "background",
          backgroundColor: "elixirLight",
          variant: "boxShadowStyles.mediumShadow"
        }
      }}
    >
      {children}
    </Styled.p>
  </Box>
);

const IconBar = () => (
  <Box
    sx={{
      width: "27px",
      height: "4px",
      marginY: "6px",
      backgroundColor: "background",
      opacity: 0.8,
      borderRadius: 4
    }}
  />
);

interface DropdownProps {
  dropDownOnClick: EventFunction;
}

const BurgerIcon = ({ dropDownOnClick }: DropdownProps) => (
  <Box onClick={dropDownOnClick} sx={{ cursor: "pointer", marginRight: 5 }}>
    <IconBar />
    <IconBar />
    <IconBar />
  </Box>
);

interface BurgerNavProps {
  links: LinkProps[];
  title: string;
  togglePageFix: EventFunction;
  logo: string;
  page: string;
}

const BurgerNav = ({
  links,
  title,
  togglePageFix,
  logo,
  page
}: BurgerNavProps) => {
  const [value, setValue] = useState("none");

  const dropDownOnClick = () => {
    if (value === "none") {
      setValue("null");
      togglePageFix();
    } else {
      setValue("none");
      togglePageFix();
    }
    return value;
  };

  return (
    <Box sx={{ width: "100%", display: ["block", "none", "none"], left: 0 }}>
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: 3
        }}
      >
        <Styled.a href="/">
          <HeaderLogo page={page} logo={logo}>
            {title}
          </HeaderLogo>
        </Styled.a>
        <BurgerIcon dropDownOnClick={dropDownOnClick} />
      </Flex>
      <Flex
        sx={{
          position: "fixed",
          width: "100%",
          display: value,
          backgroundColor: "background",
          justifyContent: "center",
          variant: "textStyles.modern",
          fontSize: 3,
          zIndex: 25,
          left: 0
        }}
      >
        <Flex
          sx={{
            width: "100%",
            flexDirection: "column",
            textAlign: "center",
            zIndex: 5
          }}
        >
          {links.map((link, i) => (
            <Styled.a key={i} href={link.href} sx={{ textDecoration: "none" }}>
              <BurgerLink>{link.description}</BurgerLink>
            </Styled.a>
          ))}
        </Flex>
      </Flex>
      <Box sx={{ position: "absolute", top: 0, left: 0 }}>
        <Flex
          onClick={dropDownOnClick}
          sx={{
            display: value,
            position: "fixed",
            zIndex: 20,
            width: "100%",
            height: "100%",
            backgroundColor: "darkness",
            opacity: "0.2"
          }}
        />
      </Box>
    </Box>
  );
};
