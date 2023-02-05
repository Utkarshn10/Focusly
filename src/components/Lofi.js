import React, {useState} from "react";
import {Box, Center,SimpleGrid} from "@chakra-ui/react";
import Card from "./Card";

export default function Lofi() {
    const [info,setinfo] = useState([
        {
          id: "1",
          image: "./image/Lofi-1.jpg",
          sound: "./sound/Lofi-empty-mind.mp3",
          tag: "Empty Mind"
        },
        {
            id: "2",
            image: "./image/Lofi-relax.jpg",
            sound: "./sound/Lofi-Just-relax.mp3",
            tag: "Just Relax"
        },
        {
            id: "3",
            image: "./image/Lofi-weekend.jpg",
            sound: "./sound/Lofi-the-weekend.mp3",
            tag: "The weekend"
        },
        {
            id: "4",
            image: "./image/Lofi-study.jpg",
            sound: "./sound/Lofi1.mp3",
            tag: "Lofi Study"
        },
        {
            id: "5",
            image: "./image/Lofi-coding.jpg",
            sound: "./sound/Lofi-coding-night.mp3",
            tag: "Lofi Coding night"
        },
        {
            id: "6",
            image: "./image/Lofi-cat.avif",
            sound: "./sound/Lofi-sleepy-cat.mp3",
            tag: "Lofi Sleepy Cat"
        },
      ])

    return (
        <Box maxW={"100%"}>
                <Center>
                    <SimpleGrid columns={[1, 2, 4]}>
                        {info && info.map((post) => <Card key={post.id} {...post} />)}
                    </SimpleGrid>
                </Center>
        </Box>
    );
}

