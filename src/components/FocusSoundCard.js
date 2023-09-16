import React, {
  Suspense,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import {
  BsFillPlayFill,
  BsPauseFill,
  BsTwitter,
  BsReddit,
  BsFacebook,
  BsShareFill,
} from "react-icons/bs";
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
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import Sound from "react-sound";
import { MyContext } from "../context";

const renderLoader = () => <Spinner />;

const soundStatus = {
  playing: false,
  paused: false,
};

const FocusSoundCard = (props, initialState = 0) => {
  const { index, shuffleButtonClicked } = props;

  const { timer, setTimer } = useContext(MyContext);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState([]);

  const shuffleSounds = () => {
    let playingSounds = []

    for (let cnt = 0; cnt < 3; cnt++) {
      var val = Math.floor(Math.random() * (10 - 1 + 1) + 1);
      if (index == val) {
        playingSounds.push(index)
        handlePlay();
      }
    }
    setCurrentlyPlaying(playingSounds);
  };

  useEffect(() => {
    if (shuffleButtonClicked) shuffleSounds();
  }, [shuffleButtonClicked]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    if (timer === 0) {
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
    // console.log("Pause => ",isPaused)
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const [{ playing, paused }, setSoundStatus] = useState(soundStatus);
  const [volume, setVolume] = useState(70);
  const [sliderValue, setSliderValue] = useState(70);
  const [showTooltip, setShowTooltip] = useState(false);

  const handlePlay = () => {
    setSoundStatus({ ...soundStatus, playing: !playing });
    !isActive && !isPaused ? handleStart() : handlePause();
  };

  const handlePauseCard = () => {
    setSoundStatus({ ...soundStatus, playing: true, paused: !paused });
    isPaused ? handlePause() : handleResume();
  };

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
            cursor="pointer"
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
              p={6}
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
              <Box d="flex" alignItems="baseline">
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  {props.tag}
                </Badge>
              </Box>
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
              variant="solid"
              colorScheme="teal"
              aria-label="Call Sage"
              fontSize="20px"
              icon={paused ? <BsFillPlayFill /> : <BsPauseFill />}
              onClick={handlePauseCard}
            />
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    mt="15px"
                    ms={2}
                    variant="solid"
                    colorScheme="teal"
                    aria-label="Call Sage"
                    fontSize="16px"
                    rightIcon={isOpen ? "" : <BsShareFill />}
                    isActive={isOpen}
                    as={Button}
                  >
                    {isOpen ? "Close" : "Share "}
                  </MenuButton>
                  <MenuList fontSize="17px">
                    <MenuItem
                      as="a"
                      href={`https://twitter.com/intent/tweet?text=Listening to ${props.tag} on the Focusly app helps makes focusing on work much easier. Let's listen to ${props.tag} together. https://focusly.vercel.app/`}
                    >
                      <BsTwitter /> &nbsp; Tweet about it
                    </MenuItem>
                    <MenuItem
                      as="a"
                      href={`https://www.reddit.com/submit?post&text=Listening to ${props.tag} on the Focusly app helps makes focusing on work much easier. Let's listen to ${props.tag} together. https://focusly.vercel.app/`}
                    >
                      <BsReddit /> &nbsp; Post on Reddit
                    </MenuItem>
                    <MenuItem
                      as="a"
                      href="www.facebook.com/sharer.php?u=https://focusly.vercel.app/"
                    >
                      <BsFacebook /> &nbsp; Share on Facebook
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Box>
        </Center>
      </>
    );
  }
};

export default FocusSoundCard;
