import React, {useState} from "react";
import {Box, Center, Container, SimpleGrid} from "@chakra-ui/react";
import Card from "./Card";
function Homepage() {

  
  const [info, setInfo] = useState([
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
    }
  
  ]);

  return (
    <Container maxW={"100%"} bg={"#EFEAD8"}>
    <Box maxW={"100%"}>
      <Center>
        <SimpleGrid columns={[1, 2, 4]}>
          {info && info.map((post) => <Card key={post.id} {...post} />)}
        </SimpleGrid>
      </Center>
      </Box>
  </Container>
  );
}

export default Homepage;
