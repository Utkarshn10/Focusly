import React, {lazy, Suspense} from "react";
import {Box, Image, Center, Spinner} from "@chakra-ui/react";

const renderLoader = () => <Spinner />;

function Card() {
  return (
    <Suspense fallback={renderLoader}>
      <Center py={8} px={4}>
        <Box
          maxW={"280px"}
          w="full"
          bg={"white"}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
          _hover={{
            transform: "scale(1.03)",
          }}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image
              borderRadius="lg"
              alt="${strMeal} image"
              w="full"
              mb={4}
              h={"full"}
              //   src={strMealThumb}
            />
          </Box>
        </Box>
      </Center>
    </Suspense>
  );
}

export default Card;
