import React, { useEffect, useState } from "react";
import { Grid, VStack, Skeleton, Box } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);
  return (
    <Grid
      gap={2}
      templateColumns={{ sm: "repeat(1 , 1fr)", md: "repeat(3 , 1fr)" }}
      columnGap={2}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack key={idx}>
            <Skeleton w={"full"}>
              <Box h="300px">Wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <ProfilePost img={"/img1.png"} />
          <ProfilePost img={"/img2.png"} />
          <ProfilePost img={"/img3.png"} />
          <ProfilePost img={"/img4.png"} />
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;
