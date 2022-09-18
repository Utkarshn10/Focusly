import React, {useState} from "react";
import {Box, Center,Flex, Container, Divider, Heading, SimpleGrid} from "@chakra-ui/react";
import Card from "./Card";
function Homepage() {

  
  const [info, setInfo] = useState([
    {
      id: "1",
      image: "./image/rain.svg",
      sound: "./sound/rain.mp3",
      tag: "Rain",
    },
    {
      id: "2",
      image: "./image/wind.svg",
      sound: "./sound/wind.mp3",
      tag: "Wind",
    },
    {
      id: "3",
      image: "./image/thunderstorm.svg",
      sound: "./sound/thunderstorm.mp3",
      tag: "Thunderstorm",
    },
    {
      id: "4",
      image: "./image/bird.svg",
      sound: "./sound/birds.mp3",
      tag: "Birds",
    },
    {
      id: "5",
      image: "./image/waterfall.svg",
      sound: "./sound/Waterfall.mp3",
      tag: "Waterfall",
    },
    {
      id: "6",
      image: "./image/fire.svg",
      sound: "./sound/fire.mp3",
      tag: "Fire",
    },
    {
      id: "7",
      image: "./image/sea.svg",
      sound: "./sound/sea.mp3",
      tag: "Sea",
    },
    {
      id: "8",
      image: "./image/garden.svg",
      sound: "./sound/garden.mp3",
      tag: "Garden",
    },
    {
      id: "9",
      image: "./image/keyboard.svg",
      sound: "./sound/keyboard.mp3",
      tag: "Keyboard",
    },
    {
      id: "10",
      image: "./image/brownnoise.png",
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
