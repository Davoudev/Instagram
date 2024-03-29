import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constance";

const PostFooter = ({ username, isProfilePage }) => {
  const [Likes, setLikes] = useState(1000);
  const [Liked, setLiked] = useState(false);
  const likeHandler = () => {
    if (Liked) {
      setLiked(false);
      setLikes(Likes - 1);
    } else {
      setLiked(true);
      setLikes(Likes + 1);
    }
  };
  return (
    <Box mt={"auto"}>
      <Flex justifyContent={"flex-start"} my={2} cursor={"pointer"}>
        <Box mr={2} onClick={likeHandler}>
          {!Liked ? <NotificationsLogo /> : <UnlikeLogo />}{" "}
        </Box>
        <Box>
          <CommentLogo />
        </Box>
      </Flex>
      <Box>{Likes} Likes</Box>
      {!isProfilePage && (
        <>
          <Flex>
            <Text fontWeight={"bold"} mr={1} fontSize={"sm"}>
              {username}
            </Text>
            Feeling good
          </Flex>
          <Text fontSize="sm" color={"gray"}>
            view all 1,000 comments
          </Text>
        </>
      )}

      <InputGroup>
        <Input
          variant={"flushed"}
          placeholder="Add a comment..."
          fontSize={14}
        />
        <InputRightElement>
          <Button
            color={"blue.500"}
            bg={"transparent"}
            _hover={{ color: "white" }}
            fontWeight={600}
            cursor={"pointer"}
            border={"none"}
          >
            Post
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default PostFooter;
