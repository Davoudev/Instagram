import { Avatar, Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import useLogout from "../../hooks/useLogout";

const SuggestedHeader = () => {
  const authUser = useAuthStore((state) => state.user);
  const { handleLogout, isLoggingOut } = useLogout();

  if (!authUser) return null;

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Link to={`${authUser.username}`}>
          <Avatar src={authUser.profilePicURL} />
        </Link>

        <Link to={`${authUser.username}`}>
          <Text>{authUser.username}</Text>
        </Link>
      </Flex>
      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        isLoading={isLoggingOut}
        onClick={handleLogout}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
