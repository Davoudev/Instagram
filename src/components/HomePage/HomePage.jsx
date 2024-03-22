import React from "react";
import FeedPosts from "../FeedPost/FeedPosts";
import { Box, Container, Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW={"container.xl"}>
      <Flex gap={20}>
        <Box flex={2}>
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          display={{ base: "none", xl: "block" }}
          maxW={"300px"}
          mr={20}
        >
          Suggested Users
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
