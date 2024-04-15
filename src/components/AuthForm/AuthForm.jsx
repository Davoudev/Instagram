import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {/* big box */}
      <Box border={"1px solid gray"} p={5} borderRadius={4}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} />
          {isLogin ? <SignUp /> : <Login />}
          {/* -------------------- or ---------------------- */}

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            w={"full"}
            my={4}
          >
            <Box flex={1} h={"1px"} bg={"gray.400"} />
            <Text mx={2} color={"white"}>
              OR
            </Text>
            <Box flex={1} h={"1px"} bg={"gray.400"} />
          </Flex>
          <GoogleAuth status={!isLogin ? "Log in" : "sign Up"} />
        </VStack>
      </Box>
      <Box
        border={"1px solid gray"}
        px={isLogin ? 8 : 7}
        py={4}
        my={2}
        borderRadius={4}
      >
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box fontSize={14}>
            {isLogin ? "don't have an account?" : "Aleready have an account?"}
          </Box>
          <Box
            color={"blue.500"}
            ml={1}
            onClick={() => setIsLogin(!isLogin)}
            cursor={"pointer"}
          >
            {isLogin ? "Log in" : "sign Up"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
