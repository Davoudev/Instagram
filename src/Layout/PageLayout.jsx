import { Box, Flex, Spinner, calc } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { auth } from "../firebase/firebase";
import Navbar from "../components/Navbar/Navbar";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderNavbar = !user && !loading && pathname !== "/auth";
  const canRenderSidebar = user && pathname !== "/auth";

  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;

  return (
    <Flex>
      {/* left side  bar */}
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* Navbar  */}
      {canRenderNavbar ? <Navbar /> : null}
      {/* right - other content */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

const PageLayoutSpinner = () => {
  <Flex flexDir="column" h="100vh" alignItems="center" justifyContent="center">
    <Spinner size={"xl"} />
  </Flex>;
};
