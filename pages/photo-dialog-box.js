import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

export function PhotoDialog() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        variant="ghost"
        mx={1}
        py={[1, 2, 2]}
        px={4}
        borderRadius={5}
        _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
        aria-label="More"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        <BsThreeDots />
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem>Edit Post</MenuItem>
        <MenuItem>Delete Post</MenuItem>
        <MenuItem>Turn Off Notifications</MenuItem>
        <MenuItem>Select as Featured</MenuItem>
      </MenuList>
    </Menu>
  );
}
