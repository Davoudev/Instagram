import { Avatar, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SuggestedUser = ({ followers, avatar, name }) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} my={6}>
      <Flex>
        <Avatar src={avatar} />
        <VStack ml={2} alignItems={"flex-start"}>
          <Text fontSize={14}>{name}</Text>
          <Text fontSize={12} color={"gray.400"}>
            {followers} followers
          </Text>
        </VStack>
      </Flex>
      <Text color={"blue.500"} cursor={"pointer"}>
        Follow
      </Text>
    </Flex>
  );
};

export default SuggestedUser;
