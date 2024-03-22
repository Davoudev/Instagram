import { Container } from "@chakra-ui/react";
import React from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  return (
    <Container maxW={{ base: "80%", xl: "max-content" }}>
      <FeedPost img="/img1.png" avatar="/img1.png" username="aghdas" />
      <FeedPost img="/img2.png" avatar="/img2.png" username="gholi" />
      <FeedPost img="/img3.png" avatar="/img3.png" username="khadijeh" />
      <FeedPost img="/img4.png" avatar="/img4.png" username="saara" />
    </Container>
  );
};

export default FeedPosts;
