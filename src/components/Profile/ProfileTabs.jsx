import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";
import React from "react";

const ProfileTabs = () => {
  return (
    <Flex
      textTransform={"uppercase"}
      w={"full"}
      justifyContent={"center"}
      fontWeight={"bold"}
      gap={2}
    >
      <Flex
        borderTop={"1px solid  white"}
        p={"3"}
        gap={1}
        alignItems={"center"}
        cursor={"pointer"}
      >
        <Box fontSize={20}>
          <BsGrid3X3 />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Posts
        </Text>
      </Flex>
      <Flex p={"3"} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsBookmark />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Saved
        </Text>
      </Flex>
      <Flex p={"3"} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsSuitHeart fontWeight={"bold"} />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Likes
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTabs;
