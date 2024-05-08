import { HStack, Image, Input, Switch } from "@chakra-ui/react";
import logo from "../assets/media.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="20px" justifyContent="space-between">
      <Image borderRadius="15px" boxSize="60px" src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
