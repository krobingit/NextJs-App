import {
  useDisclosure,
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  Heading,
  Divider,
  ModalCloseButton,
  Image,
  Box,
  HStack,
  VStack,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import { BsThreeDots, BsCamera } from "react-icons/bs";
import { BiCommentDetail, BiHeart } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { MenuOptions } from "./menu-items";
import styles from "../styles/photos.module.css";

const SampleComments = [
  {
    name: "Marina Valentine",
    time: "46 mins ago",
    likes: 9,
    comment:
      "Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
  },
  {
    name: "Chris",
    time: "1 hour ago",
    likes: 19,
    comment:
      "Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
  },
];

export function PhotoDialog({ image }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className={styles.PhotoContainer} onClick={onOpen}>
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
      <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={10} >
       <Flex direction={{ base: "column", lg: "row" }} align="center">

        <Image
         m={5}
                boxSize="300"
                w={{ base: "full", lg: "50%" }}
                objectFit="fill"
                src={image}
                borderRadius="5px"
         />

              <Box w={{ base: "full", lg: "50%" }} p={15}>
                <HStack justify="space-between">
                  <Flex align="center" justify="center" direction="row">
                    <Image
                      src="https://fsa.zobj.net/crop.php?r=-k0I4pu1m4BDTAduMzmRn3gUqEg2chRa8D0_7oK_fI90Hxpvj0wpsS13WSy1cKqE0M7G6v2PFucj5CNejXm1Bgiu8PmQA70stSljNWfe14gdBucERhdu9WQFyiSy3khn-ngQlcfD2gZ9Ka2JXsiG21vyGtu-fBCzhsPN6Fc5Hf4qKOjlQLCQxUdY7yk22n7IWVzMeDgKLLibyvYa"
                      borderRadius="full"
                      boxSize={38}
                      objectFit="cover"
                      alt="user"
                    />
                    <VStack ml={3} align="flex-start">
                      <Heading size="sm">User</Heading>
                      <Text fontSize="14px" color="#888da8">
                        2 hours ago
                      </Text>
                    </VStack>
                  </Flex>
                  <MenuOptions />
                </HStack>
                <Text textAlign="left" mt={3} className={styles.FormText}>
                  Here’s a photo from last month’s photoshoot. We really had a
                  great time and got a batch of incredible shots for the new
                  catalog.
                </Text>
                <Divider mt={3} />
                <HStack
                  align="center"
                  justify="space-between"
                  rowGap="10px"
                  wrap="wrap"
                >
                  <HStack>
                    <AiOutlineHeart className={styles.Icon} />
                    <Heading size="sm">148</Heading>
                    <Text className={styles.FormText}>
                      Diana,Nicholas and 13 more liked this
                    </Text>
                  </HStack>
                  <HStack>
                    <BiCommentDetail className={styles.Icon} />
                    <Text size="sm">48</Text>
                    <RiShareForwardLine className={styles.Icon} />
                    <Text size="sm">68</Text>
                  </HStack>
                </HStack>
                <Divider mt={3} />
                <Flex mt={3} overflowY="scroll">
                  <VStack align="flex-start" w="full">
                    {SampleComments.map(({ name, time, likes, comment }) => (
                      <>
                        <HStack justify="space-between" w="full">
                          <Flex align="center" justify="center" direction="row">
                            <Image
                              src="https://1.bp.blogspot.com/-eVkXKJe88ag/YRTUASCFq9I/AAAAAAAAF8M/hfIPziOuLvkJMHlDOMjRL4CiOGsxs1zlQCLcBGAsYHQ/s846/05f812a504ace7bd3bfc635917e33b8f.jpg"
                              borderRadius="full"
                              boxSize={38}
                              objectFit="cover"
                              alt="user"
                            />
                            <VStack ml={3} align="flex-start">
                              <Heading size="sm">{name}</Heading>
                              <Text className={styles.FormText}>{time}</Text>
                            </VStack>
                          </Flex>
                          <BsThreeDots cursor="pointer" />
                        </HStack>
                        <Text className={styles.FormText}>{comment}</Text>
                        <HStack spacing={5}>
                          <HStack align="center">
                            <AiOutlineHeart className={styles.Icon} />
                            <Text className={styles.FormText}>{likes}</Text>
                          </HStack>
                          <Text
                            className={styles.FormText}
                            cursor="pointer"
                            _hover={{ color: "#ff763a" }}
                          >
                            Reply
                          </Text>
                        </HStack>

                        <Divider />
                      </>
                    ))}
                  </VStack>
                </Flex>
                <HStack mt={3}>
                  <Image
                    src="https://fsa.zobj.net/crop.php?r=-k0I4pu1m4BDTAduMzmRn3gUqEg2chRa8D0_7oK_fI90Hxpvj0wpsS13WSy1cKqE0M7G6v2PFucj5CNejXm1Bgiu8PmQA70stSljNWfe14gdBucERhdu9WQFyiSy3khn-ngQlcfD2gZ9Ka2JXsiG21vyGtu-fBCzhsPN6Fc5Hf4qKOjlQLCQxUdY7yk22n7IWVzMeDgKLLibyvYa"
                    borderRadius="full"
                    boxSize={38}
                    objectFit="cover"
                    alt="user"
                  />
                  <Box position="relative" w="full">
                    <Textarea
                      placeholder="Please Enter to Post"
                      size="sm"
                      _focus={{ borderColor: "#ff763a" }}
                    />
                    <BsCamera
                      style={{
                        position: "absolute",
                        bottom: "10",
                        right: "10",
                        cursor: "pointer",
                      }}
                      className={styles.Icon}
                    />
                  </Box>
                </HStack>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
