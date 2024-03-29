import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Comment = ({ avatar, name, text, time }) => {
  return (
    <Flex w={"full"} gap={2}>
      <Avatar src={avatar} size={"sm"} />
      <Flex direction={"column"}>
        <Flex gap={2}>
          <Text fontWeight={"bold"} fontSize={12}>
            {name}
          </Text>
          <Text fontSize={14}>{text}</Text>
        </Flex>
        <Text alignSelf={"flex-start"} fontSize={12} color={"gray.500"}>
          {time}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
