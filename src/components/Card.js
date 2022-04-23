import React, {lazy, Suspense, useState} from "react";
import {
  Box,
  Slider,
  SliderTrack,
  SliderTrackProps,
  SliderThumb,
  Image,
  Center,
  SliderFilledTrack,
  Spinner,
} from "@chakra-ui/react";
import Sound from "react-sound";

const renderLoader = () => <Spinner />;

function Card(props) {
  const [play, setPlay] = useState(false);
  const clicked = (e) => {
    setPlay(!play);
  };

  if (!play) {
    return (
      <>
        <Center py={8} px={4}>
          <Box
            maxW={"280px"}
            w="full"
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
            _hover={{
              transform: "scale(1.03)",
            }}
          >
            <Box
              h={"210px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
              onClick={clicked}
            >
              <Image
                borderRadius="lg"
                alt="image"
                w="full"
                h={"full"}
                src={props.image}
              />
              <Sound
                url={props.sound}
                playStatus={play ? Sound.status.PLAYING : Sound.status.STOPPED}
              />
            </Box>
          </Box>
        </Center>
      </>
    );
  } else {
    return (
      <>
        <Center py={8} px={4}>
          <Box
            maxW={"280px"}
            w="full"
            bg={"gray"}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
            _hover={{
              transform: "scale(1.03)",
            }}
          >
            <Box
              h={"210px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
              onClick={clicked}
            >
              <Image
                borderRadius="lg"
                alt="image"
                w="full"
                h={"full"}
                src={props.image}
              />
              <Sound
                url={props.sound}
                playStatus={play ? Sound.status.PLAYING : Sound.status.STOPPED}
              />
              <Slider aria-label="slider-ex-4" defaultValue={30}>
                <SliderTrack bg="red.100">
                  <SliderFilledTrack bg="tomato" />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                  <Box color="tomato" />
                </SliderThumb>
              </Slider>
            </Box>
          </Box>
        </Center>
      </>
    );
  }
}

export default Card;
