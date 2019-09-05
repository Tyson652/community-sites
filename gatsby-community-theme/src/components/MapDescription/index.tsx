/** @jsx jsx */
import { Box, Flex, jsx, Styled, Container } from "theme-ui";
import { Map } from "../Map";

export interface MapDescriptionProps {
  mapUrl: string;
  address: string;
  name: string;
  instructions: string;
}

export const MapDescription = ({
  mapUrl,
  address,
  name,
  instructions
}: MapDescriptionProps) => (
  <Flex
    sx={{
      paddingX: [3, 6, 7],
      paddingY: [5, 5, 7],
      justifyContent: "center"
    }}
  >
    <Container sx={{ justifyContent: "center" }}>
      <Styled.h2
        sx={{
          margin: [5, 5, "0 0 -50px 0"],
          fontWeight: 100,
          textAlign: ["center", "center", "left"]
        }}
      >
        Where to find us
      </Styled.h2>

      <Flex
        sx={{
          width: "90%",
          margin: "auto",
          flexDirection: ["column-reverse", "column-reverse", "row"],
          alignItems: "center"
        }}
      >
        <Flex sx={{ alignItems: "center", width: "90%" }}>
          <Flex
            sx={{
              marginTop: [6, 6, 0],
              flexDirection: ["column", "column", "row"],
              textAlign: ["center", "center", "left"],
              alignItems: ["center", "center", "flex-start"]
            }}
          >
            <Marker />
            <Flex
              sx={{
                flexDirection: "column",
                marginX: [2, 3, 3],
                width: ["100%", "100%", "80%"]
              }}
            >
              <Styled.h3 sx={{ margin: 0, fontSize: 4 }}>{name}</Styled.h3>
              <Styled.h3
                sx={{ fontWeight: "body", marginY: 2, fontSize: [3, 3, 4] }}
              >
                {address}
              </Styled.h3>
              <Styled.p sx={{ fontSize: [2, 2, 3], lineHeight: "heading" }}>
                {instructions}
              </Styled.p>
            </Flex>
          </Flex>
        </Flex>
        <Map address={address} srcUrl={mapUrl} />
      </Flex>
    </Container>
  </Flex>
);

const Marker = () => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    sx={{ height: [4, 4, 5], width: [4, 4, 5] }}
    fill={"#3e3e3e"}
  >
    <path
      d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
			c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,469.729
			c-55.847-66.338-152.035-197.217-152.035-284.301c0-83.834,68.202-152.036,152.035-152.036s152.035,68.202,152.035,152.035
			C408.034,272.515,311.861,403.37,256,469.729z"
    />
    <path
      d="M256,92.134c-51.442,0-93.292,41.851-93.292,93.293s41.851,93.293,93.292,93.293s93.291-41.851,93.291-93.293
			S307.441,92.134,256,92.134z M256,245.328c-33.03,0-59.9-26.871-59.9-59.901s26.871-59.901,59.9-59.901s59.9,26.871,59.9,59.901
			S289.029,245.328,256,245.328z"
    />
  </Box>
);
