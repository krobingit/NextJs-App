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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
Link
} from "@chakra-ui/react";
import { IoMdPhotos } from "react-icons/io";
import { BsThreeDots, BsPlusCircle } from "react-icons/bs";
import { BiPhotoAlbum,BiHeart } from "react-icons/bi";
import styles from '../styles/UserProfile-Photo.module.css'


const Photos = [
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

export function PhotoGallery() {
  const fontStyle = { fontSize: "25px" };
  const { isOpen, onOpen, onClose } = useDisclosure();

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

          <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create Photo Album</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
             <Input placeholder='Album name' size='md' />
              </ModalBody>

              <ModalFooter>
                <Button
            bg="grey"
            color="white"
            _hover={{ bg: "#ff763a" }}
            size="md"
                  w="50%"
                  margin="10px"
          >Discard Everything</Button>
              <Button
            bg="#ff5e3a"
            color="white"
            _hover={{ bg: "#ff763a" }}
            size="md"
            w="50%"
            onClick={onOpen}
          >Post Album</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Button
            border="1px solid grey"
            w={{ base: "full", md: "min-content" }}
            color="#888da8"
            bg="transparent"
            size="md"
          >
            Add Photos
          </Button>
          <Flex direction={{ base: "row" }}>
            <Box p="5">

              <Link href="#Photos"><IconButton
                bg="transparent"
              >
                <IoMdPhotos style={fontStyle} />
              </IconButton></Link>
            </Box>
            <Box p="5">
             <IconButton
                bg="transparent"
              >
 <BiPhotoAlbum style={fontStyle} />
              </IconButton>
            </Box>
            <Box p="5">
              <IconButton bg="transparent">
                <BsThreeDots style={fontStyle} />
              </IconButton>
            </Box>
          </Flex>
        </Flex>
      </Flex>
<Box id="Photos">
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
            />
            <Heading size="sm">Create an Album</Heading>
            <Text color="#888da8" fontSize="11px">
              It only takes a few minutes!
            </Text>
          </Flex>
        </GridItem>
          {Photos.map(({ image }, idx) => (

          <GridItem colSpan={{ base: 4, md: 1, lg: 1 }}>
              <Flex key={idx} direction="column" h="full" align="center">
                <Box className={styles.pic}>
                  <Box className={styles.PhotoContainer}>
                  <BiHeart />
                  </Box>
                  <Image
                boxSize="290"
                w="full"
                objectFit="cover"
                src={image}
                borderRadius="5px"
                  />
                       </Box>
              <Flex
                h="190"
                bg="white"
                w="full"
                align="center"
                justify="center"
                p="25"
                direction="column"
              >
                <Heading size="sm">Vacations</Heading>
                <Text color="#888da8" fontSize="11px">
                  Last Added: 2 hours ago
                </Text>
              </Flex>
            </Flex>
              </GridItem>

        ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
/*  */
