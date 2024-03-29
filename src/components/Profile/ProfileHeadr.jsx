import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ProfileHeadr = () => {
  return (
    <Flex direction={{ base: "column", sm: "row" }} gap={4} mt={10}>
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar
          name="As a Programmer"
          src="/profilepic.png"
          alt="As a prorammer Logo"
        />
      </AvatarGroup>
      <VStack flex={1}>
        <Flex
          alignItems={"center"}
          justifyContent={{ base: "center", sm: "flex-start" }}
          direction={{ base: "column", sm: "row" }}
          w={"full"}
          gap={4}
        >
          <Text>asaProgrammer_</Text>
          <Button
            bg={"white"}
            color={"black"}
            size={{ base: "xs", md: "sm" }}
            _hover={{ bg: "whiteAlpha.800" }}
          >
            Edit Profile
          </Button>
        </Flex>
        <Flex gap={2} w={"full"}>
          <Box>
            <Text as={"span"} mr={1}>
              4
            </Text>
            Posts
          </Box>
          <Box>
            <Text as={"span"} mr={1}>
              179
            </Text>
            Followers
          </Box>
          <Box>
            <Text as={"span"} mr={1}>
              166
            </Text>
            Following
          </Box>
        </Flex>
        <Flex w={"full"}>
          <Text fontWeight={"bold"}>As a Pogrammer </Text>
        </Flex>
        <Text w={"full"}>
          Learn how to use React and Firebase to create an instagram clone from
          scratch.
        </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeadr;
