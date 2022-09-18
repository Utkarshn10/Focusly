import React, { lazy, Suspense, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import {
  Box,
  Slider,
  SliderTrack,
  SliderThumb,
  Image,
  Tooltip,
  Badge,
  Center,
  SliderFilledTrack,
  Spinner,
  IconButton
} from "@chakra-ui/react";
import Sound from "react-sound";

const renderLoader = () => <Spinner />;

const soundStatus = {
  playing: false,
  paused: false
}

function Card(props) {
  const [{ playing, paused }, setSoundStatus] = useState(soundStatus);
  const [volume, setVolume] = useState(70);
  const [sliderValue, setSliderValue] = useState(70);
  const [showTooltip, setShowTooltip] = useState(false);

  const handlePlay = () => {
    setSoundStatus({ ...soundStatus, playing: !playing })
  };

  const handlePause = () => {
    setSoundStatus({ ...soundStatus, playing: true, paused: !paused })
  }

  if (!playing) {
    return (
      <Suspense fallback={renderLoader}>
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
              p="6"
              mx={-6}
              pos={"relative"}
              onClick={handlePlay}
            >
              <Image
                p="20px"
                alt="image"
                w={"full"}
                h={"full"}
                src={props.image}
              />
              <Box d="flex" alignItems="baseline">
                  <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                    {props.tag}
                  </Badge>
              </Box>
              <Sound
                url={props.sound}
                playStatus={Sound.status.STOPPED}
              />
            </Box>
          </Box>
        </Center>
      </Suspense>
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
              onClick={handlePlay}
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
                playStatus={paused ? Sound.status.PAUSED : Sound.status.PLAYING}
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
            <IconButton
              mt="15px"
              variant='solid'
              colorScheme='teal'
              aria-label='Call Sage'
              fontSize='20px'
              icon={paused ? <BsFillPlayFill /> : <BsPauseFill />}
              onClick={handlePause}
            />
          </Box>
        </Center>
      </>
    );
  }
}

export default Card;
