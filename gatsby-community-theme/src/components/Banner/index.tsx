/** @jsx jsx */
import { jsx, Box } from "theme-ui";

export interface BannerProps {
  backgroundImageUrl: string;
}

export const Banner = ({ backgroundImageUrl }: BannerProps) => (
  <Box
    sx={{
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: `cover`,
      backgroundPosition: "center",
      height: "300px",
      margin: "0px"
    }}
  />
);
