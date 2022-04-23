import React, {lazy, Suspense, useState} from "react";
import {
  Box,
  Slider,
  SliderTrack,
  SliderTrackProps,
  SliderThumb,
  Image,
  Tooltip,
  Center,
  SliderFilledTrack,
  Spinner,
} from "@chakra-ui/react";
import Sound from "react-sound";

const renderLoader = () => <Spinner />;

function Card(props) {
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(70);
  const [sliderValue, setSliderValue] = useState(70);
  const [showTooltip, setShowTooltip] = useState(false);

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
            rounded={"md"}
            p={6}
            overflow={"hidden"}
            _hover={{
              boxShadow: "xl",
              transform: "scale(1.03)",
            }}
          >
            <Box
              h={"210px"}
              bg={"white.500"}
              mt={-6}
              mx={-6}
              pos={"relative"}
              onClick={clicked}
            >
              <Image
                borderRadius="3xl"
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
                loop={true}
                volume={volume}
                playStatus={play ? Sound.status.PLAYING : Sound.status.STOPPED}
              />
            </Box>
            <Slider
              id="slider"
              defaultValue={70}
              min={0}
              max={100}
              colorScheme="teal"
              onChange={(v) => {
                setSliderValue(v);
                setVolume(v);
              }}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg="teal.500"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={`${sliderValue}%`}
              >
                <SliderThumb />
              </Tooltip>
            </Slider>
          </Box>
        </Center>
      </>
    );
  }
}

export default Card;
