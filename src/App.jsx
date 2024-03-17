import { useState } from "react";
import "./App.css";
import { Box, Button, Text } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box h={"100vh"}>
        <Box>
          <Button background={"primary.100"}>
            <Text
              fontSize={{
                base: "small",
                md: "large",
              }}
            >
              This is for test debugging{" "}
            </Text>
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default App;
