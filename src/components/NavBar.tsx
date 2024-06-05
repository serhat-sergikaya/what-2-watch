import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/media.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="20px" justifyContent="space-between">
      <Link to="/">
        <Image
          borderRadius="15px"
          boxSize="60px"
          src={logo}
          objectFit="cover"
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
