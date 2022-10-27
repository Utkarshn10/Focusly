import React, {  Suspense, useState, useContext, useRef } from "react";
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
import {MyContext} from "../context"

const renderLoader = () => <Spinner />;

const soundStatus = {
  playing: false,
  paused: false
}


const Card =  (props,initialState = 0) => {
  const {timer, setTimer} = useContext(MyContext);
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const countRef = useRef(null)


  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    console.log("start")
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
    console.log("start => ",isPaused)
  }

  const handlePause = () => {
    clearInterval(countRef.current)
    setIsPaused(false)
    console.log("Pause => ",isPaused)
  }

  const handleResume = () => {
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)

  }

  const [{ playing, paused }, setSoundStatus] = useState(soundStatus);
  const [volume, setVolume] = useState(70);
  const [sliderValue, setSliderValue] = useState(70);
  const [showTooltip, setShowTooltip] = useState(false);

  const handlePlay = () => {
    setSoundStatus({ ...soundStatus, playing: !playing })
    !isActive && !isPaused ? handleStart() : handlePause();
  };

  const handlePauseCard = () => {
    setSoundStatus({ ...soundStatus, playing: true, paused: !paused })
    isPaused ? handlePause() : handleResume();
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
              onClick={handlePauseCard}
            />
          </Box>
        </Center>
      </>
    );
  }
}

export default Card;
