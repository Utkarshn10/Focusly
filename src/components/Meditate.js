import React, {useState} from "react";
import {Box, Center,Heading,Flex, Container, SimpleGrid} from "@chakra-ui/react";
import Card from "./Card";

function Meditate() {
  const [newinfo,setnewInfo] = useState([
    {
      id: "1",
      image: "./image/meditate_binaural.png",
      sound: "./sound/meditate_binaural.mp3",
      tag: "NEW"
    },
  ])
  const [info, setInfo] = useState([
    {
      id: "1",
      image: "./image/meditate3.png",
      sound: "./sound/meditation.mp3",
      tag: "Nature"
    },
    {
      id: "2",
      image: "./image/meditate_lotus.svg",
      sound: "./sound/meditate_mind.mp3",
      tag: "Lotus",
    },
    {
      id: "3",
      image: "./image/meditate_mountain.png",
      sound: "./sound/meditate_mountain.mp3",
      tag: "Mountain",
    },
    {
      id: "4",
      image: "./image/om.png",
      sound: "./sound/meditate_om.mp3",
      tag: "Om Chanting"
    },
  ]);

  return (
      <Box maxW={"100%"}>
        <Box>
        <Heading>New</Heading>  
          <Center>
          <SimpleGrid columns={[1, 2, 4]}>
            {newinfo && newinfo.map((post) => <Card key={post.id} {...post} />)}
          </SimpleGrid>
          </Center>
        </Box>
        <Box>
        <Heading>For You</Heading>  

        <Center>
          <SimpleGrid columns={[1, 2, 4]}>
            {info && info.map((post) => <Card key={post.id} {...post} />)}
          </SimpleGrid>
        </Center>
        </Box>
      </Box>
  );
}

export default Meditate;
