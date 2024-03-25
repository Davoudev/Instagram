import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} alignItems={"center"}>
      <Container maxW={"container.md"} padding={0}>
        <Flex alignItems={"center"} justifyContent={"center"} gap={10}>
          {/* right side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} />
          </Box>
          {/* left side */}
          <VStack>
            <AuthForm />
            <Text>Get the App</Text>
            <Flex gap={5}>
              <Image src="/playstore.png" h={10} alt="playstore image" />
              <Image src="/microsoft.png" h={10} alt="microsoft image" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
