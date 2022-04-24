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
        <Center py={6} px={4}>
          <Box
            maxW={"320px"}
            border="0.5px"
            borderRadius={"2xl"}
            w="full"
            bg={"white"}
            p={6}
            overflow={"hidden"}
            _hover={{
              boxShadow: "2xl",
            }}
          >
            <Box
              h={"180px"}
              bg={"white.500"}
              mt={-6}
              mx={-6}
              pos={"relative"}
              onClick={clicked}
            >
              <Image
                p="20px"
                alt="image"
                w={"full"}
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
            maxW={"320px"}
            w="full"
            bg={"white"}
            border={"4px"}
            borderRadius={"2xl"}
            borderColor={"teal.500"}
            p={6}
            overflow={"hidden"}
            _hover={{
              boxShadow: "3xl",
            }}
          >
            <Box
              h={"180px"}
              bg={"white.500"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
              onClick={clicked}
            >
              <Image
                p="20px"
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
