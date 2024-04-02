import React from "react";

const GoogleAuth = () => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Image src="/google.png" w={5} alt="Googe Image " />
        <Text color={"blue.500"} mx={2} cursor={"pointer"}>
          Log in with Google
        </Text>
      </Flex>
    </>
  );
};

export default GoogleAuth;
