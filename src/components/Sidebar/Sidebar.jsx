import { Avatar, Box, Flex, Link, Button, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constance";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const Sidebar = () => {
  const SidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "search",
      link: "/",
    },
    {
      icon: <NotificationsLogo />,
      text: "notification",
      link: "/",
    },
    {
      icon: <CreatePostLogo />,
      text: "create",
      link: "/",
    },
    {
      icon: <Avatar size={"sm"} name="Burak orkmez" src="/profilepic.png" />,
      text: "Profile",
      link: "/davidchaharmehali",
    },
  ];
  const { handleLogout, isLoggingOut, error } = useLogout();
  return (
    <Box
      h={"100vh"}
      position={"sticky"}
      py={8}
      left={0}
      top={0}
      ml={4}
      borderRight={"1px solid"}
      borderColor={" whiteAlpha.300"}
    >
      <Flex direction={"column"} gap={10} h="full" w="full">
        <Link
          as={RouterLink}
          display={{ base: "none", md: "block" }}
          to={"/"}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          as={RouterLink}
          display={{ base: "block", md: "none" }}
          to={"/"}
          cursor={"pointer"}
          __hover={{ bg: "whiteAlpha.200" }}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {SidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                __hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}> {item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
          label={"Log out"}
          hasArrow
          display={{ base: "block", md: "none" }}
          openDelay={500}
        >
          <Link
            mt={"auto"}
            __hover={{ bg: "whiteAlpha.400" }}
            to={"/"}
            as={RouterLink}
            display={"flex"}
            alignItems={"center"}
            gap={4}
            onClick={handleLogout}
            // w={{ base: 10, md: "full" }}
          >
            <Button
              isLoading={isLoggingOut}
              display={{ base: "none", md: "flex" }}
              gap={2}
            >
              <BiLogOut size={25} />
              Log out
            </Button>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
