import React from "react";
import {useState} from "react";
import { Box, Center, Container, SimpleGrid, Button } from "@chakra-ui/react";
import FocusSoundCard from "./FocusSoundCard";
import { Tooltip } from '@chakra-ui/react'

function Homepage() {
  const [shuffleButtonClicked,setShuffleButtonClicked] = useState(false)
  const info = [
    {
      id: "1",
      image: "./image/rain.webp",
      sound: "./sound/rain.mp3",
      tag: "Rain",
    },
    {
      id: "2",
      image: "./image/wind.webp",
      sound: "./sound/wind.mp3",
      tag: "Wind",
    },
    {
      id: "3",
      image: "./image/thunderstorm.webp",
      sound: "./sound/thunderstorm.mp3",
      tag: "Thunderstorm",
    },
    {
      id: "4",
      image: "./image/bird.webp",
      sound: "./sound/birds.mp3",
      tag: "Birds",
    },
    {
      id: "5",
      image: "./image/waterfall.webp",
      sound: "./sound/Waterfall.mp3",
      tag: "Waterfall",
    },
    {
      id: "6",
      image: "./image/fire.webp",
      sound: "./sound/fire.mp3",
      tag: "Fire",
    },
    {
      id: "7",
      image: "./image/sea.webp",
      sound: "./sound/sea.mp3",
      tag: "Sea",
    },
    {
      id: "8",
      image: "./image/garden.webp",
      sound: "./sound/garden.mp3",
      tag: "Garden",
    },
    {
      id: "9",
      image: "./image/keyboard.webp",
      sound: "./sound/keyboard.mp3",
      tag: "Keyboard",
    },
    {
      id: "10",
      image: "./image/brownnoise.webp",
      sound: "./sound/brownnoise.mp3",
      tag: "Brown noise",
    },
    {
      id:"12" ,  //Coffee charter sound
      image:"./image/coffee.webp",
      sound:"./sound/coffee-shop-chatter.mp3",
      tag:"Coffee Shop",
    },
  ];

  const handleShuffleClick = () =>{
    setShuffleButtonClicked(!shuffleButtonClicked)
  }
  return (
    <>
      <Container maxW={"100%"} bg={"#EFEAD8"}>
        <Box maxW={"100%"}>
          <Center>
            <SimpleGrid columns={[1, 2, 4]}>
              {info &&
                info.map((post) => <FocusSoundCard key={post.id} index={post.id} {...post} shuffleButtonClicked={shuffleButtonClicked} />)}
            </SimpleGrid>
          </Center>
        </Box>
      </Container>
      <Box
        position="fixed"
        bottom={4}
        right={14}
        display="flex"
        justifyContent="flex-end"
      >
        <Tooltip label='Surprise Me ✨'>
          <Box
            bg={"gray.400"}
            variant="solid"
              borderRadius="full"
              py="2"
              px="2"
              onClick={()=>handleShuffleClick()}
              // purple
              // bgGradient="linear(to top, #9795f0 0%, #fbc8d4 100%)"
              //teal
              bgGradient="linear(-225deg, #B7F8DB 0%, #50A7C2 100%)"
              cursor="pointer"
            >
            <svg
              width="35px"
              height="35px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M22 7c-3 0-8.5 0-10.5 5.5S5 18 2 18"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M20 5l2 2-2 2M22 18c-3 0-8.5 0-10.5-5.5S5 7 2 7"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M20 20l2-2-2-2"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </Box>
        </Tooltip>
      </Box>
    </>
  );
}

export default Homepage;
