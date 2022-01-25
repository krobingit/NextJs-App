import {
  Flex,
  Box,
  Text,
  Spacer,
  SimpleGrid,
  GridItem,
  Button,
  Image,
  Heading,
  IconButton,
  HStack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMdPhotos } from "react-icons/io";
import { BsThreeDots, BsPlusCircle } from "react-icons/bs";
import { BiPhotoAlbum, BiHeart } from "react-icons/bi";
import styles from "../styles/photos.module.css";
import { CreateAlbum } from "./create-album";
import { AddPhotos } from "./add-photos";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SamplePhotos = [
  {
    image:
      "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    image:
      "https://2.img-dpreview.com/files/p/TS600x450~sample_galleries/3141499184/6105939280.jpg",
  },
  {
    image:
      "https://2.img-dpreview.com/files/p/TS600x450~sample_galleries/3141499184/6105939280.jpg",
  },
  {
    image:
      "https://photographylife.com/wp-content/uploads/2017/08/iPhone-7-Plus-Image-Sample-Large-7.jpg",
  },
];

export function Photos() {
  const fontStyle = { cursor: "pointer", "&:hover": { color: "orange" } };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  return (
    <Box p="5">
      <Flex
        bg="#ffffff"
        align="center"
        justify="flex-start"
        marginBottom="15"
        direction={{ base: "column", md: "row" }}
        border="1px solid #e6ecf5"
        borderRadius="5px"
      >
        <Flex align="flex-start" justify="flex-start" px="25" py="22">
          <Text w="max-content" fontWeight="500" color="#515365" fontSize="16">
            User's Photo Gallery
          </Text>
        </Flex>
        <Spacer />
        <Flex
          p="5"
          w="full"
          h="max-content"
          align="center"
          justify="flex-end"
          gap="3"
          direction={{ base: "column", md: "row" }}
        >
          <Button
            bg="#ff5e3a"
            color="white"
            _hover={{ bg: "#ff763a" }}
            size="md"
            w={{ base: "full", md: "min-content" }}
            onClick={onOpen}
          >
            Create Album+
          </Button>
          <CreateAlbum isOpen={isOpen} onClose={onClose} />
          <AddPhotos />

          <Flex direction={{ base: "row" }} align="center">
            <Box p="5">
              <IoMdPhotos
                size="25px"
                 className={styles.Icon}
                onClick={() => setShow(true)}
              />
            </Box>
            <Box p="5">
              <BiPhotoAlbum
                size="25px"
                 className={styles.Icon}
                onClick={() => setShow(false)}
              />
            </Box>
            <Box p="5">
              <BsThreeDots size="25px" className={styles.Icon} />
            </Box>


          </Flex>
        </Flex>
      </Flex>
      {show ? (
        <Box>
          <SimpleGrid columns={4} w="full" gap={4}>
            {SamplePhotos.map(({ image }, idx) => (
              <GridItem colSpan={{ base: 4, sm: 2, md: 2, lg: 1 }}>
                <Flex key={idx} direction="column" h="full" align="center">
                  <Box className={styles.PhotoContainer}>
                    <Box className={styles.HoverContainer}>
                      <BsThreeDots
                        style={{
                          margin: "10px 18px 0px auto",
                          fontSize: "20px",
                        }}
                      />
                      <HStack mb={10} fontSize="18px" ml="auto" mr="18px">
                        <BiHeart />
                        <Text color="darkgray !important">324</Text>
                      </HStack>
                    </Box>
                    <Image
                      boxSize="250"
                      w="full"
                      objectFit="cover"
                      src={image}
                      borderRadius="5px"
                    />
                  </Box>
                </Flex>
              </GridItem>
            ))}
          </SimpleGrid>
        </Box>
      ) : (
        <Box>
          <SimpleGrid columns={4} w="full" gap={4}>
            <GridItem colSpan={{ base: 4, md: 2, lg: 1 }}>
              <Flex
                border="2px dashed darkgray"
                h="sm"
                direction="column"
                align="center"
                justify="center"
              >
                <BsPlusCircle
                  style={{
                    fontSize: "40px",
                    cursor: "pointer",
                    color: "white",
                    background: "#ff5e3a",
                    borderRadius: "50%",
                  }}
                  onClick={onOpen}
                />
                <Heading size="sm">Create an Album</Heading>
                <Text color="#888da8" fontSize="11px">
                  It only takes a few minutes!
                </Text>
              </Flex>
            </GridItem>
            {SamplePhotos.map(({ image }, idx) => (
              <GridItem colSpan={{ base: 4, md: 1, lg: 1 }}>
                <Flex key={idx} direction="column" h="full" align="center">
                  <Box className={styles.PhotoContainer}>
                    <Box className={styles.HoverContainer}>
                      <BsThreeDots
                        style={{
                          margin: "10px 18px 0px auto",
                          fontSize: "20px",
                        }}
                      />
                      <HStack mb={10} fontSize="18px" ml="auto" mr="18px">
                        <BiHeart />
                        <Text color="darkgray !important">324</Text>
                      </HStack>
                    </Box>
                    <Image
                      boxSize="250"
                      w="full"
                      objectFit="cover"
                      src={image}
                      borderRadius="5px"
                    />
                  </Box>
                  <VStack bg="white" w="full" p="25">
                    <Heading size="sm">Vacations</Heading>
                    <Text color="#888da8" fontSize="11px">
                      Last Added: 2 hours ago
                    </Text>
                    <Carousel w="full" showThumbs={false} showStatus={false}>
                      <Box m="10">
                        <Text>Liked Users</Text>
                      </Box>
                      <Box m="10">
                        <HStack justify="space-around" fontSize="13px">
                          <VStack>
                            <Heading size="sm">24</Heading>
                            <Text color="#888da8">Likes</Text>
                          </VStack>
                          <VStack>
                            <Heading size="sm">50</Heading>
                            <Text color="#888da8">Comments</Text>
                          </VStack>
                          <VStack>
                            <Heading size="sm">85</Heading>
                            <Text color="#888da8">Shares</Text>
                          </VStack>
                        </HStack>
                      </Box>
                    </Carousel>
                  </VStack>
                </Flex>
              </GridItem>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
}
/*  */
