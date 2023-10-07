import React, {useState,useEffect} from "react";
import {Box, Center,Heading, SimpleGrid} from "@chakra-ui/react";
import Card from "./Card";

function Meditate() {

  const [currentAudio, setCurrentAudio] = useState(null);             //tracks the current song
  const [newinfo,setnewInfo] = useState([
    {
      id: "1",
      image: "./image/meditate_binaural.webp",
      sound: "./sound/meditate_binaural.mp3",
      tag: "NEW"
    },
    {
      id: "2",
      image: "./image/zen_meditation.webp",
      sound: "./sound/zen_meditation.mp3",
      tag: "ZEN"
    }
  ])
  const [info, setInfo] = useState([
    {
      id: "1",
      image: "./image/meditate3.webp",
      sound: "./sound/meditation.mp3",
      tag: "Nature"
    },
    {
      id: "2",
      image: "./image/meditate_lotus.webp",
      sound: "./sound/meditate_mind.mp3",
      tag: "Lotus",
    },
    {
      id: "3",
      image: "./image/meditate_mountain.webp",
      sound: "./sound/meditate_mountain.mp3",
      tag: "Mountain",
    },
    {
      id: "4",
      image: "./image/om.webp",
      sound: "./sound/meditate_om.mp3",
      tag: "Om Chanting"
    },
  ]);

  return (
      <Box maxW={"100%"}>
        <Box mt={4}>
        <Heading mb={1}>New</Heading>  
          <Center>
          <SimpleGrid columns={[1, 2, 4]}>
            {newinfo && newinfo.map((post) => <Card key={post.id} {...post} currentAudio={currentAudio} setCurrentAudio={setCurrentAudio} multi={false}/>)}
          </SimpleGrid>
          </Center>
        </Box>
        <Box>
        <Heading>For You</Heading>  

        <Center>
          <SimpleGrid columns={[1, 2, 4]}>
            {info && info.map((post) => <Card key={post.id} {...post} currentAudio={currentAudio} setCurrentAudio={setCurrentAudio} multi={false}/>)}
          </SimpleGrid>
        </Center>
        </Box>
      </Box>
  );
}

export default Meditate;
