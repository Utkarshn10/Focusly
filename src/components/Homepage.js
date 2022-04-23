import React, {useEffect, useState} from "react";
import {Stack, Box, Container} from "@chakra-ui/react";
import Card from "./Card";
import db from "../data/data.js";
import {collection, getDocs} from "firebase/firestore";
function Homepage() {
  const [info, setInfo] = useState([
    {
      id: "1",
      image: "./image/cloud-rain.svg",
      sound: "./sound/rain.mp3",
    },
    {
      id: "2",
      image: "./image/wind.svg",
      sound: "./sound/wind.mp3",
    },
  ]);

  useEffect(() => {
    function fetchData() {}
    fetchData();
  }, []);

  return (
    <Container>
      {/* <img src="./image/rain.png"></img> */}
      {info && info.map((post) => <Card key={post.id} {...post} />)}
    </Container>
  );
}

export default Homepage;
