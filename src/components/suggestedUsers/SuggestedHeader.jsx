import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Avatar src="/profilepic.png" />
        <Text>ASAPROGRAMMERS__</Text>
      </Flex>
      <Link as={RouterLink} to={"/auth"} color={"blue.500"} fontWeight={600}>
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
