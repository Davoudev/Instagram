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
import useUserProfileStore from "../../store/useUserProfileStore";
import useAuthStore from "../../store/authStore";

const ProfileHeadr = () => {
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile.username;
  const visitingAnotherProfileAndAuth =
    authUser && authUser.username !== userProfile.username;

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
          src={userProfile.profilePicURL}
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
          <Text>{userProfile.username}</Text>
          {visitingOwnProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"white"}
                color={"black"}
                size={{ base: "xs", md: "sm" }}
                _hover={{ bg: "whiteAlpha.800" }}
              >
                Edit Profile
              </Button>
            </Flex>
          )}
          {visitingAnotherProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"blue"}
                color={"white"}
                size={{ base: "xs", md: "sm" }}
                _hover={{ bg: "blue.800" }}
              >
                Follow
              </Button>
            </Flex>
          )}
        </Flex>
        <Flex gap={2} w={"full"}>
          <Box>
            <Text as={"span"} mr={1}>
              {userProfile.posts.length}
            </Text>
            Posts
          </Box>
          <Box>
            <Text as={"span"} mr={1}>
              {userProfile.followers.length}
            </Text>
            Followers
          </Box>
          <Box>
            <Text as={"span"} mr={1}>
              {userProfile.following.lenght}
            </Text>
            Following
          </Box>
        </Flex>
        <Flex w={"full"}>
          <Text fontWeight={"bold"}>{userProfile.fullName} </Text>
        </Flex>
        <Text w={"full"}>{userProfile.bio}</Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeadr;
