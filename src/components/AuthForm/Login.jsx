import { Input } from "@chakra-ui/react";
import React from "react";

const Login = () => {
  const [inputes, setInputes] = useState({
    email: "",
    password: "",
  });
  return (
    <>
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
        onChange={(e) => setInputes({ ...inputes, password: e.target.value })}
      />
      <Button colorScheme="blue" w={"full"} size={"sm"} fontSize={14}>
        Log in
      </Button>
    </>
  );
};

export default Login;
