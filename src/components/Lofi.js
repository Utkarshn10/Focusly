// import React, {useState} from "react";
// import {Box, Center,Heading, SimpleGrid} from "@chakra-ui/react";
// import Card from "./Card";

// function Lofi() {
//     const [info,setinfo] = useState([
//         {
//           id: "1",
//           image: "./image/meditate_binaural.png",
//           sound: "./sound/Lofi-empty-mind.mp3",
//           tag: "Empty Mind"
//         },
//         {
//             id: "2",
//             image: "./image/meditate_binaural.png",
//             sound: "./sound/Lofi-Just-relax.mp3",
//             tag: "Just Relax"
//         },
//         {
//             id: "3",
//             image: "./image/meditate_binaural.png",
//             sound: "./sound/Lofi-the-weekend.mp3",
//             tag: "The weekend"
//         },
//         {
//             id: "4",
//             image: "./image/meditate_binaural.png",
//             sound: "./sound/Lofi1.mp3",
//             tag: "Lofi Study"
//         },
//       ])

// return (
//     <Box maxW={"100%"}>
//       <Box>
//       <Heading>For You</Heading>  
//       <Center>
//         <SimpleGrid columns={[1, 2, 4]}>
//           {info && info.map((post) => <Card key={post.id} {...post} />)}
//         </SimpleGrid>
//       </Center>
//       </Box>
//     </Box>
// );
// }

// export default Lofi;