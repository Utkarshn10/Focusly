import React, { useState } from "react";
import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

export default function Lofi() {
  const [currentAudio, setCurrentAudio] = useState(null);       //tracks the current song
  const [info, setinfo] = useState([
    {
      id: "1",
      image: "./image/Lofi-1.jpg",
      sound: "./sound/Lofi-empty-mind.mp3",
      tag: "Empty Mind",
    },
    {
      id: "2",
      image: "./image/Lofi-weekend.jpg",
      sound: "./sound/Lofi-the-weekend.mp3",
      tag: "The weekend",
    },
    {
      id: "3",
      image: "./image/Lofi-study.jpg",
      sound: "./sound/Lofi1.mp3",
      tag: "Lofi Study",
    },
    {
      id: "4",
      image: "./image/Lofi-coding.jpg",
      sound: "./sound/Lofi-coding-night.mp3",
      tag: "Lofi Coding night",
    },
    {
      id: "5",
      image: "./image/Lofi-cat.avif",
      sound: "./sound/Lofi-sleepy-cat.mp3",
      tag: "Lofi Sleepy Cat",
    },
    {
      id: "6",
      image: "./image/spring-lofi.jpeg",
      sound: "./sound/spring-of-mind.mp3",
      tag: "Spring Mind",
    },
    {
      id: "7",
      image: "./image/Lofi-chilling-vibe.jpeg",
      sound: "./sound/Lofi-chill-vibes.mp3",
      tag: "Chilling Vibe",
    },
    {
      id: "8",
      image: "./image/lofi-meditation.jpeg",
      sound: "./sound/lofi-meditation.mp3",
      tag: "Meditation",
    },
    {
      id: "9",
      image: "./image/lofi-relaxation.jpg",
      sound: "./sound/lofi-relaxation.mp3",
      tag: "Relaxation",
    },
    {
      id: "10",
      image: "./image/lofi-study.jpeg",
      sound: "./sound/lofi-study.mp3",
      tag: "Study",
    },
  ]);

  return (
    <Box maxW={"100%"}>
      <Center>
        <SimpleGrid columns={[1, 2, 3]}>
          {info && info.map((post) => <Card key={post.id} {...post} currentAudio={currentAudio} setCurrentAudio={setCurrentAudio} multi={false}/>)}
        </SimpleGrid>
      </Center>
    </Box>
  );
}
