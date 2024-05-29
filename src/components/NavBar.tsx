import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/media.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="20px" justifyContent="space-between">
      <Image borderRadius="15px" boxSize="60px" src={logo} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
