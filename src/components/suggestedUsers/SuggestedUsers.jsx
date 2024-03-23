import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";

const SuggestedUsers = () => {
  return (
    <>
      <Box>
        <SuggestedHeader />
      </Box>
      <Flex justifyContent={"space-between"} alignItems={"center"} ml={12}>
        <Text fontSize={12} color={"gray.400"}>
          suggested for you
        </Text>
        <Text fontSize={12}>see All</Text>
      </Flex>
      <Box my={6} ml={12}>
        <SuggestedUser
          name="Dan ebrahimov"
          followers={1392}
          avatar="https://bit.ly/dan-abramov"
        />
        <SuggestedUser
          name={"rayan florence"}
          followers={559}
          avatar="https://bit.ly/ryan-florence"
        />
        <SuggestedUser
          name="chiristan"
          followers={2079}
          avatar="https://bit.ly/code-beast"
        />
      </Box>
      <Text ml={12} fontSize={14}>
        © 2024 Built by
        <Link
          href="https://github.com/Davoudev"
          target="_blank"
          color={"blue.500"}
          ml={2}
        >
          Davoud
        </Link>
      </Text>
    </>
  );
};

export default SuggestedUsers;
