import React from "react";
import { GridItem, Flex, Image, Text } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const ProfilePost = ({ img }) => {
  return (
    <GridItem
      aspectRatio={1 / 1}
      overflow={"hidden"}
      cursor={"pointer"}
      borderRadius={4}
      position={"relative"}
    >
      <Flex
        transition={"all 0.3s ease"}
        position={"absolute"}
        left={0}
        top={0}
        bottom={0}
        right={0}
        bg={"blackAlpha.700"}
        zIndex={1}
        opacity={0}
        _hover={{ opacity: 1 }}
        justifyContent={"center"}
      >
        <Flex justifyContent={"center"} alignItems={"center"} gap={50}>
          <Flex>
            <AiFillHeart size={20} />
            <Text fontWeight={"bold"} ml={2}>
              7
            </Text>
          </Flex>
          <Flex>
            <FaComment />
            <Text fontWeight={"bold"} ml={2}>
              7
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Image
        src={img}
        alt="Post"
        width={"100%"}
        height={"100%"}
        objectFit={"cover"}
      />
    </GridItem>
  );
};

export default ProfilePost;
