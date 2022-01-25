import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  SimpleGrid,
  GridItem,
  Flex,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { BsPlusCircle } from "react-icons/bs";

export function CreateModal({ isOpen, onClose }) {
  return (
    <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Photo Album</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Album name" size="md" />
          <SimpleGrid columns={4} w="full" gap={4}>
            <GridItem colSpan={{ base: 4, md: 2, lg: 1 }}>
              <Flex
                border="2px dashed darkgray"
                w="200px"
                h="200px"
                direction="column"
                align="center"
                justify="center"
                mt={5}
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
                <Heading size="sm" textAlign="center">
                  Add More Photos..
                </Heading>
              </Flex>
            </GridItem>
          </SimpleGrid>
        </ModalBody>

        <ModalFooter>
          <Button
            bg="grey"
            color="white"
            _hover={{ bg: "#ff763a" }}
            size="md"
            w="50%"
            margin="10px"
          >
            Discard Everything
          </Button>
          <Button
            bg="#ff5e3a"
            color="white"
            _hover={{ bg: "#ff763a" }}
            size="md"
            w="50%"
          >
            Post Album
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export function CreateAlbumSquare() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
      <CreateModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export function CreateAlbumCircle() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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

      <CreateModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
