import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import ProfileHeadr from "../../components/Profile/ProfileHeadr";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";

const ProfilePage = () => {
  return (
    <Container maxW={"container.lg"} py={"4"}>
      <Flex direction={"column"} w={"full"} p={8} mb={16}>
        <ProfileHeadr />
      </Flex>
      <Flex
        direction={"column"}
        maxW={"full"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
      >
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;
