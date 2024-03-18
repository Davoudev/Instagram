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
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [inputes, setInputes] = useState({
    email: "",
    password: "",
    configPassword: "",
  });
  const LoginHandler = () => {
    if (!inputes.email || !inputes.password) {
      alert("please complete fillds");
      return;
    }
    navigate("/");
  };
  return (
    <>
      {/* big box */}
      <Box border={"1px solid gray"} p={5} borderRadius={4}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} />

          <Input
            placeholder="Email"
            type="email"
            fontSize={"14px"}
            value={inputes.email}
            onChange={(e) => setInputes({ ...inputes, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            type="password"
            fontSize={"14px"}
            value={inputes.password}
            onChange={(e) =>
              setInputes({ ...inputes, password: e.target.value })
            }
          />
          {!isLogin ? (
            <Input
              placeholder="Config Password"
              type="password"
              fontSize={"14px"}
              value={inputes.configPassword}
              onChange={(e) =>
                setInputes({ ...inputes, configPassword: e.target.value })
              }
            />
          ) : null}
          <Button
            colorScheme="blue"
            w={"full"}
            size={"sm"}
            fontSize={14}
            onClick={LoginHandler}
          >
            Log in
          </Button>

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

          <Flex alignItems={"center"} justifyContent={"center"}>
            <Image src="/google.png" w={5} alt="Googe Image " />
            <Text color={"blue.500"} mx={2} cursor={"pointer"}>
              Log in with Google
            </Text>
          </Flex>
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
            mx={2}
            onClick={() => setIsLogin(!isLogin)}
            cursor={"pointer"}
          >
            {isLogin ? " sign Up" : " Log in "}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
