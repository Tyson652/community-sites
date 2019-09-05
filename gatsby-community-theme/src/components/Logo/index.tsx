/** @jsx jsx */
import { jsx } from "theme-ui";

export interface LogoProps {
  logoUrl: string;
  size: "small" | "large";
}

export const Logo = ({ logoUrl, size }: LogoProps) => (
  <img
    sx={{
      width: size === "small" ? "30px" : "80px",
      display: "inline-block",
      margin: size === "large" ? "auto" : "0"
    }}
    src={logoUrl}
  />
);
