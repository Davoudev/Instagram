import { Box, Flex, calc } from "@chakra-ui/react";
import React from "react";

import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {/* left side  bar */}
      {pathname !== "/auth" ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* right - other content */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
