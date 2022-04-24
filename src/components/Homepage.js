import React, {useState} from "react";
import {Box, Center, Container, SimpleGrid} from "@chakra-ui/react";
import Card from "./Card";
import Tabs from "./Tabs";
function Homepage() {
  const [info, setInfo] = useState([
    {
      id: "1",
      image: "./image/rain.svg",
      sound: "./sound/rain.mp3",
    },
    {
      id: "2",
      image: "./image/wind.svg",
      sound: "./sound/wind.mp3",
    },
    {
      id: "3",
      image: "./image/thunderstorm.svg",
      sound: "./sound/thunderstorm.mp3",
    },
    {
      id: "4",
      image: "./image/bird.svg",
      sound: "./sound/birds.mp3",
    },
    {
      id: "5",
      image: "./image/waterfall.svg",
      sound: "./sound/Waterfall.mp3",
    },
    {
      id: "6",
      image: "./image/fire.svg",
      sound: "./sound/fire.mp3",
    },
    {
      id: "7",
      image: "./image/sea.svg",
      sound: "./sound/sea.mp3",
    },
    {
      id: "8",
      image: "./image/garden.svg",
      sound: "./sound/garden.mp3",
    },
    {
      id: "9",
      image: "./image/keyboard.svg",
      sound: "./sound/keyboard.mp3",
    },
  ]);

  return (
    <Container maxW={"100%"} bg={"#E9E7DE"}>
      <Tabs />
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
