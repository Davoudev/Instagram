import {
  Container,
  VStack,
  Flex,
  SkeletonCircle,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  // { base: "80%", xl: "max-content" }
  return (
    <Container maxW={"container.sm"}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} my={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack>
                <Skeleton height={"10px"} w={"200px"} />
                <Skeleton height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box height={"500px"}>wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost img="/img1.png" avatar="/img1.png" username="aghdas" />
          <FeedPost img="/img2.png" avatar="/img2.png" username="gholi" />
          <FeedPost img="/img3.png" avatar="/img3.png" username="khadijeh" />
          <FeedPost img="/img4.png" avatar="/img4.png" username="saara" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
