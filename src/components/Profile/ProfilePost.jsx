import React from "react";
import {
  GridItem,
  Flex,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  Img,
  VStack,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../comment/comment";
import PostFooter from "../FeedPost/PostFooter";

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        aspectRatio={1 / 1}
        overflow={"hidden"}
        cursor={"pointer"}
        borderRadius={4}
        position={"relative"}
        onClick={onOpen}
      >
        <Flex
          transition={"all 0.3s ease"}
          position={"absolute"}
          left={0}
          top={0}
          bottom={0}
          right={0}
          bg={"blackAlpha.700"}
          zIndex={1}
          opacity={0}
          _hover={{ opacity: 1 }}
          justifyContent={"center"}
        >
          <Flex justifyContent={"center"} alignItems={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
            <Flex>
              <FaComment />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={img}
          alt="Post"
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "4xl", md: "6xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"}>
            <Flex gap={3} mx={"auto"}>
              <Box
                flex={1.5}
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
              >
                <Img src="/img1.png" />
              </Box>
              <Flex
                flex={1}
                direction={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex gap={4} alignItems={"center"}>
                    <Avatar
                      src="/profilepic.png"
                      size={"sm"}
                      name="As a Programmer"
                    />
                    <Text fontSize={12} fontWeight={500}>
                      asaProgrammer__
                    </Text>
                  </Flex>
                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                  >
                    <MdDelete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>
                <Divider mt={4} bg={"gray.800"} />
                <VStack justifyContent={"flex-start"} my={6} gap={6}>
                  <Comment
                    name={"ziba"}
                    avatar={"https://bit.ly/kent-c-dodds"}
                    time="1d ago"
                    text="چه دوشیزه ی زیبایی"
                  />
                  <Comment
                    name={"kentsdodds"}
                    avatar={"https://bit.ly/dan-abramov"}
                    time="12h ago "
                    text="nice✨"
                  />
                  <Comment
                    name={"asaProgrammer_"}
                    avatar={"/profilepic.png"}
                    time="3h ago"
                    text="Beatuful pic"
                  />
                </VStack>
                <Divider mt={4} bg={"gray.800"} />

                <PostFooter isProfilePage={true} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
