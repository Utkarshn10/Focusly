import React, {useState} from "react";
import {Box, Center, Container, SimpleGrid} from "@chakra-ui/react";
import Card from "./Card";
import Tabs from "./Tabs";

function Meditate() {
  const [info, setInfo] = useState([
    {
      id: "1",
      image: "./image/meditate3.png",
      sound: "./sound/meditation.mp3",
    },
    {
      id: "2",
      image: "./image/meditate_lotus.svg",
      sound: "./sound/meditate_mind.mp3",
    },
    {
      id: "3",
      image: "./image/meditate_mountain.png",
      sound: "./sound/meditate_mountain.mp3",
    },
    {
      id: "4",
      image: "./image/om.png",
      sound: "./sound/meditate_om.mp3",
    },
  ]);

  return (
    <Container maxW={"100%"} bg={"#EFEAD8"}>
      <Tabs />
      <Box maxW={"100%"}>
        <Center>
          <SimpleGrid columns={[1, 2, 3]}>
            {info && info.map((post) => <Card key={post.id} {...post} />)}
          </SimpleGrid>
        </Center>
      </Box>
    </Container>
  );
}

export default Meditate;
