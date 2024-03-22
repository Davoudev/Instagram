import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Flex>
        <Avatar src={avatar} alt="" size={"sm"} />
        <Text mx={2}>{username}</Text>
        <Box color={"gray.500"}>. 1w</Box>
      </Flex>
      <Text
        color={"blue.500"}
        fontWeight={"bold"}
        _hover={{ color: "white" }}
        transition={"0.2s ease-in-out"}
      >
        Unfollow
      </Text>
    </Flex>
  );
};

export default PostHeader;
