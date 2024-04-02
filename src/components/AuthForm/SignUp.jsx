import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";
const SignUp = () => {
  const { loading, error, signup } = useSignUpWithEmailAndPassword();
  const [showPassword, setShowPassword] = useState(false);
  const [inputes, setInputes] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
  });
  return (
    <>
      <Input
        placeholder="Email"
        type="email"
        fontSize={"14px"}
        size={"sm"}
        value={inputes.email}
        onChange={(e) => setInputes({ ...inputes, email: e.target.value })}
      />
      <Input
        placeholder="Username"
        type="text"
        fontSize={"14px"}
        size={"sm"}
        value={inputes.username}
        onChange={(e) => setInputes({ ...inputes, username: e.target.value })}
      />
      <Input
        placeholder="Full Name"
        type="email"
        fontSize={"14px"}
        size={"sm"}
        value={inputes.fullName}
        onChange={(e) => setInputes({ ...inputes, fullName: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          type="password"
          fontSize={"14px"}
          size={"sm"}
          value={inputes.password}
          onChange={(e) => setInputes({ ...inputes, password: e.target.value })}
        />
        <InputRightElement>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
      <Button
        colorScheme="blue"
        w={"full"}
        size={"sm"}
        fontSize={14}
        onClick={() => signup(inputes)}
        isLoading={loading}
      >
        Log in
      </Button>
    </>
  );
};

export default SignUp;
